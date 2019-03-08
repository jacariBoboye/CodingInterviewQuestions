/*
Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
++i will increment the value of i, and then return the incremented value.
 i = 1;
 j = ++i;
 (i is 2, j is 2)
i++ will increment the value of i, but return the original value that i held before being incremented.
 i = 1;
 j = i++;
 (i is 2, j is 1)

 */
var removeDuplicates = function(A) {
	var len = A.length
        if(len < 2) return len;
        var id = 1; //Slow trailer that only moves when a different place is found. Genius
        for(var i = 1; i < len; i++) {
            if(A[i] != A[i-1]){
            	A[id++] = A[i];
            	console.log(A)
            } 
        }
        return id
}


var nums = [1,1,1,1]
var nums1 = [1,2,3,4]
console.log(removeDuplicates(nums),1)
console.log(removeDuplicates(nums1),2)

