import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";

const source = new URL("../public/.htaccess", import.meta.url);
const target = new URL("../dist/.htaccess", import.meta.url);

await access(source, constants.R_OK);
await copyFile(source, target);
console.log("Copied public/.htaccess to dist/.htaccess");
