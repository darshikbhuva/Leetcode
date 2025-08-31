let password = "0Aa!a!a!";

function strongPasswordCheckerII(password) {
  if (password.length < 8) {
    return false;
  }
  let capital = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let special = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    "'",
    '"',
    "\\",
    "|",
    ",",
    ".",
    "<",
    ">",
    "/",
    "?",
    "`",
    "~",
  ];

  let hasNumber = false;
  let hasCapital = false;
  let hasLowercase = false;
  let hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    if (password[i + 1] && password[i] === password[i + 1]) {
      return false;
    }
    if (special.includes(password[i])) {
      hasSpecial = true;
    }

    if (capital.includes(password[i])) {
      hasCapital = true;
    }

    if (lowercase.includes(password[i])) {
      hasLowercase = true;
    }

    if (numbers.includes(password[i])) {
      hasNumber = true;
    }
  }

  return hasNumber && hasLowercase && hasCapital && hasSpecial;
}

console.log(strongPasswordCheckerII(password));
