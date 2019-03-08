/*

Given a non-negative integer represented as a non-empty array 
of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, 
except the number 0 itself.

The digits are stored such that the most significant 
digit is at the head of the list.



 */


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits.length < 1){return digits}
	var digitsArray = []
	var tempCount = 0

	for(var i = 0; i<digits.length;i++){ ///Not working because of overflow
		console.log("TYPEOF: " + typeof tempCount)
		tempCount = tempCount + digits[i]
		if(i == digits.length-1){continue}
		tempCount = tempCount * 10

	}

	tempCount+=1
	console.log("TEMPCOUNT: " + tempCount)
	while(tempCount != 0){
		var th = tempCount % 10
		digitsArray.push(th)
		tempCount = Math.floor(tempCount/10)
	}
	return digitsArray.reverse()
};
var digitsA = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var digitsB = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,2]
console.log("PLUSONE: " + plusOne(digitsB))








