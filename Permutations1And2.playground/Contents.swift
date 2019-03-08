
/*
 
 Permutations
 Given a collection of distinct integers, return all possible permutations.
 
 Example:
 
 Input: [1,2,3]
 Output:
 [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
 ]
 
 */


class Solution {
    func permute(_ nums: [Int]) -> [[Int]] {
        var resultArray = [[Int]](), combinations = [Int]()
        backTracking(nums: nums, resultArray: &resultArray, combinations: &combinations, length: nums.count)
        return resultArray
    }
    func backTracking(nums: [Int], resultArray: inout [[Int]], combinations: inout [Int], length: Int){
        if(combinations.count == length){
            resultArray.append(combinations)
            return
        }
        else{
            for i in 0..<nums.count{
                if combinations.count == length {
                    resultArray.append(combinations)
                    return
                }
                var numsCopy = nums
                numsCopy.remove(at: i)
                combinations.append(nums[i])
                backTracking(nums: numsCopy, resultArray: &resultArray, combinations: &combinations, length: length)
                combinations.removeLast()
            }
        }
    }
}

class S{
    func permute(_ nums: [Int]) -> [[Int]] {
        var resultArray = [[Int]](), combinations = [Int](), nums = nums.sorted()
        backTracking(nums: nums, resultArray: &resultArray, combinations: &combinations, length: nums.count)
        return resultArray
    }
    func backTracking(nums: [Int], resultArray: inout [[Int]], combinations: inout [Int], length: Int){
        if(combinations.count == length){
            resultArray.append(combinations)
            return
        }
        else{
            for i in 0..<nums.count{
                if i > 0 && nums[i - 1] == nums[i] {continue}
                var numsCopy = nums
                numsCopy.remove(at: i)
                combinations.append(nums[i])
                backTracking(nums: numsCopy, resultArray: &resultArray, combinations: &combinations, length: length)
                combinations.removeLast()
            }
        }
    }
}


var s = Solution()
print(s.permute([1,2,3]))

var ss = S()
print(ss.permute([1,1,2]))
