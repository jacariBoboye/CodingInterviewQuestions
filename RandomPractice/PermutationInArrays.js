/*
Check for permutation in array
*/


var array1 = [1,2,3,5,6,7,8]
var array2 = [5,6,7,8,1,2,3]

function checkPermInArrays(array1Param, array2Param){
	return isEqual(array1Param, array2Param)
}

//log(n) -> Sort and then compare
function isEqual(array1Param, array2Param){
	//Check Length
	//Check the type of each
	//Check the values of each
	if (array1Param.Length !== array2Param.Length){return false}

	//Slice: So it doesnt effect the original
	//Sort: Orders the array
	//Join: Combines the array within a stiring

	var a1 = array1Param.slice().sort().join(",");
	var a2 = array2Param.slice().sort().join(",");
	return a1 === a2
}



console.log(checkPermInArrays(array1,array2))



