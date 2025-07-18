let s = "aaabc";

function stringLength(s) {
  return new Set(s).size;
}

console.log(stringLength(s));
