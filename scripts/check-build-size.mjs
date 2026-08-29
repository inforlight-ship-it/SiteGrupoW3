import { readdir, readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import path from "node:path";

const assetDir = path.resolve("dist/assets");
const files = await readdir(assetDir);
const measured = [];

for (const file of files) {
  if (!file.endsWith(".js") && !file.endsWith(".css")) continue;
  const buffer = await readFile(path.join(assetDir, file));
  measured.push({
    file,
    raw: buffer.byteLength,
    gzip: gzipSync(buffer).byteLength,
    kind: file.endsWith(".js") ? "js" : "css",
  });
}

const js = measured.filter((item) => item.kind === "js");
const css = measured.filter((item) => item.kind === "css");
const largestJsGzip = Math.max(0, ...js.map((item) => item.gzip));
const totalJsGzip = js.reduce((sum, item) => sum + item.gzip, 0);
const totalCssGzip = css.reduce((sum, item) => sum + item.gzip, 0);

const kb = (bytes) => (bytes / 1024).toFixed(1);

console.log("Build size report:");
for (const item of measured.sort((a, b) => b.gzip - a.gzip)) {
  console.log(`- ${item.file}: ${kb(item.raw)} KiB raw / ${kb(item.gzip)} KiB gzip`);
}
console.log(`Total JS gzip: ${kb(totalJsGzip)} KiB`);
console.log(`Largest JS chunk gzip: ${kb(largestJsGzip)} KiB`);
console.log(`Total CSS gzip: ${kb(totalCssGzip)} KiB`);

const limits = {
  largestJsGzip: 135 * 1024,
  totalJsGzip: 240 * 1024,
  totalCssGzip: 40 * 1024,
};

const failures = [];
if (largestJsGzip > limits.largestJsGzip) failures.push(`largest JS chunk exceeds 135 KiB gzip (${kb(largestJsGzip)} KiB)`);
if (totalJsGzip > limits.totalJsGzip) failures.push(`total JS exceeds 240 KiB gzip (${kb(totalJsGzip)} KiB)`);
if (totalCssGzip > limits.totalCssGzip) failures.push(`CSS exceeds 40 KiB gzip (${kb(totalCssGzip)} KiB)`);

if (failures.length) {
  console.error("Performance budget failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Performance budget passed.");
