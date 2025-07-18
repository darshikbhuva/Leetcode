(s = "zz"),
  (distance = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1,
  ]);

function stringDistance(s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], [i]);
    } else {
      map.get(s[i]).push(i);
    }
  }

  let isValid = true;

  for (let [key, value] of map) {
    let temp = value[1] - value[0] - 1;
    let index = key.charCodeAt(0) - "a".charCodeAt(0);

    if (distance[index] !== temp) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

console.log(stringDistance(s));
