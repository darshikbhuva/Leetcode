let gain = [-5, 1, 5, 0, -7];

function altitudes(gain) {
  gain.unshift(0);

  for (i = 0; i < gain.length - 1; i++) {
    let temp = gain[i] + gain[i + 1];
    gain[i + 1] = temp;
  }

  return Math.max(...gain);
}

console.log(altitudes(gain));
