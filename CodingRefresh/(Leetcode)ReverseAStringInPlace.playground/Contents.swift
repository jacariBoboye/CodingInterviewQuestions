/*
 
 Reverse a string
 */


class Solution {    
    
    func reverseString(_ s: inout [Character]) {
        for i in 0 ..< s.count/2{
            let temp = s[i]
            s[i] = s[s.count - 1 - i]
            s[s.count - 1 - i] = temp
        }
    }
    
    func reverseStringRecursively() {
        var stringArray = ["A", "B", "C", "D"]
        helper(s: &stringArray, start: 0, end: stringArray.count - 1)
        print(stringArray)
    }
    
    private func helper(s: inout [String], start: Int, end: Int){
        if(start > end){return}
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        helper(s: &s, start: start + 1, end: end - 1)
    }
}
//print(s.main())

let s = Solution()
s.reverseStringRecursively()
