/*
Find the only element in an array that only occurs once.
*/

var elementsArray = [2,1,1,2,4]

function checkForSingleElementIt(elementsArrayParam){//o(n^2)  <-- Still working
	var dupFound = false
	for (var i = 0; i < elementsArrayParam.length; i++){
		dupFound = false
		for(var j= i + 1; j < elementsArrayParam.length; j++){
			if(elementsArrayParam[i] === elementsArrayParam[j]){dupFound = true}
		}
		if (dupFound === false){return elementsArray[i]}
	}
}
// console.log(checkForSingleElement(elementsArray))


function checkForSingleElementHash(elementsArrayParam){//Time: o(N) 
	var arr = {}
	for(var i = 0; i < elementsArrayParam.length; i++){
		arr[elementsArrayParam[i]] = (elementsArrayParam[i] in arr) ? arr[elementsArrayParam[i]] + 1  : 1
	}	
		console.log(arr)

	for(var i = 0; i < elementsArrayParam.length; i++){
		if(arr[elementsArrayParam[i]] === 1){return elementsArrayParam[i]}
	}
	return false
}
console.log(checkForSingleElementHash(elementsArray), "o(N)")




/*Another approach suggested by Abhishek Sharma 44. Add each number once and multiply the sum by 3, 
we will get thrice the sum of each element of the array. Store it as thrice_sum. Subtract the sum of the whole array from the thrice_sum 
and divide the result by 2. The number we get is the required number (which appears once in the array).

Array [] : [a, a, a, b, b, b, c, c, c, d]
Mathematical Equation = ( 3*(a+b+c+d) – (a + a + a + b + b + b + c + c + c + d) ) / 2

In more simple words: ( 3*(sum_of_array_without_duplicates) – (sum_of_array) ) / 2

let arr[] = {12, 1, 12, 3, 12, 1, 1, 2, 3, 3}
Required no = ( 3*(sum_of_array_without_duplicates) - (sum_of_array) ) / 2
            = ( 3*(12 + 1 + 3 + 2) - (12 + 1 + 12 + 3 + 12 + 1 + 1 + 2 + 3 + 3))/2 
            = ( 3*     18          -      50) / 2
            = (54 - 50) / 2
            = 2 (required answer)
As we know that set does not contain any duplicate element, we will be using set here.

Below is the implementation of above approach:

# Python program to find the element 
# that occur only once
 */

function singleNumber(elementsArrayParam){
	var n = elementsArrayParam.length
	var arrayWithRemovedDups = Array.from(new Set(elementsArrayParam));
	var sum = elementsArrayParam.reduce((a, b) => a + b, 0)
	var sum_of_array_without_duplicates = arrayWithRemovedDups.reduce((a, b) => a + b, 0)
	console.log("Sum" + sum)
    return ((3*sum_of_array_without_duplicates) - sum)/2
}
console.log(singleNumber(elementsArray), "Time:o(N), Space:o(1)")

// # function which find number
// def singleNumber(nums):
     
//     # applying the formula.
//     return (3 * sum(set(nums)) - sum(nums)) / 2
 
// # driver function.
// a = [12, 1, 12, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7]
// print ("The element with single occurrence is ", 
//                           int(singleNumber(a)))




