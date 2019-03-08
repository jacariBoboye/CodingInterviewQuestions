/*
Implement binary search of a sorted array of integers
*/


var sortedArray = [1,2,3,4,5]

// function binarySearch(sortedArray, element){
// 	var len = sortedArray.length
// 	var mid = len 
// 	for(var i 0; i< len;i++){

// 	}
// }


function bsearch (Arr,value){
        var low  = 0 , high = Arr.length -1 ,mid ;      
        while (low <= high){
            mid = Math.floor((low+high)/2);     
            if(Arr[mid]==value) return mid ; 
            else if (Arr[mid]<value) low = mid+1;
            else high = mid-1;          
        }
        return -1 ;
}


//No need for low variable being that the arraay is being "sliced" or 
//cut every time
var binarySearch = function(arr, val) {
  var half = Math.floor(arr.length / 2);

  if (arr.length === 0) {
    return -1;
  }
  else if (arr[half] === val) {
    return val;
  }
  else if (val > arr[half]) {//Val is greater aka low is equal to mid aka remove all elements that are greater
    return binarySearch(arr.slice(half, arr.length), val);
  }
  else {//Val is lower than mid meaning high is mid aka remove all elements that are greater
    return binarySearch(arr.slice(0, half), val);
  }
}

console.log(binarySearch(sortedArray,2))
console.log(bsearch(sortedArray,8))
