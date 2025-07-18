let num=99202851

function maxDiff(num){
     num=num+''
     let temp=num
    let numArr=num.split("")
    let tempArr=temp.split("")
    let i=0
    let j=0

    while(numArr[i]==='9'){
        i++
         if(tempArr[i]==='9'){
             i++
        }else{
            break
        }
    }

     while(tempArr[j]==='1'|| tempArr[j]==='0'){
        j++
        
        if(tempArr[j]==='0'||tempArr[j]==='1'){
             j++
        }else{
            break
        }
       
    }


    let ele=numArr[i]
    let tempEle=tempArr[j]

    

    if(j===0){     
  var b=tempArr.map((val)=>val===tempEle ? '1' : val).join("")
    }else{
   b=tempArr.map((val)=>val===tempEle   ? '0' : val).join("")
    }
    
    let a=numArr.map((val)=>val===ele ? '9' : val).join("")
  
    a=+a
    b=+b    

    return a-b
}

console.log(maxDiff(num));
