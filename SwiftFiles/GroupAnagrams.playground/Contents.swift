
/*
 Given an array of strings, group anagrams together.
 
 Example:
 
 Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 Output:
 [
 ["ate","eat","tea"],
 ["nat","tan"],
 ["bat"]
 ]
*/


class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var map = [String: [String]]()
        for str in strs{
            if let _ = map[String(str.sorted())]{}
            else{map[String(str.sorted())] = [String]()}
            map[String(str.sorted())]?.append(str)
        }
        return Array(map.values)
    }
}

var s = Solution()
var input = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(s.groupAnagrams(input))
