(version1 = "1.0.1"), (version2 = "1");

function compareVersion(version1, version2) {
  version1 = version1.split(".");
  version2 = version2.split(".");

  let i = 0;
  let j = 0;

  while (i < version1.length || j < version2.length) {
    let num1 = i < version1.length ? Number(version1[i]) : 0;
    let num2 = j < version2.length ? Number(version2[j]) : 0;

    if (num1 < num2) return -1;
    if (num1 > num2) return 1;

    i++;
    j++;
  }

  return 0;
}

console.log(compareVersion(version1, version2));
