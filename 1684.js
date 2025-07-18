let allowed = "cad";
let words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];

function countA(allowed, words) {
  let count = 0;

  words.forEach((item) => {
    let flag = false;
    let i = 0;

    while (i < item.length) {
      if (allowed.includes(item[i])) {
        i++;
        flag = true;
      } else {
        flag = false;
        break;
      }
    }

    if (flag) {
      count++;
    }
  });

  return count;
}

console.log(countA(allowed, words));
