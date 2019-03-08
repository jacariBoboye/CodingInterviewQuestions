/*
	Question 1.9
	String Rotation: Assume you have a method isSubstring wheich checks if one word is 
	a substring of another. Given two strings, s1 and s2, write code to check if s2
	is a rotation of s1 using only one call isSubstring(e.g., "waterbottle" is a rotation of 
	"erbottlewat")
*/
	https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
/*

Operations: 
1. 

*/

var s1 = "waterbottle"
var sub = "erbottlewat"

function checkIfSubstring(fullString, sub){

	if(sub.length != fullString.length){return false}
	var concatSub = sub+sub
	return concatSub.includes(fullString)
	
}

console.log(checkIfSubstring(s1, sub))