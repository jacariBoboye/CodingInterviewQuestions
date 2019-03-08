/*
Given a number n, print all primes smaller than or equal to n. 
It is also given that n is a small number.

What is a prime number?: 
1. Must be an integer larger than 1
2. A number than can only be divided by itself or by 1. 
3. Opposite of a prime number is a composite number.
What is dynamic programming?: 
Top down approach(Recursive):
- Maintaining values of computed operations to save time 
Bottom down approach(Iteratively):
- 
What is Sieve of Eratosthene algortithm:
Create a list of consecutive integers from 2 to n: (2, 3, 4, …, n).
Initially, let p equal 2, the first prime number.
Starting from p, count up in increments of p and mark each of these numbers greater than p itself in the list. 
These numbers will be 2p, 3p, 4p, etc.; note that some of them may have already been marked.
Find the first number greater than p in the list that is not marked. If there was no such number, stop. 
Otherwise, let p now equal this number (which is the next prime), and repeat from step 3.

According to Sieve of Eratosthenes algorithm the initial condition for inner loop should start from " i = p*p " and not from " i = p*2 ". As for the above implementation extra operations are done. For example for p = 7, the index 14,21,28 are made false. If it was " i = p*p " then these operations need not be executed. The reason being the prime numbers less than 7 have already marked these indexes.


*/

//Not sure on time complexity it is either //o(N) or (nlog(n))
function outputPrime(n){
	var targetArray = []
	for(var i = 0; i<=n; i++){targetArray[i] = false} //initalize array  
	for(var i = 2; i*i <= n; i++){
		if(targetArray[i] === true){continue}
		for(var j=i*2 ; j<n;j+=i){
			targetArray[j] = true
		}

	}
	for(var i = 2; i< targetArray.length-1; i++){
		if(targetArray[i] === false){console.log(i)}}
	return targetArray
}

console.log("outputPrime: " + outputPrime(50))