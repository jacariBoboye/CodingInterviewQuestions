/*
Find the KTH largest element in an array 

+  

Find the KTH smallest element in an array


*Non distinct elements* 

Solution #1: 
Sort the array and then return the kth element in the list

Solution #2:
Iterate through the array and push inside a Max Heap 
Then pop each element from the heap until you reach the kth term


Both of the above are nLogN


Solution #3:
Sort using selection or quicksort  - And then return to get o(n) best case
Randomize input to avoid o(n^2) worst case


 */



function kthSmallest(arr, pos){
	var q = PriorityQueue()

}

function kthLargest(arr, pos){


}

var arr = [1,2,3]
var pos = 1
kthSmallest(arr, pos)


