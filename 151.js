let s = "a good   example";

function reverse(s) {
  let newS = [];
  s = s.trim();
  s = s.split(" ");

  for (item of s) {
    if (item !== "") {
      newS.push(item);
    }
  }

  let x = newS.splice(" ").reverse().join(" ");
  return x;
}

console.log(reverse(s));
