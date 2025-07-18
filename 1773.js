let items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
];
let ruleKey = "color";
let ruleValue = "silver";

function countMatchingArray(items, ruleKey, ruleValue) {
  let count = 0;

  if (ruleKey === "type") {
    ruleKey = 0;
  } else if (ruleKey === "color") {
    ruleKey = 1;
  } else {
    ruleKey = 2;
  }

  for (i = 0; i < items.length; i++) {
    if (items[i][ruleKey] === ruleValue) {
      count++;
    }
  }

  return count;
}

console.log(countMatchingArray(items, ruleKey, ruleValue));
