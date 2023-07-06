const assert  = require("node:assert");
const fs = require('fs');
const path = require('node:path'); 

function lPath(name: string): string {
   
  assert(hasNoURLParts(name), "Have url parts");
  assert(isValidFileName(name), "Invalid path name");

  let basePath = getBasePath();
  let folder_name = "loco";
  return path.resolve(path.join(basePath, folder_name, name));
}

function isValidFileName(name: string): boolean{
  return /^[a-z0-9_.@()-]+\.txt$/i.test(name);
}
function hasNoURLParts(name: String): boolean{
  return !name.includes("/") && !name.includes("\\");
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
