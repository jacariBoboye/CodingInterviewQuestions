/*
Reverse a string using recursion
*/


class Solution {
    
    func reverseAString(){
        var result = [String]()
        recurse(index: 0, word: "Ford Motors", reversedString: &result)
        print(result.joined())
    }
    func recurse(index: Int, word: String, reversedString: inout [String]){
        if(index == word.count){return}
        recurse(index: index + 1, word: word, reversedString: &reversedString)
        reversedString.append(String(Array(word)[index]))
    }
}

var s = Solution()
s.reverseAString()
