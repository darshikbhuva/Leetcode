s = "lEetcOde";

function sortVowels(s) {
  let ans = Array(s.length).fill(0);
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      temp.push(s[i]);
    } else {
      ans[i] = s[i];
    }
  }

  temp = temp.sort();
  let j = 0;

  for (i = 0; i < ans.length; i++) {
    if (ans[i] === 0) {
      ans[i] = temp[j];
      j++;
    }
  }

  return ans.join("");
}

console.log(sortVowels(s));
