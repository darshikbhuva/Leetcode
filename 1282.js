var groupThePeople = function (groupSizes) {
  let map = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    if (!map.get(groupSizes[i])) {
      map.set(groupSizes[i], []);
    }
    map.get(groupSizes[i]).push(i);
  }

  let arr = [...map.keys()].sort((a, b) => a - b);

  let res = [];
  for (let key of arr) {
    let val = map.get(key);
    console.log(val, "val");

    for (let i = 0; i < val.length; i += key) {
      res.push(val.slice(i, i + key));
    }
  }
  return res;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
