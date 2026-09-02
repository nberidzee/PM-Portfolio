import { copyFile, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const clientDir = resolve("dist/client");
const sourceHtml = resolve("dist/server/prerendered-routes/index.html");
const indexHtml = resolve(clientDir, "index.html");
const notFoundHtml = resolve(clientDir, "404.html");

const html = (await readFile(sourceHtml, "utf8")).replaceAll(
  'href="/favicon.svg"',
  'href="/PM-Portfolio/favicon.svg"',
);

await writeFile(indexHtml, html);
await copyFile(indexHtml, notFoundHtml);
await writeFile(resolve(clientDir, ".nojekyll"), "");

console.log("GitHub Pages export prepared in dist/client");
