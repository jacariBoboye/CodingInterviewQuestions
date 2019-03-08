

func longestValidParentheses(_ s: String) -> Int {
    
    var best = 0, strArray = Array(s), st = [Int](), baseLastPos = -1//BaseLastPos
    
    for i in 0..<strArray.count{
        if(strArray[i] == "("){st.append(i)} //If open we push in
        else{// If closed
            if(!st.isEmpty){
                st.popLast() //If it is not empty we found a pair which we can then remove that element
                var lastPos = baseLastPos
                //(-1) puts us at the proper ending position
            
                if (!st.isEmpty){lastPos = st.last!}
                //If not empty we know a gap has been created so we know that before the gap is the correct ending spot
                
                best = max(best, i - lastPos)
                //Takes the better of the current parenthses best and the previous parentheses
            }
            else{baseLastPos = i} //Meaning we came to ')' which restarts the length
        }
    }
    return best
}

var j = ")()())"
var a = "(()"
var c = "()(())"
var a2 = "()(()"
print(longestValidParentheses(j), 4)
print(longestValidParentheses(a), 2)
print(longestValidParentheses(c), 6)
print(longestValidParentheses(a2), 2)

