/*

Kadane's Algorithm to solve the Maximum Sum Subarray problem
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

More practice:
If you have figured out the O(n) solution, try coding 
another solution using the divide and conquer approach, 
which is more subtle.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

//Kaden's Algo Solution
/*
This solution is in o(n)


*/
var maxSubArray = function(nums) {
  var max_cur = {sum:Number.MIN_SAFE_INTEGER, start:0, end:0}; //Intialize sum to the lowest num possible
  var max = {sum:Number.MIN_SAFE_INTEGER, start:0, end:0}; //Intialize sum to the lowest num possible
  for(var i = 0; i < nums.length;i++){
  	if(max_cur.sum < 0){ //Deadend found: 
  		max_cur.sum = nums[i]
  		max_cur.start = i
  		max_cur.end = i
  	}
  	else{  //Continue chain:
  		max_cur.sum += nums[i]
  		max_cur.end = i
  	}
  	if(max_cur.sum > max.sum){//If Chain is greater than max set new max.sum, max.end,
  		max.sum = max_cur.sum 
  		max.start = max_cur.start
  		max.end = max_cur.end
  	}
  }
  return max.sum
};

var nums = [-2,1,1,4,-1,-10,1,-5,4]
var edge1 = [-2,-	1]
// console.log(maxSubArray(nums))
console.log(maxSubArray(edge1))












