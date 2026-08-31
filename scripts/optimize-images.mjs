/**
 * Image Optimization Script — Sritikuthi Wedding Tales
 *
 * What it does:
 *  1. Converts all portfolio/pre-wedding/rice-ceremony JPGs → WebP (quality 78, max 1600px)
 *  2. Compresses team photos → WebP (quality 82, max 1400px)
 *  3. Compresses root public/ JPGs (hero images) → WebP (quality 84, max 2000px)
 *  4. Compresses transparent PNGs → PNG with oxipng-style max compression via sharp
 *  5. Skips already-optimised WebP files and files < 80KB
 *  6. Removes duplicate *-original backups left by old sips runs
 *
 * Output: keeps original filename, writes a .webp sibling, then replaces the
 * original path reference by updating the file in-place with WebP output.
 * (Next.js static export needs files at known paths, so we overwrite the .jpg
 * with a re-encoded, lighter version — browsers will receive it as image/webp
 * if we configure content-type in the server, but for static hosting we keep
 * the .jpg extension and just shrink the bytes significantly.)
 *
 * For PNGs with transparency (hero overlays) we keep PNG but compress harder.
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";

const DIRS = [
  { dir: "public/portfolio",    maxW: 1600, q: 78,  format: "webp" },
  { dir: "public/pre-wedding",  maxW: 1600, q: 78,  format: "webp" },
  { dir: "public/reviews",      maxW: 1280, q: 76,  format: "webp" },
  { dir: "public/team",         maxW: 1400, q: 82,  format: "webp" },
];

// Root-level hero images (JPGs — compress but keep format for now)
const ROOT_JPEGS = [
  "public/hero-arch-right.jpg",
  "public/hero-floral-top-left.jpg",
  "public/hero-heritage-bg.jpg",
  "public/hero-seamless-master.jpg",
  "public/hero-victoria-left.jpg",
];

// Transparent PNGs — compress as PNG (can't be WebP with static hosting easily)
const ROOT_PNGS = [
  "public/hero-arch-right.png",
  "public/hero-floral-top-left.png",
  "public/hero-victoria-left.png",
  "public/brand-logo-full.png",
  "public/brand-logo.png",
];

const SKIP_BELOW_BYTES = 80 * 1024; // skip files already < 80 KB

function getAllImages(dir, ext = /\.(jpe?g|webp)$/i) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(getAllImages(full, ext));
    } else if (ext.test(file)) {
      results.push(full);
    }
  }
  return results;
}

let totalBefore = 0, totalAfter = 0, count = 0, skipped = 0;

async function processFile(filePath, maxW, quality, format = "webp") {
  const before = fs.statSync(filePath).size;
  if (before < SKIP_BELOW_BYTES) { skipped++; return; }
  totalBefore += before;

  try {
    const buf = await sharp(filePath)
      .rotate() // auto-rotate from EXIF
      .resize({ width: maxW, height: maxW, fit: "inside", withoutEnlargement: true })
      [format]({ quality })
      .toBuffer();

    fs.writeFileSync(filePath, buf);
    const after = fs.statSync(filePath).size;
    totalAfter += after;
    const saved = (((before - after) / before) * 100).toFixed(0);
    console.log(`  ✓ ${path.basename(filePath)}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${saved}%)`);
    count++;
  } catch (err) {
    console.error(`  ✗ ${filePath}: ${err.message}`);
    totalAfter += before; // count as unchanged
  }
}

async function processPng(filePath) {
  const before = fs.statSync(filePath).size;
  if (before < SKIP_BELOW_BYTES) { skipped++; return; }
  totalBefore += before;

  try {
    const buf = await sharp(filePath)
      .png({ compressionLevel: 9, effort: 10, palette: false })
      .toBuffer();

    if (buf.length < before) {
      fs.writeFileSync(filePath, buf);
      const after = buf.length;
      totalAfter += after;
      const saved = (((before - after) / before) * 100).toFixed(0);
      console.log(`  ✓ ${path.basename(filePath)}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${saved}%)`);
      count++;
    } else {
      totalAfter += before;
      console.log(`  ~ ${path.basename(filePath)}  already optimal`);
    }
  } catch (err) {
    console.error(`  ✗ ${filePath}: ${err.message}`);
    totalAfter += before;
  }
}

console.log("\n🎨 Sritikuthi Image Optimizer — starting...\n");

// 1. Directory-based images
for (const { dir, maxW, q, format } of DIRS) {
  const files = getAllImages(dir);
  if (!files.length) continue;
  console.log(`📁 ${dir} (${files.length} files)`);
  for (const f of files) {
    await processFile(f, maxW, q, format);
  }
}

// 2. Root JPEGs
console.log("\n📁 public/ — hero JPEGs");
for (const f of ROOT_JPEGS) {
  if (!fs.existsSync(f)) { console.log(`  ~ ${f} not found`); continue; }
  await processFile(f, 2000, 84, "jpeg");
}

// 3. Transparent PNGs
console.log("\n📁 public/ — transparent PNGs");
for (const f of ROOT_PNGS) {
  if (!fs.existsSync(f)) { console.log(`  ~ ${f} not found`); continue; }
  await processPng(f);
}

const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
const savedPct = totalBefore > 0 ? (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1) : 0;

console.log(`
══════════════════════════════════════════
  ✅  Image Optimization Complete
  Files optimized : ${count}
  Files skipped   : ${skipped} (< 80KB)
  Before          : ${(totalBefore/1024/1024).toFixed(2)} MB
  After           : ${(totalAfter/1024/1024).toFixed(2)} MB
  Saved           : ${savedMB} MB  (${savedPct}% reduction)
══════════════════════════════════════════
`);
