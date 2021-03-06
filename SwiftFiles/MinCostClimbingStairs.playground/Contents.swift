

/*
 
 Min Cost Climbing Stairs
 
 On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
 
 Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.
 
 Example 1:
 
 Input: cost = [10, 15, 20]
 Output: 15
 Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
 Example 2:
 
 Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 Output: 6
 Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
 
 */

class Solution {
    func minCostClimbingStairs(_ cost: [Int]) -> Int {
        var cost = cost
        for i in 2..<cost.count{cost[i] += min(cost[i-2], cost[i-1])}
        print("cost: \(cost)")
        return min(cost[cost.count-1], cost[cost.count-2])
    }
}

let s = Solution()
s.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])
