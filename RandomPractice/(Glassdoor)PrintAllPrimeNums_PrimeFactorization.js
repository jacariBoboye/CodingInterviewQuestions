/*

The Sieve of Eratosthenes in JavaScript


The Sieve of Eratosthenes is a simple algorithm for finding all of the prime
numbers up to a certain limit (or between two numbers).

Since a Prime number is only divisible by itself and 1, we can start from 2, and
continually flag every multiple of that number up to n as false (not a prime). 
The next number would be 3, then we can mark every multiple of 3 to n as false.




https://www.craigrodrigues.com/blog/the-sieve-of-eratosthenes-in-javascript
 */

function sieves(num){

	const sieve = new Array(num).fill(true)

  	for (let i = 2; i < Math.sqrt(num); i++) {  // Math.sqrt?: 
		if(sieve[i]){
			for(let j = Math.pow(i, 2); j < num; j+=i){  //Math.pow?: You are skipping i amount of element each iteration 
				sieve[j] = false
			}
		}
	}

	var primes = []

	for(var i = 0; i < sieve.length; i++){
		if(sieve[i] && i > 1){
			primes.push(i)
		}
	}
	return primes
}

var num = 20
console.log(sieves(num))

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20









