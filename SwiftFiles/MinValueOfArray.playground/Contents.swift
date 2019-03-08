

/*
 Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 
 (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 
 Find the minimum element.
 
 You may assume no duplicate exists in the array.
 
 Example 1:
 
 Input: [3,4,5,1,2]
 Output: 1
 Example 2:
 
 Input: [4,5,6,7,0,1,2]
 Output: 0
 */


func findMin(_ nums: [Int]) -> Int {
    
    var min = Int.max, tempMin = min
    
    for elem in nums{
        tempMin = elem
        if(tempMin < min){min = tempMin}
    }
    
    return min
    
}

func findMin(nums: [Int]) -> Int {
    let nums = nums
    return nums.sorted()[0]
}


var nums0 = [0,1,2,-1,-3,-4]
var nums1 = [3,4,5,1,2]
var nums2 = [4,5,6,7,0,1,2]

//print(findMin(nums0),-4)
//print(findMin(nums1), 1)
//print(findMin(nums2), 0)


print(findMin(nums: nums0))
print(findMin(nums: nums1))
print(findMin(nums: nums2))



