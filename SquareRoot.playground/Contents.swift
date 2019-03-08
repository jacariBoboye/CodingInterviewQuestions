

//Find the square root of a number
// 4 should return 2

//Solution is use binary search until mid*mid == target
//https://leetcode.com/problems/sqrtx/discuss/25061/Python-binary-search-solution-(O(lgn))

func mySqrt(_ x: Int) -> Int {
    

    var lo = 0
    var hi = x/2
    var res = lo
    
    while(lo <= hi){
        
        let mid = lo + (hi-lo)/2; //This somehow prevents overflow
        
        if(mid * mid == x){print("MID: \(mid)"); return mid} //Checks to see if mid^2 equals the target number
        else if(mid * mid > num){hi = mid - 1}//Checks to see if mid^2 is greater
        else{lo = mid + 1; res = lo}//Checks to see if mid^2 is less and sets the closests val to the target number
    
    }

    return res - 1
    
}

print(squareRoot(8))
