/*
In the lecture, we discussed a method to raise a double to an integer power. 
In this question, write a recursive function that allows raising to a negative integer power 
as well.
*/


function squareOfInteger(base,exponent){
	if(exponent == 0){return 1}
	if(exponent < 0){return squareOfInteger(base, exponent+1)/base;}
	else if(exponent > 0){return base * squareOfInteger(base,exponent-1)}
}

console.log(squareOfInteger(9,-13))