/*
Find the common elements of 2 int arrays
*/


var a1 = [1,2,3]
var a2 = [1,4,5]


function commonElementWithinArrays(aParam, bParam){
	for(var i = 0; i< bParam.length; i++){
		if(bParam.includes(aParam[i])){
			console.log("Common Element-> " + aParam[i])
		}
	}
}

function find_Common_Elements_Using_Filter(aParam, bParam){
	return aParam.filter((n) => bParam.includes(n))
}

console.log(commonElementWithinArrays(a1,a2))
console.log(find_Common_Elements_Using_Filter(a1,a2))