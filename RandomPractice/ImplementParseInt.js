/*

Implement parseInt
ParseInt: The parseInt() function parses a string 
and returns an integer.

typeof : returns variable or function type

1. Can the input/string be a negative number? 
2. get the digit from the character ('0' is 48 ASCII (or 0x30), 
so just subtract that from the character ASCII code to get the digit)




s – A string which needs to be converted to the integer. 
It can also have the first character as a minus sign ‘-‘ 
(‘\u002D’) or plus sign ‘+’ (‘\u002B’) to represent the sign 
of the number.
radix – The radix used while the string is being parsed.
Note: This parameter is only specific to the second variant 
of the method.

*/

var s1 = "123"
var s2 = "456"

function parseIntTest(str1){
	if(!(typeof str1 === 'string')){return false}
	if(str1 == null || str1.length < 0){return false}
    var position= Math.pow(10,str1.length-1); ////This needs be the 
	var result = 0
	for (var char in str1){
		var number = str1.charAt(char) - '0'//Most importany piece(Conversion to integer from string)
       	result += number * position;
        position = position/10;
	}
	return result
}

console.log(parseIntTest(s1))
console.log(parseIntTest(s2))




