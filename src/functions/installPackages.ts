import { getPipPath } from "../utils/getPipPath";
import { runCommand } from "../utils/runCommand";
import { createRequirementsTxt } from "./createRequirementsTxt";

export async function installPackages(packages: string[]) {
  const args = ["install", "--no-cache-dir", ...packages];

  await runCommand(getPipPath(), args);
  await createRequirementsTxt();
}
