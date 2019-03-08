


extension String {
    subscript(_ range: CountableRange<Int>) -> String {
        let idx1 = index(startIndex, offsetBy: max(0, range.lowerBound))
        let idx2 = index(startIndex, offsetBy: min(self.count, range.upperBound))
        return String(self[idx1..<idx2])
    }
}
class Solution {
    func wordBreak(_ s: String, _ wordDict: [String]) -> [String] {
        var candidates = [[String]](), strCombo = [String](), count = s.count, _ = [String](), resultsArray = [String]()
        backtracking(wordDict: wordDict, resultsArray: &candidates, combos: &strCombo, count: count, tempCount: 0)
        for element in candidates{if(wordBreakCheck(s, element)){resultsArray.append(element.joined(separator: " "))}}
        return resultsArray
    }
    private func backtracking(wordDict: [String], resultsArray: inout [[String]], combos: inout [String], count: Int, tempCount: Int){
        if(tempCount == count && !resultsArray.contains(combos.sorted())){resultsArray.append(combos.sorted());return}
        else if(tempCount > count){return}
        for element in wordDict{
            combos.append(element)
            backtracking(wordDict: wordDict, resultsArray: &resultsArray, combos: &combos, count: count, tempCount: tempCount + element.count)
            combos.removeLast()
        }
    }
    private func wordBreakCheck(_ s: String, _ canidate: [String]) -> Bool{
        var visited = [Bool]()
        for _ in 0...s.count{visited.append(false)}
        visited[0] = true
        for i in 1...s.count{
            var j = 0
            while(j < i){
                if(visited[j] && canidate.contains(s[j..<i])){
                    visited[i] = true
                    break
                }
                j+=1
            }
        }
        return visited[s.count]
    }
}
var s = Solution()
s.wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])
s.wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])
s.wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])
