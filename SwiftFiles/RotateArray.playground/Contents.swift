/*
 
 Implement a function rotateArray(vector<int> arr, int r) which rotates the array by r
 places. Eg 1 2 3 4 5 on being rotated by 2 gives 4 5 1 2 3.

 */


func rotateArray( _ nums: inout [Int], shifts: Int){
    
    if(nums.isEmpty){return}
    
    if(shifts == 0){return}
    
    for _ in stride(from: nums.count - shifts, through: nums.count - 1, by: 1){

        nums.insert(nums.popLast()!, at: 0)
        
    }
    
}

var nums = [1,2,3,4,5]


rotateArray(&nums, shifts: 1)

print(nums)
