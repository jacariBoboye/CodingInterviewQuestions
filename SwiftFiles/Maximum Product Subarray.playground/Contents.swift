/*
 
 152. Maximum Product Subarray
 
 Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
 
 Example 1:
 
 Input: [2,3,-2,4]
 Output: 6
 Explanation: [2,3] has the largest product 6.
 Example 2:
 
 Input: [-2,0,-1]
 Output: 0
 Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 
 */
class Solution {
    func maxProduct(_ nums: [Int]) -> Int {
        var nums = nums
        var r = nums[0], imax = r, imin = r
        for i in 1..<nums.count{
            if(nums[i] < 0){swap(&imin, &imax)}
            imax = max(nums[i], imax * nums[i])
            imin = min(nums[i], imin * nums[i])
            r = max(r,imax)
        }
        return r
    }
}

var s = Solution()
s.maxProduct([2,3,-2,4,40])
s.maxProduct([-2,0,-1])
s.maxProduct([-1])
s.maxProduct([5])
s.maxProduct([3,2])
s.maxProduct([-4,-3,-10])

/*
 
 [2, 3, -2, 4]
 [2, 6, -2, 4]
 -> Store 6 as your max
 if negative then do nothing
 
 What is the highest this position possibly be?
 
 */
