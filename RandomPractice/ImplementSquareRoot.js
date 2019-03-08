/*
Implement squareroot function

Key principles:
1. Know the definiton of sqaure root?: ... a value that can be multiplied by itself 
to give the original number.
2. Newton's square root method method(Iteative method that runs operations and compares the
result of that operation by squaring the result and looking for a margin of epsilon(
smaller the better - .00001) to determine accuracy to inputted number)
3. Binary search to find number between 0 and N that will compute to less that or equal to .0001
*/

function findSquareRootOfNumberUsingNewtonMethod(S){
	var epsilon = .0001

	function improve(est){//Evaluation after newtons method
		return((est + (S/est))/2)
	}

	function isGoodEnough(est){//Square the number subtract today num and then comapre to epsilon
		if(Math.abs(Math.pow(est,2) - S) < epsilon){return true}
		return false
	}

	function iter(est){//Comapre with epsilon. If good return number if not call newton's method
		if(isGoodEnough(est)){
			return est
		}
		else{iter(improve(est))}
	}//Avoid using this method on inteview
}

function findSquareRootOfNumberUsingBinarySearch(targetElement){//Using binary search to iterate through number less that or equal to the inputted number
	var epsilon = .00000001
	var high = targetElement
	var low = 0

  	for(var i = 0 ; i < 1000 ; i++){
		var mid = (high+low)/2
      	if((Math.abs(Math.pow(mid,2) - targetElement)) < epsilon) return mid
		if((mid*mid) > targetElement){
			high = mid
		}
		else{
			low = mid
		}
	}
}

console.log(findSquareRootOfNumberUsingBinarySearch(20))