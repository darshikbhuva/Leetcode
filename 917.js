s = "Test1ng-Leet=code-Q!";

function firstUniqChar(s) {
  let temp = s;
  let map = new Map();

  for (let i = 0; i < temp.length; i++) {
    if (
      !"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(temp[i])
    ) {
      map.set(i, temp[i]);
    }
  }

  s = s.replace(/[^a-zA-Z]/g, "").split("");

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let temmp = s[i];
    s[i] = s[j];
    s[j] = temmp;

    i++;
    j--;
  }
  let z = 0;

  let tempArr = [...map.keys()];

  for (let k = 0; k < s.length; k++) {
    if (k === tempArr[z]) {
      s.splice(k, 0, map.get(k));
      z++;
    }
  }

  for (let i = s.length; i < temp.length; i++) {
    s.splice(i, 0, map.get(i));
  }

  return s.join("");
}

console.log(firstUniqChar(s));
