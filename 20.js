let s = "()";

function validParentheses(s) {
 let stack=[]

 let map={
    "{":"}",
    "[":"]",
    "(":")"
 }

 for(i=0;i<s.length;i++){
    if(map[s[i]]){
        stack.push(s[i])
    }else{
        let top=stack.pop()
        if(!top || s[i]!=map[top]){
            return false
        }
    }
 }

 return stack.length===0
}

console.log(validParentheses(s));
