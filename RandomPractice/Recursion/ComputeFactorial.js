/*
1. Compute the Factorial of a number N. Fact(N) = N × (N −
Fib sequence -> 1,1,2,3,5,8,13,21,34,55,89,144,233,377....
*/

function fib(n){
	if(n < 2){return n} 
	return fib(n-2)+fib(n-1)
} 
console.log(fib(5))

