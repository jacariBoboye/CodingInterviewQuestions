
/*
 Word Break
 
 Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 
 Note:
 
 The same word in the dictionary may be reused multiple times in the segmentation.
 You may assume the dictionary does not contain duplicate words.
 Example 1:
 
 Input: s = "leetcode", wordDict = ["leet", "code"]
 Output: true
 Explanation: Return true because "leetcode" can be segmented as "leet code".
 Example 2:
 
 Input: s = "applepenapple", wordDict = ["apple", "pen"]
 Output: true
 Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
 Note that you are allowed to reuse a dictionary word.
 Example 3:
 
 Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 Output: false
 
 */

extension String {
    subscript(_ range: CountableRange<Int>) -> String {
        let idx1 = index(startIndex, offsetBy: max(0, range.lowerBound))
        let idx2 = index(startIndex, offsetBy: min(self.count, range.upperBound))
        return String(self[idx1..<idx2])
    }
}

func wordBreak(_ s: String, _ wordDict: [String]) -> Bool {
    if(wordDict.isEmpty){return false}
    var visited = [Bool]()
    for _ in 0...s.count{visited.append(false)}
    visited[0] = true
    for i in 1...s.count{
        var j = 0
        while(j < i){
            if(visited[j] && wordDict.contains(s[j..<i])){
                visited[i] = true
                break
            }
            j+=1
        }
    }
    print("Visited: \(visited)")
    return visited[s.count]
}


var s = "applepenapple", wordDict = ["apple", "pen"]
var s1 = "leetcode", wordDict1 = ["leet", "code"]
var s2 = "catsandog", wordDict2 = ["cats", "dog", "sand", "and", "cat"]

//print("1", wordBreak(s, wordDict), true)
//print("2", wordBreak(s1, wordDict1), true)
//print("3", wordBreak(s2, wordDict2), false)
//print("4", wordBreak("a", []), false)
//print("5", wordBreak("a", ["a"]), true)
//print("6", wordBreak("ab", ["a", "b"]), true)
//print("7", wordBreak("bb", ["a","b","bbb","bbbb"]), true)
//print("8", wordBreak("aaaaa", ["aaa","aa"]), true)



func combinations(_ strArray: [String])-> [String]{
    var results = [String]()
    
    
    
    return results
}
