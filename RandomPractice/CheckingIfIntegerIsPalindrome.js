/*
	Determine whether an integer is a plaindrome. Do this without extra space.

	i.e.) Assumption: 55155 -> (Revers)55155
*/

var num = 12

function checkIfPalindromeNumber(num){
	if(num.toString()[0] === '-'){return false}
	for(var i = 0 ; i < num.toString().length/2; i++){
		if(num.toString()[i] !== num.toString()[num.toString().length-(i+1)]){
			return false
		}
	}
	return true
}

console.log(checkIfPalindromeNumber(num))


function isPalindrone(num){
	if (num < 1){return false}
	//count number of divisors so we can get the leading variable
	var divisor = 1
	while((num/divisor) >= 10){
		divisor*= 10
	}

	while(num != 0){
		var leading = num / divisor; 
        var trailing = num % 10;
        if (leading != trailing){return false}       
            // Removing the leading and trailing
            // digit from number
            n = (n % divisor) / 10; //Continouly pops off first and last elements
            // Reducing divisor by a factor 
            // of 2 as 2 digits are dropped
            divisor = divisor / 100;//Used to find the leading element
        }
	}
	return true
}
var stringVar = 1001
isPalindrone(stringVar)











