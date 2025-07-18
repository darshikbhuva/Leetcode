let sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];

function maxEle(sentences) {
  let maxWords = 0;

  for (let sentence of sentences) {
    console.log(sentence.split(" "));

    const wordCount = sentence.split(" ").length;

    if (wordCount > maxWords) {
      maxWords = wordCount;
    }
  }

  return maxWords;
}

console.log(maxEle(sentences));
