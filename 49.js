let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function anagram(strs) {
  let visited = new Array(strs.length).fill(false);
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    if (visited[i]) continue;
    let temp = [];
    temp.push(strs[i]);

    let sortedI = strs[i].split("").sort().join("");

    for (j = i + 1; j < strs.length; j++) {
      let sortedII = strs[j].split("").sort().join("");
      if (sortedI === sortedII) {
        temp.push(strs[j]);
        visited[j] = true;
      }
    }

    result.push(temp);
  }

  return result;
}

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    const key = str.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(strs));
