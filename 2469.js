let celsius = 36.5;

function temp(celsius) {
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * 1.8 + 32.0;

  return [kelvin, fahrenheit];
}

console.log(temp(celsius));
