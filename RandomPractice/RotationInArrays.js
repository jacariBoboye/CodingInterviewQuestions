/*
(Cycical)Given 2 integer arrays, determine of the 2nd array is a rotated version of the 1st array. 
Ex. Original Array A={1,2,3,5,6,7,8} Rotated Array B={5,6,7,8,1,2,3}
*/

var array1 = [1,2,3,5,6,7,8]
var array2 = [5,6,7,8,1,2,3]

function isRotation(aParam, bParam){
	//Array.concat -> Adds together two arrays
	var combinedArray = aParam.concat(aParam)  //Keeps duplicates
	if (combinedArray.join('').includes(bParam.join(''))){return true}
	return false
}

console.log(isRotation(array1,array2))