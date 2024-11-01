// import os from "os";

// const https = require("https");
// const fs = require("fs");
// const { exec } = require("child_process");
// const path = require("path");

// function installWin(version: string) {
//   const platform = os.platform();
//   const arch = os.arch();

//   if (platform !== "win32") {
//     console.error("This script only works on Windows.");
//     return;
//   }

//   const downloadUrl = `https://www.python.org/ftp/python/${version}/python-${version}-${
//     arch === "x64" ? "amd64" : "win32"
//   }.exe`;

//   const filePath = path.join(__dirname, `python-${version}.exe`);

//   // Download the file
//   const file = fs.createWriteStream(filePath);

//   https
//     .get(downloadUrl, (response: any) => {
//       response.pipe(file);

//       file.on("finish", () => {
//         file.close(() => {
//           console.log("Download complete.");

//           // Execute the installer
//           exec(filePath, (err: any) => {
//             if (err) {
//               console.error("Failed to execute the installer:", err);
//               return;
//             }
//             console.log("Python installer executed successfully.");

//             // Remove the file after execution
//             fs.unlink(filePath, (err: any) => {
//               if (err) {
//                 console.error("Error deleting the installer:", err);
//               } else {
//                 console.log("Installer deleted successfully.");
//               }
//             });
//           });
//         });
//       });
//     })
//     .on("error", (err: any) => {
//       console.error("Error downloading the file:", err);
//     });
// }

// export async function installPython(version: string) {
//   const platform = os.platform();

//   console.log(platform);
//   switch (platform) {
//     case "win32":
//       installWin("3.13.0");
//       break;

//     default:
//       throw new Error(`Unsupported platformss: ${platform}`);
//   }
// }
