/*
Find the most frequent integer in an array:
*/

var testArr = [1, 2, 3 ,4, 4,9, 1,0,5,4]

//o(n)

function checkForMostFrequentInt(testArrParam){

	var arr = {}
	var maxElement = {
  		index:[testArrParam[0]],
  		count:0,
	}
	for (var num of testArrParam){
		arr[num] = (num in arr) ?  arr[num] + 1 : 1
	}	

	for (var i = 0 ; i < testArrParam.length; i++){
		if(arr[i] > maxElement.count){
			maxElement.index = i
			maxElement.count = arr[i] 
		}
	}

	return maxElement
}

console.log(checkForMostFrequentInt(testArr))
