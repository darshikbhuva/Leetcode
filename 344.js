s = ["H", "a", "n", "n", "a", "h"];

// function stringReverse(s) {
//   let start = 0;
//   let end = s.length - 1;

//   while (start <= end) {
//     let temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;

//     start++;
//     end--;
//   }

//   return s;
// }

function stringReverse(s) {
  return s.reverse();
}

console.log(stringReverse(s));
