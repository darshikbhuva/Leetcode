let s = "Let's take LeetCode contest";

function reverse(s) {
  let strings = s.split(" ");
  let result = [];

  for (let item of strings) {
    let start = 0;
    let end = item.length - 1;
    let itemS = item.split("");

    while (start < end) {
      let temp = itemS[start];
      itemS[start] = itemS[end];
      itemS[end] = temp;
      start++;
      end--;
    }

    result.push(itemS.join(""));
  }

  return result.join(" ");
}

// function reverseWords(s) {
//   return s.split(' ').map(word =>
//     word.split('').reverse().join('')
//   ).join(' ');
// }

console.log(reverse(s));
