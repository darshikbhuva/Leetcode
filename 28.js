(haystack = "leetcode"), (needle = "leeto");

function match(needle, haystack) {
  let x = haystack.includes(needle);
  if (!x) {
    return -1;
  }

  let nums = haystack.indexOf(needle);

  return nums;
}

console.log(match(needle, haystack));
