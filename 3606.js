let code = ["SAVE20", "", "PHARMA5", "SAVE@20"];
let businessLine = ["restaurant", "grocery", "pharmacy", "restaurant"];
let isActive = [true, true, true, true];

function validateCoupons(code, businessLine, isActive) {
  let business = ["electronics", "grocery", "pharmacy", "restaurant"];
  let res = [];
  let ele = [];
  let grocery = [];
  let pharmacy = [];
  let restaurant = [];
  for (let i = 0; i < code.length; i++) {
    if (!isActive[i] || !code[i] || !business.includes(businessLine[i])) {
      continue;
    }

    let temp = code[i].split("");
    let isValid = true;

    for (let j = 0; j < temp.length; j++) {
      if (
        !(
          (temp[j].charCodeAt(0) >= 97 && temp[j].charCodeAt(0) <= 122) ||
          (temp[j].charCodeAt(0) >= 65 && temp[j].charCodeAt(0) <= 90) ||
          (temp[j].charCodeAt(0) >= 48 && temp[j].charCodeAt(0) <= 57) ||
          temp[j].charCodeAt(0) === 95
        )
      ) {
        isValid = false;
      }
    }

    if (isValid) {
      if (businessLine[i] === "electronics") {
        ele.push(code[i]);
      } else if (businessLine[i] === "grocery") {
        grocery.push(code[i]);
      } else if (businessLine[i] === "pharmacy") {
        pharmacy.push(code[i]);
      } else {
        restaurant.push(code[i]);
      }
    }
  }

  ele = ele.sort();
  grocery = grocery.sort();
  pharmacy = pharmacy.sort();
  restaurant = restaurant.sort();

  res = [...ele, ...grocery, ...pharmacy, ...restaurant];

  return res;
}

console.log(validateCoupons(code, businessLine, isActive));
