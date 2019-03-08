/*
Reverse Integer
Given a 32-bit signed integer, reverse digits of an integer.
*/

function reverseInt(x){
	var result = 0
	var absNumber = Math.abs(x)
	var negative = false
	if(x < 0){negative = true}
	if(absNumber < 10){return absNumber}
	while(absNumber > 0){
		if(!(absNumber < 10)){result = (result + (absNumber % 10))* 10}
		else{result = (result + (absNumber % 10))}
		absNumber = Math.floor(absNumber/10)	
	}
	result = (negative)? -result : result
	console.log("MaxVal: " + Number.MAX_VALUE +"==" + 9007199254740992)
	return (result>2147483648 || result< -2147483648) ? 0 : result;
	              
}
var testInt = -1234
console.log(reverseInt(testInt))
console.log(1234 % 10)