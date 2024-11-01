import os from "os";
import path from "path";
import { exec } from "child_process";
import { runCommand } from "../utils/runCommand";

export async function runPythonFile(filePath: string) {
  // Normalize path for different operating systems
  const normalizedPath = path.normalize("py_modules");

  // Determine the activation script path based on OS
  const isWindows = os.platform() === "win32";

  // Command to run Python with venv
  const pythonCmd = isWindows
    ? path.join(normalizedPath, "Scripts", "python.exe")
    : path.join(normalizedPath, "bin", "python");

  await runCommand(pythonCmd, [filePath]);
}
