/*
 
 You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 
 Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 */



class Solution {
    
    //Time complexity: O(n)
    //Space complexity: O(n)
    //Explaination: The idea is iterate over the inputted integer array and keep track of the greatest combined elements thus far and append that number to our memo integer array over every iteration.
    
    func rob(_ nums: [Int]) -> Int {
        
        /*Intialize memo integer array*/
        var memo = [Int]()
        
        /*Store a count of the inputted array*/
        let len = nums.count
        
        /*Handle cases of the length of the inputted integer array being 0,1,or 2*/
        if(len == 0){return 0}
        if(len == 1){return nums[0]}
        if(len == 2){return max(nums[len-1], nums[len - 2])}

        /*Add the first two elements from the integer array. If the second element happens to be smaller than the first element we do not need it. With that being said we can discard it by replacing it with the first element.*/
        memo.append(nums[0])
        memo.append(max(nums[0], nums[1]))
        
        /*Begin at the second third element and iterate to the very end of the inputted integer array. While iterating we should be checking to see if the current element is greater than the previous single or combined integers. Once concluded we append the greater number*/
        for index in stride(from: 2, to: len, by: 1){
            memo.append(max(memo[index-1], (nums[index] + memo[index - 2])))
        }
        
        /*The last number returns the greatest number of non-adjacent combined integers.*/
        return memo[len - 1]
        
    }
    
}


var sb = Solution()

var test = [1,2,3,1]

print(sb.rob(test))


