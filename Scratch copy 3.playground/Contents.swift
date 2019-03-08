
func singleNumber(_ nums: [Int]) -> Int {
    return ((Set(nums).reduce(0,+) * 3) - nums.reduce(0,+))/2
}

print(singleNumber([2,2,3,2]),3)
