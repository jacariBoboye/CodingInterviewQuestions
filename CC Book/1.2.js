//Check Permutation 1.2

//Permutation?: Is a way of several possible variations, in which a set or number of things 
//can be ordered or arranged


/*
Sorting solution
o(LogN)
*/
function checkIfPermBySorting(){
	// The 3 equal signs mean "equality without type coercion". 
	// Using the triple equals, the values must be equal in type as well.
	if(sortTextInOrder(str1) === sortTextInOrder(str2)){return true;}
	return false;
}

/*
	Using a map
	o(n)
*/
function checkIfPermByDS(str1, str2){
	var arr = {};
	//Check if both strings are the proper length
	if (!(str1.length === str2.length)){return false;}
	//Load map
	for (var char of str1){
		arr[char] = false;
	}
	// //Iterate and perform check
	for (var char of str2){
		if (!(char in arr)) {
			return false;
		}
	}
	console.log(arr)
	return true;
}


function sortTextInOrder(text){ //Array sort functions 
/*
	VAR REPRESENTS THE STRING YOU WOULD LIKE TO MANIPULATE
	Sort: VAR.split('').sort().join('');
	Reverse: VAR.split('').reverse().join('');
	Join: VAR.split('').join().join('');
*/

	return text.split('').sort().join('');
}


// console.log("CheckIfPermBySorting: " + checkIfPermBySorting());
// console.log("CheckIfPermByDS: " + checkIfPermByDS());
// console.log("checkIfPermByComparingStrings: " + checkIfPermByComparingStrings());


/*
	Cracking the coding interview solution
	o(Log(N))
*/
var checkPermute = function(stringOne, stringTwo) {
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};

// Tests  (, (Value)) -> You can add a comma for the test cases. For example if you were looking for 
// false then you add (, false)

console.log(checkIfPermByDS('aba', 'aab'), true);

console.log(checkIfPermByDS('aba', 'aaba'), false);

console.log(checkIfPermByDS('aba', 'aa'), false);


