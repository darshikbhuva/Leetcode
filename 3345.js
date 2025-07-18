let n = 15
let t = 3

function product(n,t){
    let i=n

    while(1){

       if(isDivisible(i,t)){

        return i

       }else{

           i++
       }


    }

    function isDivisible(num,t){
        let product=1

        while(num>0){
            let digit=num%10
            product*=digit
            num=Math.floor(num/10)
        }

        if(product%t===0){
            return true
        }else{
            return false
        }


    }

}

console.log(product(n,t));
