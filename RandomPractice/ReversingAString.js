/*
Reversing a string 
*/

var str1 = "Jacari"

function reversingAString(S){//o(N)

	var result = ""

	for(var char of S){
		result = char + result
	}
	return result
}

function reversingAStringPrintingBackwards(S){
	var result = ""
	for(var i = S.length-1; i >= 0; i--){
		result = result + S[i]
	}
	return result
}

function reverseStringRecursion(S){
	return (S ? reverseStringRecursion(S.substring(1)) + S[0] : S) 
	//String: "123" -> String.substring(1) = 2 + String[0] = 3
}

console.log(reversingAString(str1))
console.log(reversingAStringPrintingBackwards(str1))
console.log(reverseStringRecursion(str1))