let word = "aaaa";

function countString(word) {
  const str = []
    let res = 1

    for (const c of word) {
        str.at(-1) === c ? res++ : str.push(c);
    }

    return res;
}

console.log(countString(word));
