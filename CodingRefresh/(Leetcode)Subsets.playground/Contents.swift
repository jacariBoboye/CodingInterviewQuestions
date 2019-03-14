


/*
 Summary: This algorithm builds upon the previous element subsets. The inner loop takes 
 the outer loops element and appends to the array at element (innder index pos).
 
 */

class Solution {
    
    func subsets(nums: [Int]){
        var nums = [Int](), resultsArray = [[Int]]()
        backtracking(nums: nums, resultsArray: resultsArray)
        return resultsArray
    }
    
    func subsets(_ nums: [Int]) -> [[Int]] {
        var result = [[Int]](), n = nums.count
        
        if(n == 0) {return result}
        
        result.append([])
        
        for num in nums {
            for index in 0..<result.count {
                var subset = result[index]
                subset.append(num)
                result.append(subset)
            }
        }
        return result
    }
    
    func backtracking(nums: [Int], resultsArray: [[Int]]){
        
        for element in nums{
            
        }
    }
}

// [1, 2, 3]
// results = [[], [1], []]

var s = Solution()
s.subsets([1,2,3,4])
s.subsets(nums: [1,2,3,4])


