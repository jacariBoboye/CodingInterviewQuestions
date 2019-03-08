/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if(haystack.lenth < needle.length){return -1}
	if(needle.length<1){return 0}
    var m = 0
	for(var i = 0; i<haystack.length;i++){
		if(haystack[i] == needle[m]){m++}
		else{
			i=i-m
			m=0
		}
		console.log("M: " + m)
		if(m === needle.length){return i-needle.length+1}
	}
	return -1
};

var haystack = "hello"
var needle = "ll"

console.log(strStr(haystack,needle))