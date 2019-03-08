/*

Divide two integers: 

*/

var divide = function(dividend, divisor){
    var count = 0
    var i = 0
    if(divisor == 0 || dividend == 0){return 0}
    while(dividend !=0 && dividend > 0){
		dividend = Math.abs(dividend) - Math.abs(divisor)
		count++
		i++
	}
	return (dividend == 0)?count:count - 1
}


console.log(divide(1,-1))

