

/*
Find number of given sum, given an array A[]

Write a C program that, given an array A[] of n numbers and 
another number x, determines whether or not there exist two elements in S 
whose sum is exactly x.


Instructions/Steps:
Approach 1:(Sorting)
1. Sort - nLogN
2. Need to touch every element up until we find a solution -> At least o(n)  Time Complexity = o(n) + n(log(n))
3. Iterate through the list from forward and backward(Binary search)

Approach 2: (Use Hashing)
1. Iterate over every array
2. Check if complement is in array.
	-If yes return
	-If not add to hash

 */

function findNumberWithGivenSumSorting(arr, target){

	var sortedArray = arr.sort()
	var l = 0
	var r = arr.length - 1
    
	while(l < r){
		if((arr[l] + arr[r]) === target){
			return 1
		}
		else if((arr[l] + arr[r]) < target){
			l++
		}
		else{
			r--
		}
	}
	return 0
}


var arr = [1,2,5,3,8]
var target = 8

console.log(findNumberWithGivenSumSorting(arr,target))


function findNumberWithGivenSumHashing(arr,target){

	var hash = {}

	for(var i = 0; i < arr.length; i++){
		var complement = target - arr[i]
		if(complement in hash){
			return 1
		}
		hash[arr[i]] = true
	}
	return 0
}


console.log(findNumberWithGivenSumHashing(arr,target))














