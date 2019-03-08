
/*
 Input:
 s: "cbaebabacd" p: "abc"
 
 Output:
 [0, 6]
 
 Explanation:
 The substring with start index = 0 is "cba", which is an anagram of "abc".
 The substring with start index = 6 is "bac", which is an anagram of "abc".
 Example 2:
 
 Input:
 s: "abab" p: "ab"
 
 Output:
 [0, 1, 2]
 
 Explanation:
 The substring with start index = 0 is "ab", which is an anagram of "ab".
 The substring with start index = 1 is "ba", which is an anagram of "ab".
 The substring with start index = 2 is "ab", which is an anagram of "ab".
 
 */


public class Solution {
    func minWindow(s: String, t: String) -> [Int] {
        if(t.count > s.count){return []}
        var map = [String: Int](), result = [Int]()
        for char in t{map[String(char)] = (map[String(char)] == nil) ? 1 : map[String(char)]! + 1}//Loads a map of characters by key and no. frequency by value
        var counter = map.count,
            begin = 0,
            end   = 0,
            len   = Int.min
        print("map: \(map)")
        while(end < s.count){ //Itearte from left to right until we reach the end
            if let val = map[String(Array(s)[end])]{
                map[String(Array(s)[end])] = val - 1
                counter-=1
            } //Reduce the counter when we find an element within our anagram
            if (counter == 0){result.append(begin)} //If we have an empty counter this means we have successfully identified an anagagram
            print("counter: \(counter)")
            end+=1
        }
        return []
    }
}

var s = Solution()
print(s.minWindow(s: "String", t: "ing"))
