
/*
 
 Does not handle repeated elements
 
 */


class Solution {
    
    func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
        
        guard nums.count > 2 else{return Array(Set(nums))}
        
        var map = [String: Int](), secondMap = [String: Int](), k = k, resultArray = [Int]()

        for e in nums{map[String(e)] = (map[String(e)] != nil) ? (map[String(e)] ?? 0) + 1 : 1}
        for (index, value) in map{secondMap[String(value)] = Int(index)}
        for i in 0...nums.count{if let val = secondMap[String(i)]{resultArray.append(val)}}
    
        print("map: \(map)")
        print("secondMap: \(secondMap)")
        print("resultArray: \(resultArray)")
        print("resultArray.count: \(resultArray.count)")
        print("k: \(k)")
        
        return Array(resultArray[(resultArray.count - k)..<resultArray.count])

    }

}

var s = Solution()

print(s.topKFrequent([-1,-1], 2))
print(s.topKFrequent([1,2], 2))


