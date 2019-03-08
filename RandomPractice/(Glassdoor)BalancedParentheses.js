/*

Check for balanced parentheses in an expression:

ex. 

string '{()}[]'

Solution #1: 
Use a stack and keep track of opening and closing braces 
within the stack. When you find a closing brace pop the top
and compare. If not matching return false

STACK is LIFO 

 */

function balancedParentheses(str){
	var map = {')':'(','}':'{',']':'['}
	var s = []
	for(var element of s){
		if("({[".indexOf(element) != -1){s.push(element)}
		else if(s.pop() != map[element]){return false}
	}
	return s.length === 0
}

var str = "[{()}]"
console.log(balancedParentheses(str))






