/*
 
 34. Find First and Last Position of Element in Sorted Array
 
 Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 
 Your algorithm's runtime complexity must be in the order of O(log n).
 
 If the target is not found in the array, return [-1, -1].
 
 Example 1:
 
 Input: nums = [5,7,7,8,8,10], target = 8
 Output: [3,4]
 Example 2:
 
 Input: nums = [5,7,7,8,8,10], target = 6
 Output: [-1,-1]
 */

class Solution {
    func searchRange(_ nums: [Int], _ target: Int) -> [Int] {
        var high = nums.count-1, low = 0, mid = (high+low)/2
        while(low<=high){
            mid = (high+low)/2
            if(nums[mid] == target){
                var left = -1, right = 1
                while((mid+left) >= 0 && nums[mid+left] == nums[mid]){left-=1}
                while((mid + right) <= nums.count - 1 && nums[mid+right] == nums[mid]){right+=1}
                return [mid+left + 1, mid+right - 1]
            }
            else if(nums[mid] > target){high = mid - 1}
            else if(nums[mid] < target){low = mid + 1}
        }
        return [-1,-1]
    }
}

var s = Solution()
s.searchRange([5,7,7,8,8,10], 8)
s.searchRange([5,7,7,8,8,10], 6)
s.searchRange([2,2], 2)
s.searchRange([1,1,1,1,1], 1)
s.searchRange([], 2)
s.searchRange([1,2,3,4,4,4,4,4,4,4,5], 4)
s.searchRange([1], 1)
s.searchRange([1,2], 1)
s.searchRange([1,4], 4)
s.searchRange([3,3,3], 3)

