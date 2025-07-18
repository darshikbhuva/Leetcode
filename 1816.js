let s = "Hello how are you Contestant";
let k = 4;

function truncate(s, k) {
  return s.split(" ").slice(0, k).join(" ");
}

console.log(truncate(s, k));
