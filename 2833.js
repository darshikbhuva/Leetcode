let moves = "L_RL__R";

function furthestDistanceFromOrigin(moves) {
  let countL = 0;
  let countR = 0;
  let count_ = 0;

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "L":
        countL++;
        break;
      case "R":
        countR++;
        break;
      case "_":
        count_++;
        break;
    }
  }

  if (countL >= countR) {
    return countL + count_ - countR;
  } else {
    return countR + count_ - countL;
  }
}

console.log(furthestDistanceFromOrigin(moves));
