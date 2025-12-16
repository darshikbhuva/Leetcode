let numBottles = 13;
let numExchange = 6;

function maxBottlesDrunk(numBottles, numExchange) {
  let drink = numBottles;
  let empty = numBottles;

  while (empty >= numExchange) {
    drink++;
    empty -= numExchange;

    empty++;
    numExchange++;
  }

  return drink;
}

console.log(maxBottlesDrunk(numBottles, numExchange));
