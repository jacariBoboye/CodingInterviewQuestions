˜/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

a
*/

// 1-4 


function romanNumber(romanNumeral){
	if(romanNumeral.length < 1){return 0}
	var count = 0
	for (var i= romanNumeral.length-1; i >= 0; i--){
		var tempCount = convertSingleNumeral(romanNumeral[i])
		var left = convertSingleNumeral(romanNumeral[i])
		var right = convertSingleNumeral(romanNumeral[i+1])
		if(i == romanNumeral.length-1){count+=convertSingleNumeral(romanNumeral[i])}
		else{count = (left >= right) ? (count + left) : (count - tempCount)}
	}
	return count
}

function convertSingleNumeral(tempNumberal){
	var tempCount = 0
	if(tempNumberal == "M"){tempCount+=1000}
	if(tempNumberal == "D"){tempCount+=500}
	if(tempNumberal == "C"){tempCount+=100}
	if(tempNumberal == "L"){tempCount+=50}
	if(tempNumberal == "X"){tempCount+=10}
	if(tempNumberal == "V"){tempCount+=5}
	if(tempNumberal == "I"){tempCount+=1}
	return tempCount
}

// console.log(romanNumber("DCXXI"))

function convertIntToRomanNumberal(numInt){
	// var KConstant =["I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000]	
	// var romanNumber =["I":0,"V":0,"X":0,"L":0,"C":0,"D":0,"M":0]	
	// //Count number of places
  	var M = ["", "M", "MM", "MMM"]
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

	var length = numInt.toString().length,stringConvert=numInt.toString()
	var numberOf1000s = (numInt>1000)?stringConvert.substring(0,length-3):0
	var numberOf100s = (numInt>100)?stringConvert.substring(length-3,length-2):0
	var numberOf10s = (numInt>10)?stringConvert.substring(length-2,length-1):0
	var numberOf1s = (numInt>1)?stringConvert.substring(length-1):0

	return M[numberOf1000s] + C[numberOf100s] + X[numberOf10s] + I[numberOf1s]
}
console.log(romanNumber("MCCXXXIV"))
console.log(convertIntToRomanNumberal(1234))


