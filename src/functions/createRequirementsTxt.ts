import { getPipPath } from "../utils/getPipPath";
import { runCommand } from "../utils/runCommand";

export function createRequirementsTxt() {
  runCommand(`${getPipPath()}`, ["freeze > requirements.txt"]);
}
