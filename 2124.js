let s = "ba";

function check(s) {
   let isB = false;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] === 'b') {
            isB = true;
            continue;
        }
        else {
            if (isB) {
                return false;
            }
        }
    }
    return true;
}

console.log(check(s));
