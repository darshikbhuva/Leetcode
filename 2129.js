let title = "capiTalIze tHe titLe";

function capitalizeTitle(title) {
  title = title.split(" ");
  let ans = [];

  for (let word of title) {
    word = word.toLowerCase();
    if (word.length > 2) {
      word = word.split("");
      word[0] = word[0].toUpperCase();
      word = word.join("");
    }
    ans.push(word);
  }

  return ans.join(" ");
}

console.log(capitalizeTitle(title));
