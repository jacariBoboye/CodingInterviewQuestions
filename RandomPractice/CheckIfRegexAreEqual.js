/*
Implement regular expression matching with support for '.' and '*'.

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
*/

var str1 = "aabb"
var str2 = "a*b*"

// function isEqual(str1, regexString){
// 	if(str1.length < 1 || regexString.length < 1){return false}

// 	for(var i=0; i<regexString.length;i++){
// 		if(regexString[i] === '*' || regexString[i] === '.'){
// 			console.log("Break because regex found")
// 			break}
// 		if(i == regexString.length-1){
// 			console.log("No regex found. Compare:")
// 			return str1 === regexString}
// 	} 
// 	var index1 = 0, index2 = 0
// 	while(index1 < str1.length){
// 		if(str1[index1] === regexString[index2]){ //Two chars are the same
// 			index1++
// 			index2++
// 		}
// 		else if(regexString[index2] === '*'){ //* found 
// 			var previousElement = (regexString[index2-1] === undefined) ? undefined : regexString[index2-1]
// 			console.log("previousElement: " + previousElement)
// 			if(previousElement === '.'){
// 				//countInstancesOf str1[index]
// 			}
// 			else if(previousElement === str1[index1]){
// 				//countInstancesOf str1[index]
// 			}
// 			else{
// 				index1++
// 				index2++
// 			}
// 			//Count instances of consecutive elements
// 			//Once found advance index1 until next element 
// 			//Once found advance index2 beyond 2 places
// 			//
// 		}
// 		else if(regexString[index2] === '.'){ //. found simply progress
// 			index1++
// 			index2++
// 		}
// 		else{return false}
// 	}

// 	return true
// }
// console.log(str1[-1] === undefined)
// console.log(isEqual(str1,str2))


function isEqualUsingDynamic(str1, regexString){
	if(str1 === null  || regexString === null){return false}
	var dp = [[]]
	for(var i=0;i<str1.length+1;i++){//Populates 2d with false values
		dp[i] = new Array(regexString.length+1).fill(false)
	}
	dp[0][0] = true
	for(var i=1;i<regexString.length+1;i++){
		if(regexString[i-1] === '*'){
			dp[0][i] = dp[0][i-2]
			//Accounts for a*b* scenraio that could result in empty string
		}
	}
	for(var i = 1; i < dp.length;i++){
		for(var j = 1; j< dp[0].length;j++){
			if(regexString[j] == '.' || str1[j] == regexString[i]){
				dp[i][j] = dp[i-1][j-1]
			}
			if(regexString[j] == '*'){
				dp[i][j] = dp[i][j-2]
				if(str1[i-1] === regexString[i-2] || regexString[i-2] === '.'){
					dp[i][j] = dp[i][j]  //REVISIT
                } else {
                	dp[i+1][j+1] = (dp[i+1][j] || dp[i][j+1] || dp[i+1][j-1]) //REVISIT
                }
			}
			else{dp[i][j] = false}
		}
	}
	console.log(dp)
	return dp[str1.length][regexString.length];
}

console.log(isEqualUsingDynamic(str1,str2))