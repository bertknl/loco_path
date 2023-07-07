import assert from "assert";
import { readFileSync } from "fs";
import { resolve, join } from "path";

function lPath(name: string): string {
 
  assert(hasNoURLParts(name), "Have url parts");
 
  let basePath = getBasePath();
  let folder_name = "loco";
  return resolve(join(basePath, folder_name, name));
}

 
function hasNoURLParts(name: String): boolean{
  return !name.includes("/") && !name.includes("\\");
}

function getBasePath(pathConfigJSON?: string) {
  let basePath: string;
  if (pathConfigJSON === null || pathConfigJSON === undefined) {
    basePath = "./";
  } else {
    let obj = JSON.parse(readFileSync(pathConfigJSON, "utf8"));
    basePath = obj.basePath;
  }
  return basePath;
}
export default lPath;
 
