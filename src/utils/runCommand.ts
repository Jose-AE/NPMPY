import { spawn } from "child_process";

export function runCommand(command: string, args: string[]): Promise<boolean> {
  const pip = spawn(command, args, {
    stdio: "inherit",
    shell: true,
  });

  return new Promise((resolve) => {
    pip.on("close", (code) => {
      // Resolve with true if the command was successful, false otherwise
      resolve(code === 0);
    });

    pip.on("error", (err) => {
      // In case of an error, also resolve with false
      console.error(err); // Optional: log the error if needed
      resolve(false);
    });
  });
}
