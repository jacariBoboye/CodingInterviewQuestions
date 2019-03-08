/*

	Checking for Anagram

 */

function isAnagram(str1, str2){

	if(str1.length != str2.length){return false}
	var str1 = str1.toLowerCase().split('').sort().join('').trim();
	var str2 = str2.toLowerCase().split('').sort().join('').trim();

	if(str1 === str2){return true}
	return false
}


var str1 = "peep"
var str2 = "peep"
console.log(isAnagram(str1,str2))