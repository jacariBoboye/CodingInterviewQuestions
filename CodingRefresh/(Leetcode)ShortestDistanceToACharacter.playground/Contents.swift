/*
 
 Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
 
 Example 1:
 
 Input: S = "loveleetcode", C = 'e'
 Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 
 
 Note:
 
 S string length is in [1, 10000].
 C is a single character, and guaranteed to be in string S.
 All letters in S and C are lowercase.
 */

class Solution {
    func shortestToChar(_ S: String, _ C: Character){
        
        var charPosOfChar = [Int](), result = [Int]()
        
        for i in 0..<S.count{if(String(Array(S)[i]) == String(C)){charPosOfChar.append(i)}}
        
        for outerIndex in 0..<S.count{
            var minimum = Int.max
            for innerIndex in 0..<charPosOfChar.count{
                minimum = min(minimum, abs(outerIndex - charPosOfChar[innerIndex]))
            }
            result.append(minimum)
        }
        return result
    }
}

let s = Solution()
s.shortestToChar("loveleetcode", "e")
