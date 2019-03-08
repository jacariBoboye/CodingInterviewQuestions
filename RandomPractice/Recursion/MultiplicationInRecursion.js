/*
Write a function for mutliply(a, b), where a and b are both positive
integers, but you can only use the + or − operators.
*/

function multiply(a,b){
	if(a==0||b==0){return 0}
	return a + multiply(a,b-1)
}
//4*4
//4+multiply(4,3)->multiply(4,2)->multiply(4,1)
//The base case(multiply(4,0)) this will result in 4+0 and every subsequent multiply will be equal to this
console.log(multiply(4,4))