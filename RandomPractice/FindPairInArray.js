/*
Find pairs in an integer array whose sum is equal to 10 
(bonus: do it in linear time)
*/


var intArray = [1,5,3,4,5]
var sumGoal = 4


function findPairsEqualTo10(intArrayParam, sumGoalParam){ //o(n^2)
	console.log("findPairsEqualTo10")
	if (!(intArrayParam.length > 0)){return false}
	for(i = 0; i < intArrayParam.length; i++){
		for(j = i + 1; j < intArrayParam.length; j++){
			if(intArrayParam[i] + intArrayParam[j] === sumGoalParam){
			return intArrayParam[i] + " <---> " + intArrayParam[j] + " = " + sumGoalParam
			}
		}
	}
}

function findPairsEqualTo10LinearTime(intArrayParam, sumGoalParam){//o(n) //Dosesnt work for duplicates
	console.log("findPairsEqualTo10LinearTime")
	var arr = {}
	if (!(intArrayParam.length > 0)){return false}
	for(i = 0; i < intArrayParam.length; i++){
		arr[intArrayParam[i]] = true
	}
	for(i = 0; intArrayParam.length;i++){
		if(arr[sumGoalParam - intArrayParam[i]]){
			return sumGoalParam - intArrayParam[i] + " <---> " + intArrayParam[i] + " = " + sumGoalParam
		}
	}
	return arr
}

console.log(findPairsEqualTo10(intArray, sumGoal))
console.log(findPairsEqualTo10LinearTime(intArray, sumGoal))