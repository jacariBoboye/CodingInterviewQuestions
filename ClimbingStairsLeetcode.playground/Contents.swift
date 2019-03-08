class Solution {
    func climbStairs(_ n: Int) -> Int {
        if(n < 2){return 1}
        var memo = [Int]()
        memo.append(1)
        memo.append(1)
        for i in 2...n{memo.append(memo[i-1] + memo[i-2])}
        return memo.last ?? memo[0]
    }
}

var s = Solution()
print(s.climbStairs(5))
