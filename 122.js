let prices = [7, 1, 5, 3, 6, 4]

function stocks(prices) {
    let sum = 0
    

    for(i=0;i<prices.length-1;i++){
        if(prices[i]<prices[i+1]){
            sum+=(prices[i+1]-prices[i])
        }
    }

    return sum




}

console.log(stocks(prices));
