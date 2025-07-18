let s = "is2 sentence4 This1 a3";

function sortS(s) {
  arr = s.split(" ");
  let newArr = new Array(arr.length).fill(0);

  for (item of arr) {
    let index = item.charAt(item.length - 1);
    item = item.slice(0, item.length - 1);
    newArr[index - 1] = item;
  }
  return newArr.join(" ");
}

console.log(sortS(s));
