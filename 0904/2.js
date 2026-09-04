//20 有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let obj = {
        "(":")",
        "[":"]",
        "{":"}",
    }
    for(let i of s){
        if(obj.hasOwnProperty(i)){
            stack.push(i)
            continue
        }
        
        if(obj[stack[stack.length-1]]===i){
            stack.pop()
            continue
        }else{
            return false
        }
    }
    return stack.length===0 ? true : false
    
};