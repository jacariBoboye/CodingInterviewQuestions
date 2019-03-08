/*
Computer the sum of natral numbers until N.
Add up every single number before you reach N
n=5
1+2+3+4 = 10
*/

function computeTheSum(n){
	if(n==0){return 0}
	return n + computeTheSum(n-1)

}


console.log(computeTheSum(5))