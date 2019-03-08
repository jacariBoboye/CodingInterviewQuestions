/*
 
 921. Minimum Add to Make Parentheses Valid
 
 Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.
 
 Formally, a parentheses string is valid if and only if:
 
 It is the empty string, or
 It can be written as AB (A concatenated with B), where A and B are valid strings, or
 It can be written as (A), where A is a valid string.
 Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.
 
 
 
 Example 1:
 
 Input: "())"
 Output: 1
 Example 2:
 
 Input: "((("
 Output: 3
 Example 3:
 
 Input: "()"
 Output: 0
 Example 4:
 
 Input: "()))(("
 Output: 4
 
 
 Note:
 
 S.length <= 1000
 S only consists of '(' and ')' characters.
 
 */

class Solution {
    func minAddToMakeValid(_ S: String) -> Int {
        if(S.isEmpty){return 2}
        var map = [String: Int]()
        for element in S{map[String(element)] = (map[String(element)] ?? 0) + 1}
        
        var stack = [String]()
        
        for i in 0..<S.count{
            if(Array(S)[i] == "(" && stack.last!){stack.append("(")}
            else if(Array(S)[i] == ""){}
            
        }
        
        print("Original Str: \(S) - Map: \(map)")
        let open = map["("] ?? 0,closed = map[")"] ?? 0
        return abs(open - closed)
    }
}
var s = Solution()
s.minAddToMakeValid("())")
s.minAddToMakeValid("(((")
s.minAddToMakeValid("()")
s.minAddToMakeValid("()))((")

