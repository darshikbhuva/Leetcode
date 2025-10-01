let coordinate1 = "c2";
let coordinate2 = "g4";

function checkTwoChessboards(coordinate1, coordinate2) {
  let a = coordinate1[0].charCodeAt(0);
  let b = coordinate2[0].charCodeAt(0);
  let c = Number(coordinate1[1]);
  let d = Number(coordinate2[1]);
  if ((a - b + c - d) % 2 === 0) return true;
  return false;
}

console.log(checkTwoChessboards(coordinate1, coordinate2));
