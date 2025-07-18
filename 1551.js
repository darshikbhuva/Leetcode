let n = 7

function arrEqual(n) {

    let arr = []
    let count = 0

    for (i = 0; i < n; i++) {
        let ele = (2 * i) + 1
        arr.push(ele)
    }



    for (i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            break;
        } else {
            count += (n - arr[i])
        }

    }

    return count


}

var minOperations = function (n) {
    // Math.floor(n * n / 4)

    return ~~(n * n / 4)
};

console.log(arrEqual(n));
