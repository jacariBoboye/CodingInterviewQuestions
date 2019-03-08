
/*
 
 The first Jedi question was this: given an unsorted array of numbers, like [1, 3, 5, 4, 2], write a function that takes an integer and returns true if there's any pair of numbers in that array that can be summed up to the input integer.
 
 
 */

//O(n^2) solution:
func checkForTargetSum(_ nums: [Int], _ target: Int) -> Bool{
    
    var outerIndex = 0
    
    for num in nums{
        
        let complement = target - num
        
        var innerIndex = 0
        
        let array = nums.filter { (num) -> Bool in
            
            if(num == complement && outerIndex != innerIndex){return true}
            
            innerIndex+=1
            
            return false
            
        }
        
        if(!array.isEmpty){
            
            print("Target: \(target) - Complement in array: \(complement) - Num: \(num)")
            
            return true
            
        }
        
        outerIndex+=1
    }
    
    print("Nothing found")
    
    return false
    
}

var arrayOfInts = [1,2,5,4,3]

checkForTargetSum(arrayOfInts, 3)


//Solution:
/*
 1. You can iterate through the array
 2. Subtract that element from the target and then binary search to find other lement
 3.
 */
