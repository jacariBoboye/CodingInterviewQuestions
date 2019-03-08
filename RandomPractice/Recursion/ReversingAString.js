/*
Reverse a string with recurions
*/


var x = "todayIsGoingToBeGood"

function reverseString(s){
	if(s.length<1){return s}
	return s[s.length-1] + reverseString(s.substring(0,s.length-1))
}

console.log(reverseString(x))