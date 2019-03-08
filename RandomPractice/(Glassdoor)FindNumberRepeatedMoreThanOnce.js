/*

Find number repeated more than once in an array with constant space  


 */

/*

Solution #1:
1. Iterate in o(n^2)
2. Slow PTR compares with fast PTR



Solution #2:
1. Sort
2. Compare neighbors

 */


var arr = [0,1,2,0]


//o(n^2)
var repeatingNumber = function(a){

	/*Validate field*/
	if(a.length < 1 && a != null){return 0}

	/*For loop*/
	for(var i = 0 ; i < a.length; i++){
		for(var j = i+1; j < a.length; j++){
			if(a[i] === a[j]){return true}
		}
	}
	return false
}

console.log(repeatingNumber(arr))


//o((n * nlogn) +  n)
var repeatingNumber = function(a){

	/*Validate field*/
	if(a.length < 1 && a != null){return 0}

	a.sort()

	for(var i = 0; i < a.length-1; i++){
		var j = i + 1
		if(a[i] === a[j]){return true}
	}

	return false
    
}

console.log(repeatingNumber(arr))















