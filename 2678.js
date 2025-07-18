details = ["1313579440F2036", "2921522980M5644"];

function findAge(details) {
  let count = 0;

  for (let detail of details) {
    const age = detail.slice(11, 13);

    if (age > 60) count++;
  }

  return count;
}

console.log(findAge(details));
