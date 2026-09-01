import sharp from "sharp";
import { writeFileSync, copyFileSync } from "node:fs";

async function generateFavicons() {
  const logoPath = "public/brand-logo.png";
  
  // 1. Create a 512x512 master square icon with deep luxury royal-espresso background and gold circular accent
  const logoBuffer = await sharp(logoPath)
    .resize(380, 220, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const backgroundSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" rx="100" fill="#1F0E0B"/>
      <circle cx="256" cy="256" r="236" stroke="#EDB600" stroke-width="8" fill="none" opacity="0.65"/>
    </svg>
  `);

  const masterSquare = await sharp(backgroundSvg)
    .composite([
      {
        input: logoBuffer,
        top: 146,
        left: 66,
      },
    ])
    .png()
    .toBuffer();

  // Save 512x512 icon
  writeFileSync("public/icon-512.png", masterSquare);
  writeFileSync("public/icon.png", masterSquare);

  // 2. 180x180 Apple Touch Icon
  const appleTouch = await sharp(masterSquare)
    .resize(180, 180)
    .png()
    .toBuffer();
  writeFileSync("public/apple-touch-icon.png", appleTouch);

  // 3. 32x32 Favicon PNG
  const favicon32 = await sharp(masterSquare)
    .resize(32, 32)
    .png()
    .toBuffer();
  writeFileSync("public/favicon-32x32.png", favicon32);
  writeFileSync("public/favicon.png", favicon32);

  // 4. 16x16 Favicon PNG
  const favicon16 = await sharp(masterSquare)
    .resize(16, 16)
    .png()
    .toBuffer();
  writeFileSync("public/favicon-16x16.png", favicon16);

  // 5. 48x48 Favicon ICO / copy
  const favicon48 = await sharp(masterSquare)
    .resize(48, 48)
    .png()
    .toBuffer();
  writeFileSync("public/favicon.ico", favicon48);
  writeFileSync("src/app/favicon.ico", favicon48);

  console.log("✅ Favicons generated successfully in public/ and src/app/!");
}

generateFavicons().catch(console.error);
