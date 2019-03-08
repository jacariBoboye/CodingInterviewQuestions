
/*
 
 Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.
 
 Example 1:
 Input: [1,1,2,3,3,4,4,8,8]
 Output: 2
 Example 2:
 Input: [3,3,7,7,10,11,11]
 Output: 10
 
 
 Solution is to iterate from the back and front on the same for loop using two pointers
 
 */


func singleNonDuplicate(_ nums: [Int]) -> Int {
    var i = 0
    var j = nums.count-1
    if j == 0 { return nums[0] } // nums.count = 1
    while i<nums.count/2 && nums.count>1{
        if nums[i] != nums[i+1]{ return nums[i] }
        if nums[j] != nums[j-1]{ return nums[j] }
        i+=2
        j-=2
    }
    
    return 0

}

var test = [1,1,2,3,3,4,4]

var test2 = [3,3,7,7,10,11,11]

var test3 = [1,1,2]

print(singleNonDuplicate(test))

print(singleNonDuplicate(test2))

print(singleNonDuplicate(test3))



