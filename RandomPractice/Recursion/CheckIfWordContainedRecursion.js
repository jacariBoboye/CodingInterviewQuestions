/*
[Medium hard] A word is considered elfish if it contains the letters: e, l, and f in it, in any order. 
For example, we would say that the following words are elfish: whiteleaf, tasteful, unfriendly, and waffles, 
because they each contain those letters.
• Write a predicate function called elfish? that, given a word, tells us if that word is elfish or not.
• Write a more generalized predicate function called x-ish? that, given two words, returns true if all the letters
 of the first word are contained in the second.


 Predicate function means true or false(boolean)
*/

function checkIfWordExists(wordToSearch, target){
	if(wordToSearch.length < 1){return true}
	if(target.indexOf(wordToSearch[wordToSearch.length-1]) == -1){return false}
	return checkIfWordExists(wordToSearch.substring(0,[wordToSearch.length-1]),target)
}
var str = "12345"
console.log(str.indexOf(10))
console.log(checkIfWordExists("elf", "tasteful"))