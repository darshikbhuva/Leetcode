let n = 14;

function ugly(n) {
  if (n === 1 || n === 0) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
    return true;
  }

  return false;
}

console.log(ugly(n));
