
/*
 
 Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 
 Example:
 
 Given array nums = [-1, 2, 1, -4], and target = 1.
 
 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
 
 */


func threeSumClosest(_ nums: [Int], _ target: Int) -> Int {
    var nums = nums.sorted()
    var sum = Int.max/2
    for i in 0..<nums.count {
        var tmp = 0
        var left = i + 1, right = nums.count - 1
        while left < right {
            tmp = nums[i] + nums[left] + nums[right]
            if tmp < target {
                left += 1
            }else {
                right -= 1
            }
            sum = abs(tmp - target) < abs(sum - target) ? tmp : sum
        }
    }
    return sum
}

var input = [1,2,3,4,5,6]
var inputTwo = [-1, 2, 1, -4] // [-4, -1, 1, 2]
var inputThree = [0,1,2]
var inputFour = [1,2,4,8,16,32,64,128]

var target = 82

print(threeSumClosest(inputFour, target))



