let bills = [5, 5, 5, 10, 5, 5, 10, 20, 20, 20];

function lemonadeChange(bills) {
  let fiveCount = 0;
  let tenCount = 0;

  for (let bill of bills) {
    if (bill === 5) {
      fiveCount++;
    } else if (bill === 10) {
      if (fiveCount === 0) return false;
      fiveCount--;
      tenCount++;
    } else {
      if (tenCount > 0 && fiveCount > 0) {
        tenCount--;
        fiveCount--;
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(lemonadeChange(bills));
