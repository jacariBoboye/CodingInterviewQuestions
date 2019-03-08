/*
Given a sorted array and a target value, return the index if the target is found. If not, 
return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 1:

Input: [1,3,5,6], 0
Output: 0

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //o(N)
var searchInsert = function(nums, target) {
	if(nums.length<1){return 0}
	for(var x = 0; x<nums.length;x++){
		if(nums[x] == target){return x}
		if((nums[x] < target) && (target < nums[x+1])){return x+1}
		if((nums[x] < target) && (undefined === nums[x+1])){return x+1}
		if((nums[x] > target) && (undefined === nums[x-1])){return x}
	}
}
var nums = [1,3,5,7]
var target = 0
//console.log(searchInsert(nums,target))


//o(logN)

// The problem is that you are shortening the list everytime
//Recursion wont work
//Maintain a high a low and youll be good to good 
var binarySearchRecursion = function(nums, target){ 
	if(nums.length < 2){
		if(nums.length == 0){return 0}
		else if(nums[0] > target){return 0}
		else if(nums[0] < target){return 1}
	}
	var mid = Math.floor(nums.length/2)
	console.log("Mid---> " + mid)
	if(nums[mid] == target){return mid}
	else if(nums[mid] > target){
		console.log("Slice(0,mid)---> " + nums.slice(0,mid))
		return binarySearchRecursion(nums.slice(0,mid),target)}
	else if(nums[mid] < target){
		console.log("Slice(mid+1)---> " + nums.slice(mid+1,nums.length))
		return binarySearchRecursion(nums.slice(mid+1,nums.length),target)}
};

var binarySearchIteratively = function(nums, target){
	var low = 0, high = nums.length, mid = 0
	if(nums.length < 2){
			if(nums.length === 0){return  0}
			else if(nums[mid] > target){return 0}
			else if(nums[0] < target){return 1}
	}
	while(low<high){
		mid = Math.floor((high+low)/2)
		if(nums[mid] == target){return mid}
		else if(nums[mid] > target){high=mid}
		else if(nums[mid] < target){low=mid+1}
		console.log("Mid: " + mid)
		console.log("Low: " + low)
		console.log("High: " + high)
		if((high-low) < 1){
			if(nums[high]> target){return high}
			else{return high = high--}
		}
	}
}

console.log(binarySearchIteratively(nums,target))











