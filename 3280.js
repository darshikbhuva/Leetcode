let date = "2080-02-29";

function convertDateToBinary(date) {
  date = date.split("-");

  let ans = [];

  for (let i = 0; i < date.length; i++) {
    temp = Number(date[i]).toString(2);
    ans.push(temp);
  }

  return ans.join("-");
}

console.log(convertDateToBinary(date));
