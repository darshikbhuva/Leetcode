nums1 = [1,1,1,1], nums2 = [1,1]


function intersection(nums1,nums2){

    let res=[]
    let map2={}

    for(let num of nums2){
        map2[num]=(map2[num]??0)+1
    }

    for(let num of nums1){
        if(num in map2===true && map2[num]>0){
            res.push(num)
            map2[num]--
        }
    }

    return res

}

console.log(intersection(nums1,nums2));
