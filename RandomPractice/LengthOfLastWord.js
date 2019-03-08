

//Example:
/*
Input: "Hello World"
Output: 5
*/

var lengthOfLastWord = function(s){

	if(s.length < 1){return 0}
	var flag = false
	var count = 0
	for(var c of s.split("").reverse()){
		console.log("Hello: " + c )
		if(c != " "){
			flag = true
			count++
		}
		else if((c == " ") && (flag)){
			break
		}
	}
	return count
}

console.log(lengthOfLastWord("a"))