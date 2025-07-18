let low=1000000000
let high = 1000000000

function count(low,high){
    if(high-low===0){
        return 0
    }
    let count=0

    for(let i=low;i<=high;i++){
        if(i%2!==0){
            count++
        }
    }

    return count

}

console.log(count(low,high));
