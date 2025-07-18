let nums = [4,4,9,10]

function avg(nums){

        let sum=0
        let count=0

        for(let i=0;i<nums.length;i++){
            if(nums[i]%3===0 && nums[i]%2===0){
                sum+=nums[i]
                count++
            }
        }

        if(count===0 || sum===0){
            return 0
        }else{
            return Math.floor(sum/count)

        }
    
    

      


}

console.log(avg(nums));
