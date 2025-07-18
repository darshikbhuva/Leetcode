let s = "azbk";
let t = 1;

function transformation(s) {
  while (t > 0) {
    let res = [];

    for (let i = 0; i < s.length; i++) {
      let ascii = s.charCodeAt(i);

      if (ascii === 122) {
        res.push("ab");
      } else {
        ascii++;
        res.push(String.fromCharCode(ascii));
      }
    }

    s = res.join("");

    t--;
  }

  return s.length;
}

console.log(transformation(s));
