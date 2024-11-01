import { spawn } from "child_process";

export function runCommand(command: string, args: string[]): Promise<void> {
  const pip = spawn(command, args, {
    stdio: "inherit",
    shell: true,
  });

  return new Promise((resolve, reject) => {
    pip.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`pip install failed with code ${code}`));
      }
    });

    pip.on("error", (err) => {
      reject(err);
    });
  });
}
