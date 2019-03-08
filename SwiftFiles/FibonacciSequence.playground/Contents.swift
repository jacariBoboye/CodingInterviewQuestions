
/*
 
 Find the sum from the nth integer
 
 */

//Recrusive
func fib(_ num: Int) -> Int{
    
    if(num < 2){return num}
    return fib(num - 2) + fib(num - 1)
    
}


//Memoization
func fib(num: Int) -> Int{
    
    var memo = [Int]()
    
    memo.append(0)
    memo.append(1)

    for i in 2...num{

        memo.append(memo[i-2] + memo[i-1])

    }
    
    return memo[num]
    
}

//
print(fib(4))
print(fib(num: 4))
