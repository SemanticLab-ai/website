/** Procedural SemanticLab star field. No third-party artwork or particle maps. */
const vertex = `
precision highp float;
attribute vec4 a_star;
uniform mediump vec2 u_view;
uniform vec3 u_hero;
uniform vec3 u_pointer;
uniform float u_time;
uniform float u_scroll;
uniform mediump float u_dpr;
uniform float u_motion;
varying mediump float v_light;
varying mediump float v_depth;
varying mediump float v_scatter;
varying mediump float v_lime;
float ease(float x) { return x*x*x*(x*(x*6.-15.)+10.); }
void main() {
  float seed = a_star.w;
  float depth = a_star.z;
  float radiusFromCore = length(a_star.xy);
  // Stable orbital direction; the inner disk moves slightly faster without wobbling.
  float angle = u_time*(.017 + .003*exp(-radiusFromCore*7.));
  mat2 turn = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  vec2 orbit = turn * a_star.xy;
  // A thin inclined disk with a small, thicker central bulge.
  orbit.y = orbit.y*.60 + (depth-.5)*.025*exp(-radiusFromCore*9.);
  float inclination = -.35;
  orbit = mat2(cos(inclination),-sin(inclination),sin(inclination),cos(inclination)) * orbit;
  float tilt = smoothstep(0., .55, u_scroll);
  orbit.y *= 1. - tilt*.24;
  vec2 origin = u_hero.xy + orbit*u_hero.z*(1.-tilt*.1);
  origin.y -= tilt*u_view.y*.10;
  float p = clamp((u_scroll - .12 - seed*.06 - (1.-depth)*.025)/.55, 0., 1.);
  float scatter = ease(p);
  float side = a_star.x < 0. ? -1. : 1.;
  float gutter = clamp(u_view.x*.065, 18., 110.);
  float inset = mix(-gutter*.5, gutter, fract(seed*37.7));
  vec2 target = vec2(side < 0. ? inset : u_view.x-inset, fract(seed*73.13)*u_view.y*1.3);
  float travel = max(0., u_scroll-.75)*u_view.y*(.12+depth*.44)*u_motion;
  target.y = mod(target.y-travel+u_view.y*.15, u_view.y*1.3)-u_view.y*.15;
  vec2 arc = vec2(side*abs(target.x-origin.x)*.08, orbit.x*u_hero.z*(.22+depth*.14));
  float overshoot = sin(smoothstep(.64,1.,p)*3.14159)*.025*u_motion;
  vec2 pixel = mix(origin,target,scatter+overshoot) + arc*sin(scatter*3.14159);
  vec2 delta = pixel-u_pointer.xy;
  float distance = length(delta);
  float radius = clamp(min(u_view.x,u_view.y)*.16,90.,150.);
  float influence = 1.-smoothstep(0.,radius,distance);
  pixel += delta/max(distance,.001)*influence*influence*radius*.14*(.7+depth*.5)*u_pointer.z*u_motion;
  gl_Position = vec4(pixel/u_view*vec2(2.,-2.)+vec2(-1.,1.),0.,1.);
  float bright = step(.96,seed);
  gl_PointSize = (2. + depth*3. + bright*9.)*u_dpr*mix(1.,.72,scatter);
  v_light = (.24+depth*.42+bright*.32)*mix(1.,.76,scatter);
  v_light *= 1.-u_motion*.035 + sin(u_time*.6+seed*60.)*u_motion*.035;
  // Keep the editorial copy calm; reduce this shade on narrow screens.
  float copyShade = smoothstep(u_view.x*.3,u_view.x*.61,pixel.x);
  v_light *= mix(mix(.12,1.,copyShade),1.,scatter);
  v_depth=depth;
  v_scatter=scatter;
  v_lime=step(.78,seed);
}`;
const fragment = `
precision mediump float;
uniform mediump vec2 u_view;
uniform mediump float u_dpr;
varying mediump float v_light;
varying mediump float v_depth;
varying mediump float v_scatter;
varying mediump float v_lime;
void main() {
  vec2 point=gl_PointCoord-.5;
  float r=length(point);
  float core=1.-smoothstep(.05,.20,r);
  float halo=exp(-r*r*20.)*.38*(1.-smoothstep(.35,.5,r));
  float edge=min(gl_FragCoord.x/u_dpr,u_view.x-gl_FragCoord.x/u_dpr);
  float gutter=clamp(u_view.x*.065,18.,110.);
  float mask=1.-smoothstep(gutter*.45,gutter,edge);
  float alpha=(core+halo)*v_light*mix(1.,mask*.72,v_scatter);
  vec3 sage=vec3(.659,.686,.580);
  vec3 white=vec3(.965,.965,.957);
  vec3 lime=vec3(.545,1.,.302);
  vec3 color=mix(mix(sage,white,v_depth),lime,v_lime*.85);
  gl_FragColor=vec4(color*alpha,alpha);
}`;

export type GalaxyFrame = {
  time: number; scroll: number; pointerX: number; pointerY: number;
  pointerStrength: number; motion: boolean;
};

export function createGalaxyRenderer(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, depth: false, powerPreference: "low-power" });
  if (!gl) return null;
  function compile(type: number, source: string) {
    const shader = gl!.createShader(type);
    if (!shader) throw new Error("Unable to allocate galaxy shader");
    gl!.shaderSource(shader, source);
    gl!.compileShader(shader);
    if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
      const message = gl!.getShaderInfoLog(shader);
      gl!.deleteShader(shader);
      throw new Error(`Galaxy shader: ${message}`);
    }
    return shader;
  }
  const vs = compile(gl.VERTEX_SHADER, vertex);
  const fs = compile(gl.FRAGMENT_SHADER, fragment);
  const program = gl.createProgram()!;
  gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
  gl.deleteShader(vs); gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Unable to link galaxy shaders: ${message}`);
  }
  gl.useProgram(program);
  // Seeded sampling keeps the formation stable across resizes and route visits.
  let state = 7319;
  const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296; };
  const count = 4200;
  const data = new Float32Array(count * 4);
  const normal = () => Math.sqrt(-2*Math.log(Math.max(random(),.00001)))*Math.cos(random()*Math.PI*2);
  for (let i=0; i<count; i++) {
    const population=random();
    let radius: number, theta: number;
    if(population<.10) {
      // A compact but still individually resolved central stellar population.
      radius=Math.min(.16,Math.abs(normal())*.055);
      theta=random()*Math.PI*2;
    } else if(population<.80) {
      // Logarithmic arms open naturally outward, with irregular widths and spurs.
      radius=.055+Math.pow(random(),.78)*.50;
      const arm=i%2*Math.PI;
      theta=arm+Math.log(radius/.055)*2.35;
      theta+=normal()*(.14+radius*.22)+Math.sin(radius*43+arm)*.075;
    } else {
      // Sparse inter-arm stars prevent the shape from becoming two perfect ribbons.
      radius=Math.sqrt(random())*.57;
      theta=random()*Math.PI*2;
    }
    data.set([Math.cos(theta)*radius,Math.sin(theta)*radius,random(),random()],i*4);
  }
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  const location = gl.getAttribLocation(program, "a_star");
  gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location,4,gl.FLOAT,false,0,0);
  const uniform = Object.fromEntries(["view","hero","pointer","time","scroll","dpr","motion"].map(name=>[name,gl.getUniformLocation(program,`u_${name}`)]));
  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.clearColor(0,0,0,0);
  return {
    resize(width: number, height: number, heroHeight: number) {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width*dpr); canvas.height = Math.round(height*dpr);
      gl.viewport(0,0,canvas.width,canvas.height);
      gl.uniform2f(uniform.view,width,height); gl.uniform1f(uniform.dpr,dpr);
      const mobile = width < 760;
      gl.uniform3f(uniform.hero, width*(mobile?.76:.75), Math.min(heroHeight*(mobile?.57:.49),height*.58), Math.min(width*(mobile?1.3:.79),height*1.32));
    },
    draw(frame: GalaxyFrame) {
      gl.uniform1f(uniform.time,frame.time); gl.uniform1f(uniform.scroll,frame.scroll);
      gl.uniform1f(uniform.motion,+frame.motion);
      gl.uniform3f(uniform.pointer,frame.pointerX,frame.pointerY,frame.pointerStrength);
      gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.POINTS,0,count);
    },
    dispose() { gl.deleteBuffer(buffer); gl.deleteProgram(program); },
  };
}
