const assert  = require("node:assert");
const fs = require('fs');
const path = require('node:path'); 

function lPath(path_name: string): string {
  assert(ifValidPath(path_name), "Invalid path name");
  assert(!path_name.includes("/") && !path_name.includes("\\"), "Invalid path name");

  let basePath = getBasePath();
  let folder_name = "loco";
  return path.resolve(path.join(basePath, folder_name, path_name));
}

function ifValidPath(path: string): boolean {
  return /^(\/?[a-z0-9]+)+$/.test(path);
}

function getBasePath(pathConfigJSON?: string) {
  let basePath: string;
  if (pathConfigJSON === null || pathConfigJSON === undefined) {
    basePath = "./";
  } else {
    let obj = JSON.parse(fs.readFileSync(pathConfigJSON, "utf8"));
    basePath = obj.basePath;
  }
  return basePath;
}

module.exports = lPath;
