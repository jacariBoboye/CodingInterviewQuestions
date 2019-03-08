/*
 3. Longest Substring Without Repeating Characters
 
 Given a string, find the length of the longest substring without repeating characters.
 
 Example 1:
 
 Input: "abcabcbb"
 Output: 3
 Explanation: The answer is "abc", with the length of 3.
 Example 2:
 
 Input: "bbbbb"
 Output: 1
 Explanation: The answer is "b", with the length of 1.
 Example 3:
 
 Input: "pwwkew"
 Output: 3
 Explanation: The answer is "wke", with the length of 3.
 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
 */


//https://leetcode.com/problems/minimum-window-substring/discuss/26808/Here-is-a-10-line-template-that-can-solve-most-'substring'-problems?page=7

class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var ss = Array(s).map{String($0)}, map = [String: Int](), left = 0, right = 0, counter = 0, length = Int.min
        
        for elem in ss{map[elem] = 0}
        
        while(right<ss.count){
            if(map[ss[right]] ?? 0 > 0){counter+=1}
            if let value = map[ss[right]]{map[ss[right]] = value + 1}
            right+=1
            while(counter > 0){
                if(map[ss[left]] ?? 0 > 1){counter-=1}
                if let value = map[ss[left]]{map[ss[left]] = value - 1}
                left+=1
            }
            if(left == 0 || (right) - left > length){length = (right) - left} //Assures that canidate is valid
        }
        return length == Int.min ? s.count : length
    }
}

var s = Solution()
print(s.lengthOfLongestSubstring("abcbabcbb"), 3)
print(s.lengthOfLongestSubstring("bbbbb"), 1)
print(s.lengthOfLongestSubstring("pwwkew"), 3)
print(s.lengthOfLongestSubstring(""), 0)
print(s.lengthOfLongestSubstring("a"), 1)
print(s.lengthOfLongestSubstring("au"), 2)
print(s.lengthOfLongestSubstring("aab"), 2)


