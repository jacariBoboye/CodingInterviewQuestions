

/*
 
 923. 3Sum With Multiplicity
 
 Given an integer array A, and an integer target, return the number of tuples i, j, k  such that i < j < k and A[i] + A[j] + A[k] == target.
 
 As the answer can be very large, return it modulo 10^9 + 7.
 
 
 
 Example 1:
 
 Input: A = [1,1,2,2,3,3,4,4,5,5], target = 8
 Output: 20
 Explanation:
 Enumerating by the values (A[i], A[j], A[k]):
 (1, 2, 5) occurs 8 times;
 (1, 3, 4) occurs 8 times;
 (2, 2, 4) occurs 2 times;
 (2, 3, 3) occurs 2 times.
 Example 2:
 
 Input: A = [1,1,2,2,2,2], target = 5
 Output: 12
 Explanation:
 A[i] = 1, A[j] = A[k] = 2 occurs 12 times:
 We choose one 1 from [1,1] in 2 ways,
 and two 2s from [2,2,2,2] in 6 ways.
 
 
 Note:
 
 3 <= A.length <= 3000
 0 <= A[i] <= 100
 0 <= target <= 300
 Seen this question in a real interview befor
 */


class Solution {
    func threeSumMulti(_ A: [Int], _ target: Int) -> Int {
        var A = A.sorted()
        let m = 1_000_000_007
        var res = 0
        for i in 0..<A.count - 2{
            var j = i+1
            var k = A.count-1
            while(j<k){
                if(A[j] + A[k] < target - A[i]){j+=1}
                else if(A[j] + A[k] > target - A[i]){k-=1}
                else{
                    if (A[j] == A[k]) {
                        res = (res + (k - j + 1) * (k - j) / 2) % m
                        break
                    }
                }
                var l = 1, r = 1
                while(j + l < k && A[j + l] == A[j]){l+=1} //Handles duplicates
                while(j < k - r && A[k - r] == A[k]){r+=1} //Handles duplicates
                j+=l
                k-=r
            }
        }
        return res
    }
}


var s = Solution()

s.threeSumMulti([1,1,2,2,2,2], 5)
