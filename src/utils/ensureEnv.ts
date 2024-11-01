import fs from "fs";
import { createPythonEnv } from "../functions/createPythonEnv";

export async function ensureEnv() {
  if (!fs.existsSync("py_modules")) {
    console.log(`No python venv found, creating it...`);
    await createPythonEnv();
  }
}
