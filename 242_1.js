let str = "Hello";
let str2 = "Heloo";

function isAnagram(str, str2) {
  let map = new Map();

  if (str.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (map.has(str2[i])) {
      map.set(str2[i], map.get(str2[i]) - 1);
      if (map.get(str2[i]) === 0) {
        map.delete(str2[i]);
      }
    } else {
      return false;
    }
  }

  return map.size === 0;
}

console.log(isAnagram(str, str2));

// O(n)
