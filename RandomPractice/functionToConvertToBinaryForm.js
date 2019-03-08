/*
BINARY REPRESENTATION OF A GIVEN NUMBER
http://www.mathcs.emory.edu/~cheung/Courses/255/Syllabus/1-C-intro/shift-oper.html

Things you need to in order to solve: 
1. How bitwise operators work 
2. Understanding of binary numbers
3. How to determine the time complexity of a recursive function
4. Difference between signed and unsigned numbers.
5. How shifting works: When you divide by 2 you shift right. When you multiply by 2 you 
shift left
1. Are we working with signed or unsigned numbers?

//Iterative method************************
Run through an unsigned integer of (32 bits) as you are running through 
use bitwise AND to determine if that value is on or off. If on both 
elements will be equal to one. If not return 0. 
<----->
Most sig to Least Sig

//Recursive method  : o(n/2)***********
//-> (num/2) % 2 Determines if a bit is on(1) or off(0)
//But why?: 
Dividing by 2: Shifts right
Multiplying by 2: Shifts left

%2 returns the remainder...

& Operator?: &Requires both sides to be 1 in order to change to 1
8/2
%(Mod) Operator?: a % b = a - Math.floor(a / b) * b
- Ask how many time can this number be divided in this other variale
Take the maximum times and then subtract that number by the number you 
were dividing to return remainder

// 9 is 00000000000000000000000000001001  
var expr1 = 9;  

// 5 is 00000000000000000000000000000101  
var expr2 = 5;  

// 1 is 00000000000000000000000000000001  
var result = expr1 & expr2;  

document.write(result);  
// Output: 1  

-Signed data types can hold both positive and negative values. 
-Unsigned data types can hold large positive values but cannot 
hold negative values. Different ways are used represent signed 
values, the most common one is Two's complement method.
*/

function convertIntToBinaryIteratively(num){
	var i = 1 << 30
	var arr = []
	for(var bit = i; bit>1; bit = Math.floor(bit/2)){
		var result = (bit & num) !=0 ? "1":"0"
		arr.push(result)
	}
	return arr
}
function convertIntToBinaryRecursively(num){
	if(num>1){
		convertIntToBinaryRecursively(Math.floor(num/2))
	}
    console.log(num+" "+num%2)   //NOT SURE HOW THIS WORKS
}

console.log(convertIntToBinaryIteratively(200))
console.log(convertIntToBinaryRecursively(200))






