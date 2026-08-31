import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const targetDirs = [
  "public/portfolio",
  "public/pre-wedding",
];

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}

let totalBefore = 0;
let totalAfter = 0;
let optimizedCount = 0;

for (const targetDir of targetDirs) {
  if (!fs.existsSync(targetDir)) continue;
  const files = getAllImages(targetDir);
  for (const file of files) {
    try {
      const beforeStat = fs.statSync(file);
      totalBefore += beforeStat.size;

      // Optimize using macOS sips (resize to max 1920px width/height and re-compress)
      // Only process if file size > 300KB
      if (beforeStat.size > 300 * 1024) {
        // Resample width/height to max 1920 if larger
        execSync(`sips -Z 1920 "${file}" --setProperty formatOptions 82 2>/dev/null`);
        optimizedCount++;
      }

      const afterStat = fs.statSync(file);
      totalAfter += afterStat.size;
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err.message);
    }
  }
}

const beforeMB = (totalBefore / (1024 * 1024)).toFixed(2);
const afterMB = (totalAfter / (1024 * 1024)).toFixed(2);
const savingsMB = ((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2);
const savingsPercent = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);

console.log(`\n========================================`);
console.log(`Image Optimization Summary:`);
console.log(`Optimized images: ${optimizedCount}`);
console.log(`Original size:    ${beforeMB} MB`);
console.log(`Optimized size:   ${afterMB} MB`);
console.log(`Total Saved:      ${savingsMB} MB (${savingsPercent}% reduction)`);
console.log(`========================================\n`);
