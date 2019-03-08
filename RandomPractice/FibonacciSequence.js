/*
	Fibonacci Sequence: 
	The Fibonacci sequence is a series of numbers where a number is found by adding up the two numbers before it. 
	Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth. Written as a rule, the
	 expression is f(n) = n-1 + n-2.....
*/



//return the nth term of the fibonacci sequence: https://www.youtube.com/watch?v=zg-ddPbzcKM

 var nthTerm = 8
 //console.log("Value: " + fibonacciSequenceRecursion(nthTerm))

 function fibonacciSequenceRecursion(n){ //o(2^n)
     /*
During recurssion you are creating a tree of returns and values.
As calls occur it incrases the height of the tree.
When complete the compiler takes the evaluation of each call and adds them together. 

 */
 	if(n <= 0){
 		return 0}
 	if(n == 1){
 		return 1}

 	return fibonacciSequence(n - 1, "Left") + fibonacciSequence(n - 2, "Right")
 	
 }

function fibonacciSequenceIteratively(n){
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    var fibSequence = []
    for(var i = 0; i <= n; i++){
        if(fibSequence.length  == 0){fibSequence[i] = 0;continue;}
        if(fibSequence.length == 1){fibSequence[i] = 1;continue;}
        fibSequence[i] = fibSequence[i-2] + fibSequence[i-1]
    }
    return fibSequence[fibSequence.length-1]
}

console.log(fibonacciSequenceIteratively(nthTerm))

/*
Two versions of dyanmic programming: 
1. Top Down: Where you recursively tackle the problem. So in the fibonacci example you use a stack trace to 
add the chain of funciton call results. This method can get expensive with larger values. With the top down 
approach you can eliminate operations that you have already done and cache them within a data structure. 

2. Bottom up; Iteraive approach. Similar implmentation but you store the results within an array and add the previously 
saved elements together to get (n).
*/
function fibonacciSequenceDynamicTOPDOWN(n, memo){
    if(!memo[n] === null){return memo}
    if (n <= 0){return 0}
    if (n == 1){return 1}
    var result = fibonacciSequenceDynamicTOPDOWN(n-2,memo) + fibonacciSequenceDynamicTOPDOWN(n-1,memo)
    memo[n] = result
    return result
}
function fibDynamicBottomUp(n){
    var fibArr = []
    fibArr[1] = 1
    fibArr[2] = 1

    for(var i = 3 ; i < n+1; i++){//TODO: Determine Why you needed to add plus 1?
        fibArr[i] = fibArr[i-1] + fibArr[i-2]  
    }
    return fibArr[fibArr.length-1]

}


var array = {}
console.log(fibonacciSequenceDynamicTOPDOWN(8,array))
console.log("fibDynamicBottomUp: " + fibDynamicBottomUp(8))





















