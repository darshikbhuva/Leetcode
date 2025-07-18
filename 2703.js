let args = [{}, null, "3"];

function argumentsLength(...args) {
  return args.length;
}

console.log(argumentsLength(args));
