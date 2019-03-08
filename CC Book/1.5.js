//Question 1.5: One Away: There are three types of deitcs that can be performed on stirngs. 
//Insert, remove or replace. Given two strings, write a function to check if they are one edit away(or zero away)

var baseCase = "future"


var oneRemoved = "uture"  //One less. Same characters - 1 element
var oneInsert = "fucures" //One added character. Same characters + 1 element
var oneReplace = "suture" //Same length. Same characters besides 1 element


function checkIfOneAway(str1, str2){

console.log("length1: " + str1.length)
console.log("length2: " + str2.length)

if(checkIfOneElementHasBeenInsertedFromThisString(str1, str2) || checkIfOneElementHasBeenReplacedFromThisString(str1, str2)) {
    return true
}
else{
	return false
}
}

function checkIfOneElementHasBeenInsertedFromThisString(str1, str2) {
	//P  L  E  <---> P A L E 
	var index1 = 0
	var index2 = 0
	var difference = false
	if (str1.length === str2.length - 1){
		while(index2 < str2.length && index1 < str1.length){
			if(str2.charAt(index1) === str1.charAt(index1)){
				index1++
				index2++
			}
			else{
				index2++
				if(difference){
					console.log("Hey we found more than one difference")
					return false
				}
				difference = true
			}
		}
		console.log("Yes, has been inserted")
		return true
	}
}

function checkIfOneElementHasBeenReplacedFromThisString(str1, str2) {
	var index1 = 0
	var index2 = 0
		var difference = false
	if ((str1.length === str2.length)){	
	 	while(index1 < str1.length && index2 < str2.length){
	 		if(str1.charAt(index1) === str2.charAt(index2)){
	 			index1++
	 			index2++
	 		}
	 		else{
	 			index1++
	 			index2++
				if(difference){
					console.log("Hey we found more than one difference")
					return false
				}
				difference = true
	 		}
	 	}
	 	console.log("Yes, has been replaced")
	 	return true
	}
}
console.log(checkIfOneAway(baseCase, oneReplace))