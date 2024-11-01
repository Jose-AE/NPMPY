#!/usr/bin/env node

import { exec } from "child_process";

const args = process.argv.slice(2);

exec("python -m venv ./.venv", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Standard error: ${stderr}`);
    return;
  }
  console.log(`Standard output: ${stdout}`);
});
