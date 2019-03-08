

//Question 1.4 : Palindrom Permutaion
/*

Given a string, write a funciton to check if it is a permutation of a palindrome
===
<======= Forward && Backwards ========>

Palindrome Examples: 
input: Tact Coa
output: true(permutations: "taco cat", "atco cta")

*/


/*
During the interview it would be helpful to know what defines a palindrome. 
Facts:
1. Can be written forwards and backwards 
2. There is an even number of even numbers and one odd number of ods

*/


/*
Check the occurence of elements
Using Hashmap
o(N)  <-- It doesnt get any better than this because in any situation you have to iterate throught the string

Steps: 
1. Iterate through the string? 
2. Add to hashmap and use boolean to set if even(true) or odd(false)
*/


var title = "tact coa"

function checkIfPalindromeUsingDS(stringParam){
	var arr = {}
	var count = 0
	for(var char of stringParam){
		if(char === ' '){continue}
		if(!(char in arr)) {arr[char] = false}
		else {arr[char] = true}	
	}
	for(var char in arr){
		if (arr[char] == false){count++}
	}

	if (count > 1){return false}

	return true
}


console.log("checkIfPalindromeUsingDS" + checkIfPalindromeUsingDS(title))
