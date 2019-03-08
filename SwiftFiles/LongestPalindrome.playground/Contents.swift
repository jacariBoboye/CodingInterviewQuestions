
func longestPalindrome(_ s: String) -> String {
    if(s.count == 0){return ""}
    if(s.count == 1){return s}
    var start = 0, end = start, stringArray = Array(s), max = 0
    for i in 0..<s.count{
        var left = i, right = s.count-1, tempStart = left, tempEnd = right
        while(left<right){
            if(stringArray[left] == stringArray[right]){
                if((right - left) > max){
                    max = (right - left)
                    tempStart = left
                    tempEnd = right
                }
                left+=1
                right-=1
            }
            else{
                left = i
                right = tempEnd - 1
                tempStart = left
                tempEnd = right
                max = 0
            }
        }
        if((tempEnd - tempStart) > (end - start)){
            end = tempEnd
            start = tempStart
        }
    }
    return (String(stringArray[start...end]).count > 1) ? String(stringArray[start...end]) : String(s.first!)
}
print(longestPalindrome(""))
print(longestPalindrome("a"), "a")
print(longestPalindrome("baab"), "baab")
print(longestPalindrome("abcda"), "a")
print(longestPalindrome("babad"), "bab")
print(longestPalindrome("cbbd"), "bb")
print(longestPalindrome("jacari"), "aca")
print(longestPalindrome("aaabaaaa"), "aaabaaa")

