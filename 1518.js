let numBottles = 9;
let numExchange = 3;

function numWaterBottles(numBottles, numExchange) {
  let drinkCount = numBottles;

  while (numExchange <= numBottles) {
    let temp = Math.floor(numBottles / numExchange);
    drinkCount += temp;
    numBottles = (numBottles % numExchange) + temp;
  }

  return drinkCount;
}

console.log(numWaterBottles(numBottles, numExchange));
