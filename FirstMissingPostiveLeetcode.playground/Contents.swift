/*
 Given an unsorted integer array, find the smallest missing positive integer.
 
 Example 1:
 
 Input: [1,2,0]
 Output: 3
 Example 2:
 
 Input: [3,4,-1,1]
 Output: 2
 Example 3:
 
 Input: [7,8,9,11,12]
 Output: 1
 
 */
//Only runs loop if current number is between 1 and n and if the num value's proper index is not that num[i] value
//Im guessing the authors though process was that we can ensure that each index is going to be where it needs to be on 1 iteration
//We dont care to move any value that is duplicates because we can identify the missing element that should be at that current index

func firstMissingPositive(_ nums: [Int]) -> Int {
    if nums.count == 0 {return 1}
    var nums = nums
    for i in 0..<nums.count {while nums[i] >= 1 && nums[i] <= nums.count && nums[nums[i] - 1] != nums[i] {nums.swapAt(i, nums[i] - 1)}}
    for i in 0..<nums.count {if nums[i] != i + 1 {return i + 1}}
    return nums.count + 1
}

func swap(_ nums: inout [Int], left: Int, right: Int){
    if(nums.count > 1){
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
    }
}

firstMissingPositive([1,5,4,2,5]) //ANS: 1
firstMissingPositive([3,4,-1,1]) //ANS: 2
firstMissingPositive([0,-1,3,1]) //ANS: 2 ----
firstMissingPositive([1,2,0]) //ANS: 3  ----
firstMissingPositive([7,8,9,11,12]) //ANS: 1
firstMissingPositive([1,2,3,4,5]) //ANS: 6
firstMissingPositive([5,4,3,2,1])
