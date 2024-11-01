import { getPipPath } from "../utils/getPipPath";
import { runCommand } from "../utils/runCommand";
import { createRequirementsTxt } from "./createRequirementsTxt";

export async function uninstallPackages(packages: string[]) {
  const args = ["uninstall", ...packages];

  await runCommand(getPipPath(), args);
  await createRequirementsTxt();
}
