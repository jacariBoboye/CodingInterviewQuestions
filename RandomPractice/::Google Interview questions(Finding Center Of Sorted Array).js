//Google Interview questions

/*

Given a sorted array output the list of numbers in ascdening order based off their distance from the center

Center = 2.0
Array = [-20, -10, -5, 0, 5, 10, 20]
		[-20:22, -10:12, -5:7, 0:2, 2:0, 5:3, 10:8, 20:18]
 */
var testArray = [1,2,3,4,5,7]
var a = [1,2]
var center = 6

var findMid = function(s,target){
	if(s.length < 1){return 0}
	var index = s.length
	for(var i = s.length-1; i>=0; i--){
		if(s[i] > target){index = i}
	}
	return index
}

var orderInAscendingOrderByDistanceFromCenter = function(arr, center){
	//Find center or pos of where the center goes(Binary search)
	//Take left array and right array (Iterate through with o(n) and save back within buffer)
	//Insert into buffer based off which is element is less. You have to go in reverse when on the left
	var buffer = []
	var centerPos = findMid(arr,center)
	while()
}

console.log(orderInAscendingOrderByDistanceFromCenter(a,center))
console.log(orderInAscendingOrderByDistanceFromCenter(testArray,center))

// var binarySearchToCenter = function(s,target){
// 	var low = 0, high = s.length, mid = s.length/2
// 	while(low<high){
// 	}
// 	return mid
// }








