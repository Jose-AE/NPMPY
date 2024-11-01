import { spawn } from "child_process";
import { getPipPath } from "../utils/getPipPath";
import { runCommand } from "../utils/runCommand";

export function installRequirements() {
  runCommand(getPipPath(), [
    "install",
    "--no-cache-dir",
    "-r",
    "requirements.txt",
  ]);
}
