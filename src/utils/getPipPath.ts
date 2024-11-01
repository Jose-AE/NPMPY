import path from "path";
import os from "os";

export function getPipPath(): string {
  const isWindows = os.platform() === "win32";

  const pipPath = isWindows
    ? path.join("py_modules", "Scripts", "pip.exe")
    : path.join("py_modules", "bin", "pip");

  return pipPath;
}
