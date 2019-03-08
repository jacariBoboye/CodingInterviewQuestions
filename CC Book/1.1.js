
//Interview Question: 1.1 - isUnique


var title = "123";


/*
Brute force: W/o sorting
Time complexity: O(n^2)
*/
function isUniqueBruteForce(){
	for(x = 0; x < title.length; x++){
		for(j = x + 1; j < title.length; j++){
			if(title.charAt(x) == title.charAt(j)){
			console.log("(BruteForce)There was a match: " +  title.charAt(x) + "===" + title.charAt(j));
			}
		}
	}
}

/*
Brute force: W/ Sorting
Time complexity: O(n log n)
*/
function isUniqueWithSorting(){
	var orderedString = sortTextInOrder(title);

	for(x = 0; x < title.length; x++){
		if (orderedString.charAt(x) == orderedString.charAt(x + 1)){
			console.log("(BruteForce)There was a match: " +  orderedString.charAt(x) + "===" + orderedString.charAt(x + 1));
		}
	}
}

/*
Using data struct: W/ DB
Time complexity: O(n log n)
*/
function isUniqueWithDS(){
	var arr = [];
	for (x = 0; x < title.length; x++){
		if (title.charAt(x) in arr){
			arr[title.charAt(x)] = false;
		}
		else{
			arr[title.charAt(x)] = true;
		}
	
	}
		console.log(arr);

	for (const k in arr){
   	 	if (arr[k] === false) {
    		return false
    	}
	}
	return true;
}

/*
Using bitwise
Time complexity: O(n)
*/
function isUniqueWithBitwise(){
	var count = 0;

	for(character in title){
		var check = 0;
		check = check - 'a';
	}
}


//MARK: Helper methods

function sortTextInOrder(text){
	return text.split('').sort().join('');
}


//MARK: Method calls

//isUniqueWithSorting();
//isUniqueBruteForce();
// console.log(isUniqueWithDS());
//isUniqueWithCreativity();
//console.log(isUniqueWithBitwise(););




















