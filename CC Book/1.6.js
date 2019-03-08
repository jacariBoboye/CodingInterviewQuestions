/*Question 1.6: 
String compression: Implement a method to perfrom basic string compresiion using 
the counts of repeated characters. For example, the string 'aabcccccaaa' would become a2b1c5a3. If the "compressed"
string would not become smaller than the original string, your method should return the orignial string. You can assume
the string has only uppercase and lowercase letters(a - z).
*/


var uncompressedString = "aabcccccaaa"

/*
	o(N^2) solution
	Brute force solution
*/

//Another way to make this less redudant would be to add a check to whether the new string will be shorter or longer 
//than the original
/*

    // Better to use array to append and join string at end then concat with +
    // Strings are immutable in JS, which means each concat is approx O(n^2)
*/
function stringCompressionMethodBruteForce(stringParam){


	var newStringBuilder = ""

	for (i = 0; i < stringParam.length; i++){
		var count = 0
		for (j = i; j < stringParam.length; j++){

			if(stringParam.charAt(i) === stringParam.charAt(j)){
				console.log("There it goest " + i + " " + j)
				count++
				if (j == stringParam.length - 1){
					newStringBuilder = newStringBuilder + stringParam.charAt(i) + count
					return newStringBuilder
				}
			}
			else{
				newStringBuilder = newStringBuilder + stringParam.charAt(i) + count
				console.log("newStringBuilder: " + newStringBuilder)
				i = j - 1
				break
			}

		}
	}
	//Use terenary to determine which is larger
	return newStringBuilder
}




console.log(stringCompressionMethodBruteForce(uncompressedString), "Expected: " + "a2b1c5a3")