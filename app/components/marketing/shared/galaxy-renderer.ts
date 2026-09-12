/** Procedural SemanticLab star field. No third-party artwork or particle maps. */
const vertex = `
precision highp float;
attribute vec4 a_star;
attribute vec2 a_detail;
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
varying mediump float v_temperature;
float ease(float x) { return x*x*x*(x*(x*6.-15.)+10.); }
void main() {
  float seed = a_star.w;
  float depth = a_star.z;
  float angle = u_time*.012;
  mat2 turn = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  vec2 orbit = turn * a_star.xy;
  orbit.y = orbit.y*.58 + (depth-.5)*.012*exp(-length(a_star.xy)*8.);
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
  float bright = step(.995,seed);
  gl_PointSize = (a_detail.x + bright*5.)*u_dpr*mix(1.,.75,scatter);
  // Most stars resolve as fine grains. Only a handful have visible halos.
  v_light = a_detail.y*mix(1.,.35,scatter);
  v_light *= 1. + sin(u_time*.6+seed*60.)*.025*bright;
  // Keep the editorial copy calm; reduce this shade on narrow screens.
  float copyShade = smoothstep(u_view.x*.3,u_view.x*.61,pixel.x);
  v_light *= mix(mix(.12,1.,copyShade),1.,scatter);
  v_depth=depth;
  v_scatter=scatter;
  v_temperature=smoothstep(.035,.24,length(a_star.xy));
}`;
const fragment = `
precision mediump float;
uniform mediump vec2 u_view;
uniform mediump float u_dpr;
varying mediump float v_light;
varying mediump float v_depth;
varying mediump float v_scatter;
varying mediump float v_temperature;
void main() {
  vec2 point=gl_PointCoord-.5;
  float r=length(point);
  float core=exp(-r*r*38.);
  float halo=exp(-r*r*12.)*.16*(1.-smoothstep(.3,.5,r));
  float edge=min(gl_FragCoord.x/u_dpr,u_view.x-gl_FragCoord.x/u_dpr);
  float gutter=clamp(u_view.x*.065,18.,110.);
  float mask=1.-smoothstep(gutter*.45,gutter,edge);
  float alpha=(core+halo)*v_light*mix(1.,mask*.72,v_scatter);
  vec3 color=mix(vec3(1.,.87,.67),vec3(.73,.83,1.),v_temperature);
  color=mix(color,vec3(.965,.965,.957),v_depth*.6);
  gl_FragColor=vec4(color*alpha,alpha);
}`;

// Unresolved starlight and dust are a continuous field beneath the resolved stars.
// Rendering this disk as well as points gives the galaxy photographic density.
const diskVertex = `
attribute vec2 a_quad;
void main() { gl_Position=vec4(a_quad,0.,1.); }
`;
const diskFragment = `
precision highp float;
uniform vec2 u_view;
uniform vec3 u_hero;
uniform float u_dpr;
uniform float u_time;
uniform float u_scroll;
uniform vec3 u_pointer;
uniform float u_motion;
float hash(vec2 p) { return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p) {
  vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);
}
float cloud(vec2 p) {
  float n=noise(p)*.53; p=p*2.07+13.2;
  n+=noise(p)*.27; p=p*2.03+7.6;
  n+=noise(p)*.13; p=p*2.01;
  return n+noise(p)*.07;
}
mat2 turn(float a) { return mat2(cos(a),-sin(a),sin(a),cos(a)); }
void main() {
  float fade=1.-smoothstep(.12,.65,u_scroll);
  if(fade<.001) discard;
  vec2 pixel=vec2(gl_FragCoord.x/u_dpr,u_view.y-gl_FragCoord.y/u_dpr);
  vec2 delta=pixel-u_pointer.xy;
  float distance=length(delta), radius=clamp(min(u_view.x,u_view.y)*.16,90.,150.);
  float falloff=1.-smoothstep(0.,radius,distance);
  pixel-=delta/max(distance,.001)*falloff*falloff*radius*.14*u_pointer.z*u_motion;
  float tilt=smoothstep(0.,.55,u_scroll);
  vec2 p=(pixel-u_hero.xy+vec2(0.,tilt*u_view.y*.10))/(u_hero.z*(1.-tilt*.1));
  p.y/=1.-tilt*.24;
  p=turn(.35)*p; p.y/=.58; p=turn(-u_time*.012)*p;
  float r=length(p);
  if(r>.66) discard;
  float theta=atan(p.y,p.x);
  float granulation=cloud(p*90.);
  float turbulence=cloud(p*21.);
  float phase=theta-log(max(r,.004)/.045)*2.8;
  phase+=(turbulence-.5)*.42 + sin(r*48.)*.045;
  float arms=exp(-pow(abs(sin(phase)),2.)*6.);
  float dust=exp(-pow(abs(sin(phase-.25+(granulation-.5)*.15)),2.)*95.);
  float taper=(1.-smoothstep(.44,.64,r));
  float disk=exp(-r*6.5)*.24;
  float filaments=pow(granulation,1.6)*2.;
  float spiral=arms*smoothstep(.045,.14,r)*exp(-r*3.2)*.60;
  float light=(disk+spiral*(.3+filaments))*taper;
  light*=1.-dust*.88*smoothstep(.025,.12,r);
  light*=.64+turbulence*.6;
  float bulge=exp(-r*28.)*.74 + exp(-r*r*2800.)*.42;
  vec3 warm=vec3(1.,.87,.68), cool=vec3(.64,.76,.94);
  vec3 color=mix(warm,cool,smoothstep(.07,.38,r))*light + warm*bulge;
  // Smooth copy protection, especially where tablet copy overlaps the disk.
  float protect=mix(.06,1.,smoothstep(u_view.x*.38,u_view.x*.67,pixel.x));
  color*=fade*protect;
  gl_FragColor=vec4(color, max(color.r,max(color.g,color.b)));
}
`;

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
  const count = 22000;
  const data = new Float32Array(count * 6);
  const normal = () => Math.sqrt(-2*Math.log(Math.max(random(), .00001))) * Math.cos(random()*Math.PI*2);
  for (let i=0; i<count; i++) {
    const population = random();
    let radius: number, theta: number;
    if (population < .22) {
      // A dense spherical bulge, not an empty spiral centre.
      radius = Math.min(.19, Math.abs(normal())*.050);
      theta = random()*Math.PI*2;
    } else if (population < .76) {
      radius = .065 + Math.pow(random(),.82)*.49;
      const arm = i%2*Math.PI;
      theta = arm + Math.log(radius/.045)*2.8 + normal()*(.13+radius*.22);
      theta += Math.sin(radius*48+arm)*.045;
    } else {
      // An exponential disk fills the space between arms with faint stars.
      radius = Math.min(.61, -Math.log(Math.max(random()*random(),.00001))*.09);
      theta = random()*Math.PI*2;
    }
    const x=Math.cos(theta)*radius, y=Math.sin(theta)*radius;
    const seed=random(), depth=random();
    const phase=theta-Math.log(Math.max(radius,.001)/.045)*2.8;
    const dust=Math.exp(-Math.pow(Math.sin(phase-.25),2)*80)*Math.min(1,radius*12);
    const size=seed>.995 ? 2.8+random()*1.4 : .8+Math.pow(random(),3)*2.1;
    const light=(population<.22?.19:.18+random()*.20)*(1-dust*.88);
    data.set([x,y,depth,seed,size,light],i*6);
  }
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  const location = gl.getAttribLocation(program, "a_star");
  const detail = gl.getAttribLocation(program, "a_detail");
  function bindStars() {
    gl!.bindBuffer(gl!.ARRAY_BUFFER,buffer);
    gl!.enableVertexAttribArray(location); gl!.vertexAttribPointer(location,4,gl!.FLOAT,false,24,0);
    gl!.enableVertexAttribArray(detail); gl!.vertexAttribPointer(detail,2,gl!.FLOAT,false,24,16);
  }
  bindStars();
  const uniform = Object.fromEntries(["view","hero","pointer","time","scroll","dpr","motion"].map(name=>[name,gl.getUniformLocation(program,`u_${name}`)]));
  const diskVs=compile(gl.VERTEX_SHADER,diskVertex), diskFs=compile(gl.FRAGMENT_SHADER,diskFragment);
  const diskProgram=gl.createProgram()!;
  gl.attachShader(diskProgram,diskVs); gl.attachShader(diskProgram,diskFs); gl.linkProgram(diskProgram);
  gl.deleteShader(diskVs); gl.deleteShader(diskFs);
  if(!gl.getProgramParameter(diskProgram,gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(diskProgram)||"Galaxy disk link failed");
  const quad=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,quad);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  const quadLocation=gl.getAttribLocation(diskProgram,"a_quad");
  const diskUniform=Object.fromEntries(["view","hero","dpr","time","scroll","pointer","motion"].map(name=>[name,gl.getUniformLocation(diskProgram,`u_${name}`)]));
  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.clearColor(0,0,0,0);
  return {
    resize(width: number, height: number, heroHeight: number) {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width*dpr); canvas.height = Math.round(height*dpr);
      gl.viewport(0,0,canvas.width,canvas.height);
      const mobile = width < 760;
      const centreX=width*(mobile?.88:.76);
      const centreY=Math.min(heroHeight*(mobile?.57:.49),height*.58);
      const size=Math.min(width*(mobile?1.3:.79),height*1.32);
      for(const [active, uniforms] of [[program,uniform],[diskProgram,diskUniform]] as const) {
        gl.useProgram(active);
        gl.uniform2f(uniforms.view,width,height); gl.uniform1f(uniforms.dpr,dpr);
        gl.uniform3f(uniforms.hero,centreX,centreY,size);
      }
    },
    draw(frame: GalaxyFrame) {
      gl.clear(gl.COLOR_BUFFER_BIT);
      if(frame.scroll<.65) {
        gl.useProgram(diskProgram);
        gl.uniform1f(diskUniform.time,frame.time); gl.uniform1f(diskUniform.scroll,frame.scroll);
        gl.uniform1f(diskUniform.motion,+frame.motion);
        gl.uniform3f(diskUniform.pointer,frame.pointerX,frame.pointerY,frame.pointerStrength);
        gl.disableVertexAttribArray(location); gl.disableVertexAttribArray(detail);
        gl.bindBuffer(gl.ARRAY_BUFFER,quad); gl.enableVertexAttribArray(quadLocation);
        gl.vertexAttribPointer(quadLocation,2,gl.FLOAT,false,0,0);
        gl.drawArrays(gl.TRIANGLES,0,6); gl.disableVertexAttribArray(quadLocation);
      }
      gl.useProgram(program); bindStars();
      gl.uniform1f(uniform.time,frame.time); gl.uniform1f(uniform.scroll,frame.scroll);
      gl.uniform1f(uniform.motion,+frame.motion);
      gl.uniform3f(uniform.pointer,frame.pointerX,frame.pointerY,frame.pointerStrength);
      gl.drawArrays(gl.POINTS,0,count);
    },
    dispose() { gl.deleteBuffer(buffer); gl.deleteBuffer(quad); gl.deleteProgram(program); gl.deleteProgram(diskProgram); },
  };
}
