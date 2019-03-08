/*
Write a multiply function that multiples 2 integers without using *
*/


var constantInt = 1
var multiple = 0


function multiply(constantIntParam, multipleParam){ //oN //Detrmine dedge cases Revist
	if(constantIntParam ===0 || multipleParam === 0){return 0}
	var result = 0
	for(var i = 0; i < multipleParam; i++){
		result = result+constantIntParam
	}
	return result
}

console.log(multiply(constantInt,multiple))


//Russian Peasent Method

function multiplyRSM(x,r){

	//Half the element on the left until you reach 1
	//Double the element on the right until you have an equal number of elements on boths
	//Eliminate rows that share an even elements
	//Add together elements on the right hand side that are not crossed out

}