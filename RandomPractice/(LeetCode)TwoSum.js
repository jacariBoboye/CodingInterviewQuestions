/*
	Add together elements within an array that equal a desired target

	i.e.) 
		Target = 0
		var array = [0,1,-1]
*/


var twoSum = function(nums,target = 0){
	if(nums.length < 2){return nums}
	nums.sort()
	var left = 0
	var right = nums.length-1
	while(left<right){
		if((nums[left] + nums[right]) == target){return true}
		else if((nums[left] + nums[right]) > target){right--}
		else{left++}
	}
	return false
}
var digitsArray = [1,-1,3,4,5]
console.log(twoSum(digitsArray, 0))