const fs = require("fs");

function ls() {
  process.stdout.write(
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join("\n"));
        process.stdout.write("prompt >");
      }
    })
  );
}

module.exports = {
  ls: ls,
};
