let s = "leetcode";
let wordDict = ["leet", "code"];

function wordBreak(s, wordDict) {
  const dp = {};

  const fn = (remS) => {
    if (remS === "") return true;
    if (remS in dp) return dp[remS];
    let res = false;
    for (let i = 0; i < remS.length; i++) {
      let subString = remS.substring(0, i + 1);

      if (wordDict.includes(subString) && fn(remS.substring(i + 1))) {
        res = true;
      }
    }

    return (dp[remS] = res);
  };

  return fn(s);
}

console.log(wordBreak(s, wordDict));
