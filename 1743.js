let adjacentPairs = [[2, 1], [3, 4], [3, 2]]

function arr(adjacentPairs) {
    let ans = []

    for (i = 0; i < adjacentPairs.length; i++) {
        for (j = 0; j < adjacentPairs[i].length; j++) {
            ans.push(adjacentPairs[i][j])

        }
    }

    console.log(ans);


}

console.log(arr(adjacentPairs));
