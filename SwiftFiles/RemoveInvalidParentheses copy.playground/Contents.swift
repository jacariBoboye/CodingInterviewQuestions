/*
 
 301. Remove Invalid Parentheses
 
 Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.
 
 Note: The input string may contain letters other than the parentheses ( and ).
 
 Example 1:
 
 Input: "()())()"
 Output: ["()()()", "(())()"]
 Example 2:
 
 Input: "(a)())()"
 Output: ["(a)()()", "(a())()"]
 Example 3:
 
 Input: ")("
 Output: [""]
 
 */


func removeInvalidParentheses(_ s: String) -> [String] {
    
    let reverse = ["}":"{", ")":"(", "]":"["]
    var stack = 0
    
    for elem in s{
        if (elem == "("){stack+=1}
        if (elem == ")"){stack-=1}
    }
    
    print("stack: \(stack)")
    
    return []
    
}

var test0 = "()())()"
var test1 = "()()()"
var test2 = "()())()"

removeInvalidParentheses(test1)





