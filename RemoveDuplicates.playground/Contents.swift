
var nums = [1,2,2,3,4]

func removeDuplicates(_ nums: inout [Int]) -> Int {

    var j = 1
    for i in 0..<nums.count{
        if i>0 && nums[i] != nums[i-1]{
            nums[j] = nums[i]
            j+=1
            print("If: j:\(j)  nums: \(nums)")
        }
    }
    
    return j > nums.count ? nums.count : j

}



print(removeDuplicates(&nums))



