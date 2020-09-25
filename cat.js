const fs = require("fs");

function cat(fileNames) {
  fileNames.forEach(fileName => {
    fs.readFile(fileName, "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files);
      }
    })
  })
  setTimeout(function () {
    process.stdout.write("\nprompt > ");
  }, 2)
}

module.exports = {
  cat: cat,
};
