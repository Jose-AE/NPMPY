import path from "path";
import os from "os";

export function getPythonPath(): string {
  const isWindows = os.platform() === "win32";

  const pipPath = isWindows
    ? path.join("py_modules", "Scripts", "python.exe")
    : path.join("py_modules", "bin", "python");

  return pipPath;
}
