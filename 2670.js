let nums = [1, 2, 3, 4, 5]

function diffArray(nums) {
    let res = []
    for (i = 0; i <= nums.length - 1; i++) {
        let slice1 = nums.slice(0, i + 1)


        if (i === nums.length) {
            var slice2 = []

        } else {
            slice2 = nums.slice(i + 1, nums.length)
        }


        let set1 = new Set(slice1)
        let set2 = new Set(slice2)

        let ans = set1.size - set2.size

        res.push(ans)
    }



    return res



}

console.log(diffArray(nums));
