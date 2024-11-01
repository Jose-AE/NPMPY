#!/usr/bin/env node

import { Command } from "commander";
import { runPythonFile } from "./functions/runPythonFile";
import { installPackages } from "./functions/installPackages";
import { installRequirements } from "./functions/installRequirements";
import fs from "fs";
import { ensureEnv } from "./utils/ensureEnv";
import { styleText } from "node:util";
import { uninstallPackages } from "./functions/uninstallPackages";

const program = new Command();

program
  .name("npmpy")
  .description(
    "A package manager for Python, inspired by npm, designed to simplify the installation and management Python packages."
  )
  .version("1.0.1");

program
  .command("install")
  .alias("i")
  .description(
    "Install pip packages. If no packages specified, installs from requirements.txt"
  )
  .argument(
    "[packages...]",
    "pip package names to install (optional: if none provided, uses requirements.txt)"
  ) // Accept multiple packages
  .action(async (packages: string[]) => {
    if (packages.length === 0) {
      console.log(
        styleText(
          ["blue", "bold"],
          "Installing dependencies from requirements.txt"
        )
      );

      if (!fs.existsSync("requirements.txt")) {
        console.error("[Error]: No requirements.txt found in curent directory");
        return;
      }

      const env = await ensureEnv();
      if (!env) return;

      installRequirements();
    } else {
      const env = await ensureEnv();
      if (!env) return;

      console.log(
        styleText(["blue", "bold"], "Installing following packages:"),
        styleText("green", packages.toString().replace(",", " "))
      );

      installPackages(packages);
    }
  });

// New command: Run a Python file
program
  .command("run <file>")
  .alias("r")
  .description("Run a specified Python file")
  .action(async (file) => {
    const env = await ensureEnv();
    if (!env) return;

    if (!fs.existsSync(file)) {
      console.error(`[Error]: Python file "${file}" not found.`);
      return;
    }

    console.log(
      styleText(["blue", "bold"], `Running Python file:`),
      styleText("yellow", file)
    );
    runPythonFile(file);
  });

// New command: Uninstall package
program
  .command("uninstall")
  .alias("u")
  .description("Uninstall pip packages")
  .argument("[packages...]", "pip package names to uninstall") // Accept multiple packages
  .action(async (packages: string[]) => {
    const env = await ensureEnv();
    if (!env) return;

    uninstallPackages(packages);
  });

program.parse();
