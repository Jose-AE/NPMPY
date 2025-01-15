import path from "path";
import { getPythonPath } from "../utils/getPythonPath";
import fs from "fs";
import { runCommand } from "../utils/runCommand";

export async function createPythonEnv(upgradePip: boolean = true): Promise<boolean> {
  try {
    const normalizedPath = path.normalize("py_modules");

    // Check if the directory exists
    if (fs.existsSync(normalizedPath)) {
      fs.rmSync(normalizedPath, { recursive: true, force: true });
    }

    // Step 1: Create the virtual environment
    let createdEnv = await runCommand("python", ["-m", "venv", normalizedPath]);

    if (!createdEnv) {
      console.warn("'python' command not found. Trying 'python3'...");
      createdEnv = await runCommand("python3", ["-m", "venv", normalizedPath]);
    }

    if (!createdEnv) {
      console.warn(
        "Please ensure Python is installed on your system and added to your PATH environment variable.\n" +
          "1. Verify that Python is installed: Run 'python --version' or 'python3 --version' in your command prompt.\n" +
          "2. If not installed, download Python from https://www.python.org/downloads/ and install it.\n"
      );
    }

    // Step 2: Upgrade pip inside the virtual environment
    let updatedPip = true;
    if (upgradePip && createdEnv)
      updatedPip = await runCommand(getPythonPath(), ["-m", "pip", "install", "--upgrade", "pip"]);

    return updatedPip && createdEnv;
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return false;
  }
}
