let n = 12

function threeDivisor(n){
    let count=0

    for(i=1;i<=n;i++){
        if(n%i===0){
            count++
        }
    }

    if(count===3){
        return true
    }else{
        return false
    }

}

console.log(threeDivisor(n));
