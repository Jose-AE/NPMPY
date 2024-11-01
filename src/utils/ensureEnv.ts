import fs from "fs";
import { createPythonEnv } from "../functions/createPythonEnv";
import { styleText } from "node:util";

export async function ensureEnv(): Promise<boolean> {
  if (!fs.existsSync("py_modules")) {
    console.log(
      styleText(["blue", "bold"], "No python venv found, creating it...")
    );

    return await createPythonEnv();
  }
  return true;
}
