const fs = require("fs");
const path = require("path");

const source = path.resolve(__dirname, "_redirects");
const dest = path.resolve(__dirname, "dist", "_redirects");

fs.copyFile(source, dest, (err) => {
  if (err) {
    console.error("Ошибка при копировании _redirects:", err);
    process.exit(1);
  }
  console.log("_redirects успешно скопирован в dist/");
});
