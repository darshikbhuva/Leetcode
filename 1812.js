let coordinates = "c7";

function color(coordinates) {
  let val = coordinates.charCodeAt(0) - 96;
  let num = Number(coordinates[1]);

  if ((val + num) % 2 === 0) {
    return false;
  }

  return true;
}

console.log(color(coordinates));
