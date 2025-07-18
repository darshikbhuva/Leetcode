let boxes = "110";

function minOperation(boxes) {
  let result = [];

  for (i = 0; i < boxes.length; i++) {
    let sum = 0;

    for (j = 0; j < boxes.length; j++) {
      if (j === i) {
        continue;
      } else {
        if (boxes[j] === "1") {
          if (j > i) {
            sum += j - i;
          } else {
            sum += i - j;
          }
        }
      }
    }

    result.push(sum);
  }

  return result;
}

console.log(minOperation(boxes));
