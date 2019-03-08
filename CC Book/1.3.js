//Question 1.3: URLify

/*
input: "Mr John Smith    "
output: "Mr%20John%20Smith"
*/

var str1 = "Mr John Smith    "
var testString = "12 3"

/*
Javascript built in methods
1.) The problem with using these is that you dont know whats going on behind the scenes
2.) What if you were desinging for a device that had very little resources and requried optimizd code.
*/

function removeSpacesFromString(stringParam, trueLength){
	stringParam = stringParam.removeTrailingSpacing(stringParam, trueLength)
	return stringParam.replace(/ /g , "%20")
}

//console.log(removeSpacesFromString(str1));



/*
Cracking the coding interview
o(n^2)
*/

function optimizedRemovalOfSpacingFromString(stringParam, trueLength){

	//Remove trailing spaces
	//Iterate through and replace spaces with %20
	
	stringParam = stringParam.removeTrailingSpacing(stringParam, trueLength)

	for(index = 0; index < stringParam.length; index++){
		if (stringParam.charAt(index) === ' '){
			console.log("Found space @ Index: " + index)
			stringParam = stringParam.setStringAt(index, '%20')
		}
	}
	return stringParam

}


//Utility functions
String.prototype.setCharAt = function(index,chr) {
	/*
		(index) is the index of the character to be replaced
		(chr) is the new character that should be inseterd
	*/
	if(index > this.length-1) return str;  //Guard against going out of bounds
		return this.substr(0,index) + chr + this.substr(index+1);
}

String.prototype.setStringAt = function(index,str){
		/*
		(index) is the index of the character to be replaced
		(str) is the new string that should be inseterd
		*/
	if (index > this.length){return str}
		return this.substring(0,index) + str + this.substring(index+1)
}

String.prototype.removeTrailingSpacing = function(stringParam, trueLength){
	/*
	(trueLength) is the length of your desired output after trailing spaces has been removed
	(str) is the string you would like to operate on
	*/
	var numOfTrailingSpaces = stringParam.length - trueLength;
	while (numOfTrailingSpaces != 0){
		if(stringParam.charAt(trueLength) === ' '){
			stringParam = stringParam.setCharAt(trueLength, '');
			numOfTrailingSpaces--
		}
		else{
			return stringParam
		}
	}
	return stringParam
}


/*
==============+SUBSTRING+=================
substring() method can take 2 arguments:
Argument 1: from, Required. The position where to start the extraction. 
First character is at index 0.
Argument 2: to, Optional. The position (up to, but not including) 
where to end the extraction. If omitted, it extracts the rest of the string.
*/


//Test cases
console.log("OptimizedCode: " + optimizedRemovalOfSpacingFromString(str1, 13), " Mr%20John%20Smith")
console.log("RemoveSpacesFromString" + removeSpacesFromString(str1, 13), " Mr%20John%20Smith")













