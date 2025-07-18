let command = "(al)G(al)()()G";

function goal(command) {
  let i = 0;
  let result = "";

  while (i < command.length) {
    if (command[i] === "G") {
      result += "G";
      i++;
    } else if (command[i] === "(" && command[i + 1] === ")") {
      result += "o";
      i += 2;
    } else if (
      command[i] === "(" &&
      command[i + 1] === "a" &&
      command[i + 2] === "l" &&
      command[i + 3] === ")"
    ) {
      result += "al";
      i += 4;
    }
  }

  return result;
}

console.log(goal(command));
