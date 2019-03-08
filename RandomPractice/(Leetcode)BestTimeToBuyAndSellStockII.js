

function maxProfit(prices){
	var total = 0

	for(var i = 0; i < prices.length; i++){
        if (prices[i+1]>prices[i])
             total += prices[i+1]-prices[i];
	}
	return total
}

var prices = [1,9,2,3,4,5]
console.log(maxProfit(prices))