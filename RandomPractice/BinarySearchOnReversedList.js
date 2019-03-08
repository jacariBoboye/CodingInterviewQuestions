/*
	Implement binary search in a rotated array (ex. {5,6,7,8,1,2,3})

	KEY PRINCIPLES: 
	1. Understand that wherever you divide a cyclical array one side will at least
	be ordered
	2. Assumption: That the array cannot be completely reversed and keeps some of 
	its original order
	3. 
*/

var rotatedList = [7,8,1,2,3,5,6]
var rotatedList2 = [5,6,7,1,2,3]
var rotatedList3 = [4,3,2,1]

var binarySearchOnRotated = function binarySearchOnRotatedArray(arr, targetElement){
	var len = arr.length
	var low = 0
	var mid = Math.floor(len/2)
	if(arr.length === 0){return -1}
	if(arr[mid] == targetElement){return targetElement}
	if(arr[0] < arr[mid] && arr[mid] < arr[len-1]){//Both sides are sorted
		if(targetElement >= arr[low] && targetElement <= arr[mid - 1]){//Element is on left side
			return binarySearch(arr.slice(0, mid),targetElement)
		}
		else if(targetElement >= arr[mid+1] && targetElement <= arr[len - 1]){//Element is on right side
			return binarySearch(arr.slice(mid+1, len),targetElement)
		}
	}
	else if(arr[0] < arr[mid]){ //Left side sorted
		if(targetElement >= arr[low] && targetElement <= arr[mid - 1]){//Element is on left side
			return binarySearch(arr.slice(0, mid),targetElement)
		}
		else{
			return binarySearchOnRotatedArray(arr.slice(mid+1, len),targetElement)}
		}
	else if(arr[mid] < arr[len-1]){ //Right side sorted
		if(targetElement >= arr[mid+1] && targetElement <= arr[len - 1]){//Element is on right side
			return binarySearch(arr.slice(mid+1, len),targetElement)
		}
		else{	
			return binarySearchOnRotatedArray(arr.slice(0, mid),targetElement)}
	}
}

console.log("rotatedList: " +binarySearchOnRotated(rotatedList, 5),5)
console.log("rotatedList: " +binarySearchOnRotated(rotatedList, 6),6)
console.log("rotatedList: " +binarySearchOnRotated(rotatedList, 7),7)
console.log("rotatedList: " +binarySearchOnRotated(rotatedList, 8),8)
console.log("rotatedList: " +binarySearchOnRotated(rotatedList, 1),1)
console.log("rotatedList: " +binarySearchOnRotated(rotatedList, 2),2)
console.log("rotatedList: " +binarySearchOnRotated(rotatedList, 3),3)
console.log("*************************************")
console.log("rotatedList2: " +binarySearchOnRotated(rotatedList2, 5),5)
console.log("rotatedList2: " +binarySearchOnRotated(rotatedList2, 6),6)
console.log("rotatedList2: " +binarySearchOnRotated(rotatedList2, 7),7)
console.log("rotatedList2: " +binarySearchOnRotated(rotatedList2, 1),1)
console.log("rotatedList2: " +binarySearchOnRotated(rotatedList2, 2),2)
console.log("rotatedList2: " +binarySearchOnRotated(rotatedList2, 3),3)
console.log("*************************************")
console.log("rotatedList3: " +binarySearchOnRotated(rotatedList3, 1),1)
console.log("rotatedList3: " +binarySearchOnRotated(rotatedList3, 2),2)
console.log("rotatedList3: " +binarySearchOnRotated(rotatedList3, 3),3)
console.log("rotatedList3: " +binarySearchOnRotated(rotatedList3, 4),4)

function binarySearch(arr, targetElement){
	var len = arr.length 
	var mid = Math.floor(len/2)
	if (arr.length === 0) {return -1;}
	if(arr[mid] === targetElement){return targetElement}
	else if(arr[mid] > targetElement){
		return binarySearch(arr.slice(0, mid),targetElement)}
	else{
		return binarySearch(arr.slice(mid,len),targetElement)}
}

function isInputOkay(arr){
	return true
}
