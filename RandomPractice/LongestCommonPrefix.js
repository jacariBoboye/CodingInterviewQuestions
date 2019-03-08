/*
Write a function to find the longest common prefix string 
amongst an array of strings.


Input  : {“geeksforgeeks”, “geeks”, “geek”, “geezer”}
Output : "gee"

Input  : {"apple", "ape", "april"}
Output : "ap"

/**
 * @param {string[]} strs
 * @return {string}
 **/

// var longestCommonPrefix = function(strs) {//Not working because of method to find answer
// 	var shortestStringCount = strs[0].length, shortestString = "", lengthOfLongestPrefix = 0
// 	for (var i =0; i< strs.length;i++){
// 		if(strs[i].length<shortestStringCount){
// 			shortestString = strs[i]
// 			shortestStringCount = strs[i].length
// 		}
// 	}//Find shortest string
// 	var combinedString = strs.join('')//Joins together all elements within array
// 	console.log("combinedString->" + combinedString)
// 	for(var i=0;i<shortestStringCount;i++){
// 	}
//     return shortestString.substring(0,lengthOfLongestPrefix)
// }

var arr = ["aac","a","ccc"]
// console.log(longestCommonPrefix(arr))


//o(n^2)
var longestCommonPrefix = function(strs){
	if(strs.length < 1|| strs === null || strs[0] === ""){return ""}
	var firstString = strs[0]
	var prefixCount = strs[0].length
	for(var i = 1; i<strs.length;i++){
		console.log("123")
		var tempPrefix = 0
		for(var j = 0; j<strs[i].length;j++){
			if(firstString[j] == strs[i][j]){
				console.log(firstString[j]+"<-->" + strs[i][j])
				tempPrefix++}
			else{break}
		}
		if(tempPrefix<=prefixCount){prefixCount = tempPrefix}
	}
	return firstString.substring(0,prefixCount)
} 

console.log(longestCommonPrefix(arr))
