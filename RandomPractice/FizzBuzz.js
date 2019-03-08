/*

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for 
the multiples of five output “Buzz”. For numbers which are multiples of both
 three and five output “FizzBuzz”.

*/

var fizzBuzz = function(n){
	var tempArray = []
	for(var i=1;i<=n;i++){
		if((i%5) == 0 && (i % 3)== 0){tempArray.push("FizzBuzz");continue;}
		if((i % 3)== 0){tempArray.push("Fizz");continue;}
		if((i % 5)== 0){tempArray.push("Buzz");continue;}
		tempArray.push(i+"")
	} 
	return tempArray
}

console.log(fizzBuzz(15))