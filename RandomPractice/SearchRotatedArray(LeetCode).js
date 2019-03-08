/*
33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.


 */

/**nums
 * @param {number[]} 
 * @param {number} target
 * @return {number}
 */
  
	//Find the lowest integer
	//Make descision on which side to perform binary search on
	//Run binary search and return element 
	
/*
	Why does this work?
	--------------------
    1.)The entire goal is to find the shortest value
    2.)Check to see if the mid point is less than the right
    3.)If so go to that side becuase you dont care about the 
    high
    4.) If not go to the opposite side. 
    5.) Eventually you keep chopping the array down 
    until its sorted
    6.)It will stop after lo, hi and mid are equal 
    to one another

    3 years late, but I think I figured it out, this was done here:

We are using binary search, with a small change here. 
When we compare A[mid]>A[hi] we are really comparing 
to see whether or not the middle pivot is in the “looped 
part” or the “normal part”.
If the value of the middle pivot we picked is higher 
than the value of the highest element in our window, 
then we know that our pivot is in the “looped part”. 
This means that the smallest number should be to the 
right of that middle pivot. Hence we set the mid as 
the new low.
For ease of understanding, let me try to restate the 
above in step by step point form:
Goal: To find the index of the smallest value in 
this rotate array
We pick a middle pivot using the high/low method.
We try to determine whether this middle pivot is to the 
left or right of our target minimum value.
If A[mid] > A[hi] we know that the middle pivot value is 
“unnaturally” high, so it must be in the left part (i.e. 
the looped portion).
Otherwise, it’s in the normal part and we set the new high 
to this middle index (since we are trying to find the lowest value)
*/


/*
	ReadMid Explained: 

	

 */

var search = function(nums, target) {

	if(nums == null || nums.length < 1){return -1}
	var lo = 0; hi = nums.length-1
	while(lo<hi){
		var mid = Math.floor((lo + hi)/2)
		if(nums[mid]>nums[hi]){lo=mid+1} 
		else{hi=mid} 
	}
	var rot=lo;
    lo=0;hi=nums.length-1;
            // The usual binary search and accounting for rotation.
    while(lo<=hi){
        var mid= Math.floor((lo+hi)/2);
        var realmid=(mid+rot)%nums.length;
        if(nums[realmid]==target)return realmid;
        if(nums[realmid]<target)lo=mid+1;
        else hi=mid-1;
    }
	return -1
};
var num1 = [1,3]
var nums = [5,6,7,8,9,0,1,2,3,4]

console.log(search(num1,1))



var binarySearchWithDuplicates(nums, target){}




