/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" 
are all valid but "(]" and "([)]" are not.

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var oppositeMatch = {"[":"]", "(":")", "{":"}",")":"(","]":"[","}":"{"}
    var queue = []
    for(var i=0;i<s.length;i++){
    	if(s[i] === "{" || s[i] === "[" || s[i] === "(" ){queue.push(s[i])}
    	else if(queue[queue.length-1] === oppositeMatch[s[i]]){
    		queue.splice(queue.length-1)
    	}
    	else{return false}
    }
	return (queue.length < 1) ? true : false
};

console.log(isValid("{[]}"))