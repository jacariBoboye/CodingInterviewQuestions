/*

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the
 number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in 
linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount 
in c++ or in any other language.

*/


/**
 * Brute Force solution
 * 
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
	var arrOfCount = []
	for(var i =0; i<=num;i++){
		var currentNumberInBinary = Number(i).toString(2)
		var tempVar = 0
		for(var index = 0;index<currentNumberInBinary.length;index++){if(currentNumberInBinary[index] == 1){tempVar++}}
		arrOfCount.push(tempVar)
	}
	return arrOfCount   
};

console.log(countBits(4), [0,1,1,2,1,2])

/**
 * Dynamic Programming
 * 
 * @param {number} num
 * @return {number[]}
 */



/**
 * Bitwise operations
 * 
 * @param {number} num
 * @return {number[]}
 */










