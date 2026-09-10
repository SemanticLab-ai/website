import sharp from "sharp";

const SOURCE_DIAMETER = 1254;
const VISIBLE_RADIUS = 566;

const variants = [
  {
    output: "public/images/deck/tieman/vision-venn-intersection-desktop.png",
    width: 2560,
    height: 2080,
    circleSize: 1408,
    centreSpacing: 748,
    triangleRise: 647.8,
  },
  {
    output: "public/images/deck/tieman/vision-venn-intersection-mobile.png",
    width: 1520,
    height: 1592,
    circleSize: 1032,
    centreSpacing: 560,
    triangleRise: 484.976,
  },
];

function createIntersection({ width, height, circleSize, centreSpacing, triangleRise }) {
  const pixels = Buffer.alloc(width * height * 4);
  const radius = (circleSize * VISIBLE_RADIUS) / SOURCE_DIAMETER;
  const centreX = width / 2;
  const centreY = circleSize / 2;
  const centres = [
    [centreX, centreY],
    [centreX - centreSpacing / 2, centreY + triangleRise],
    [centreX + centreSpacing / 2, centreY + triangleRise],
  ];
  const centroidY = centreY + (triangleRise * 2) / 3;
  const feather = 2.25;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let signedInterior = Number.POSITIVE_INFINITY;

      for (const [cx, cy] of centres) {
        const distance = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
        signedInterior = Math.min(signedInterior, radius - distance);
      }

      if (signedInterior <= -feather) continue;

      const edgeCoverage = Math.max(0, Math.min(1, (signedInterior + feather) / (feather * 2)));
      const vertical = Math.max(0, Math.min(1, (y - (centroidY - radius * 0.38)) / (radius * 0.8)));
      const horizontal = Math.abs(x - centreX) / radius;
      const edgeLift = Math.max(0, 1 - Math.min(1, signedInterior / 20));

      const red = Math.round(139 + 18 * (1 - vertical) + 8 * edgeLift);
      const green = Math.round(255 - 8 * vertical);
      const blue = Math.round(77 + 15 * (1 - horizontal) + 10 * edgeLift);
      const alpha = Math.round(255 * edgeCoverage);
      const offset = (y * width + x) * 4;

      pixels[offset] = red;
      pixels[offset + 1] = green;
      pixels[offset + 2] = blue;
      pixels[offset + 3] = alpha;
    }
  }

  return pixels;
}

for (const variant of variants) {
  const pixels = createIntersection(variant);

  await sharp(pixels, {
    raw: {
      width: variant.width,
      height: variant.height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(variant.output);

  console.log(`Generated ${variant.output}`);
}
