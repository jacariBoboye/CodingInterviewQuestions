

extension String{
    subscript(_ range: CountableRange<Int>) -> String{
        let idx1 = index(startIndex, offsetBy: max(0, range.lowerBound))
        let idx2 = index(startIndex, offsetBy: min(self.count, range.upperBound))
        return String(self[idx1..<idx2])
    }
}

//https://www.youtube.com/watch?v=qzYhjk-nDGU

func minWindow(_ s: String, _ t: String) -> String {
    
    let ss = Array(s).map { String($0) }
    let tt = Array(t).map { String($0) }
    // create hashmap
    var map = [String: Int]()
    for str in tt {map[str] = (map[str] ?? 0) + 1}
    
    var startingIndex = 0, left = 0, right = 0, missing = tt.count, length = Int.max
    
    while(right<ss.count){
        if(map[ss[right]] ?? -1 > 0){missing-=1}
        if let value = map[ss[right]]{map[ss[right]] = value - 1}
        right+=1
        while(missing == 0){
            if(right - left < length){
                startingIndex = left
                length = right - left
            }
            if(map[ss[left]] == 0){missing+=1}
            if let value = map[ss[left]]{map[ss[left]] = value + 1}
            left+=1
        }
    }
    if length > ss.count {return ""}
    return s[startingIndex..<startingIndex + length]
}

print(minWindow("ADOBECODEBANC", "ABC"), "BANC")
print(minWindow("a", "aa"), "")
print(minWindow("ab", "b"), "")
print(minWindow("a", "a"), "")
print(minWindow("a", "aa"), "")
