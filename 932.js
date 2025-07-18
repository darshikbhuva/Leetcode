let n=4

function beautifulArray(n){
    let arr = []
    arr.push(1)
    while(arr.length < n){
        let tmp = []
        for(const i of arr) if(i*2-1 <= n) tmp.push(i*2-1)
        for(const i of arr) if(i*2 <= n) tmp.push(i*2)
        arr = tmp
    }

    
    return arr


}

console.log(beautifulArray(n));
