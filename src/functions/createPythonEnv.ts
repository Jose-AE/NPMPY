import { spawn } from "child_process";
import path from "path";
import { getPythonPath } from "../utils/getPythonPath";
import fs from "fs";
import { runCommand } from "../utils/runCommand";

export async function createPythonEnv(upgradePip: boolean = true) {
  try {
    const normalizedPath = path.normalize("py_modules");

    // Check if the directory exists
    if (fs.existsSync(normalizedPath)) {
      fs.rmSync(normalizedPath, { recursive: true, force: true });
    }

    // Step 1: Create the virtual environment
    await runCommand("python", ["-m", "venv", normalizedPath]);

    // Step 2: Upgrade pip inside the virtual environment
    if (upgradePip)
      await runCommand(getPythonPath(), [
        "-m",
        "pip",
        "install",
        "--upgrade",
        "pip",
      ]);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
}
