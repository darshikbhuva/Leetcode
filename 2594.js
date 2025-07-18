let ranks = [4, 2, 3, 1];
let cars = 10;

function repairCars(ranks, cars) {
  let end = Math.max(...ranks);
  let start = Math.min(...ranks);

  end = end * cars * cars;
  let ans = 0;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (isCarRepaired(mid, ranks, cars)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  function isCarRepaired(mid, ranks, cars) {
    let carsRepaired = 0;

    for (let rank of ranks) {
      carsRepaired += Math.floor(Math.sqrt((1 * mid) / rank));

      if (carsRepaired >= cars) return true;
    }

    return false;
  }

  return ans;
}

console.log(repairCars(ranks, cars));
