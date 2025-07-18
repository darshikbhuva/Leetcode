let num = 90

function minMax(num) {
    let str = num.toString();
    let i = 0;
    while (str[i] == 9) {
        i++
    };

    let max = str.replaceAll(str[i], 9);
    let min = str.replaceAll(str[0], 0);
    return max - min;
}

console.log(minMax(num));
