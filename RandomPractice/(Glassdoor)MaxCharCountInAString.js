

/*

Return maximum occurring character in an input string:
Write an efficient function to return maximum occurring character in the input string e.g., 
if input string is “test” then function should return ‘t’.

 */


function maxOccurringChars(str){

	var count = {}

	var len = str.length
	for(var i = 0; i < len; i++){
		count[str.charAt(i)] = (count[str.charAt(i)]+1) || 1 ; //If undefined it will set to 1(Short circuit)
		console.log(count)
	}

	var result = ''
	var max = 0

	for(var i = 0; i < len; i++){
		if(max < count[str.charAt(i)]){
			result = str.charAt(i)
			max = count[str.charAt(i)]
		}
	}

	return result 

}
var testStr = "Apple"
console.log(maxOccurringChars(testStr))