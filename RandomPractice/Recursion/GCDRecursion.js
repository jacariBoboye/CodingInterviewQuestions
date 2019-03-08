/*
Find greatest common divisor(GCD) of 2 numbers using recursion.
*/


//If the length is unknown
function gcd(num1,num2,divisor,high){ //Overflow because ++ in parameters doesnt incrmeent as expected
	if((num1 % divisor == 0) && (num2 % divisor == 0)){return divisor}
	return gcd(num1,num2,divisor - 1)
}

console.log(gcd(10,3,3))
