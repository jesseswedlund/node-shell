let { pwd } = require("./pwd");
let { ls } = require("./ls");
let { cat } = require("./cat");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.slice(0, 3) === "cat") {
    cat(cmd.slice(4).split(' '));

  } else {
    process.stdout.write("You typed: " + cmd);
    console.log(cmd.slice(0, 2));
    process.stdout.write("\nprompt >");
  }
});
