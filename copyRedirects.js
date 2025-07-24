import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.resolve(__dirname, "_redirects");
const dest = path.resolve(__dirname, "dist", "_redirects");

fs.copyFile(source, dest, (err) => {
  if (err) {
    console.error("Ошибка при копировании _redirects:", err);
    process.exit(1);
  }
  console.log("_redirects успешно скопирован в dist/");
});
