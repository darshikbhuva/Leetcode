str1 = "ABABAB";
str2 = "ABAB";

function divisor(str1, str2) {
  let s1 = str1.length;
  let s2 = str2.length;

  if (s1 > s2) {
    return str1.replace(str2, "");
  } else if (s2 > s1) {
    return str2.replace(str1, "");
  } else {
    return "";
  }
}

console.log(divisor(str1, str2));
