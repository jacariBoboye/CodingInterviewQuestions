//: Playground - noun: a place where people can play



class Solution {
    
    func combine(_ n: Int, _ k: Int) -> [[Int]] {
        var result = [[Int]]()
        var candidate = [Int]()
        backtracking(result: &result, candidate: &candidate, start: 1, n: n, k: k)
        return result
    }
    
    private func backtracking(result: inout [[Int]], candidate: inout [Int], start: Int, n: Int, k: Int) {
        if k == 0 {
            result.append(candidate)
            return
        }
        else if start > n {return}
        else{
            for i in start...n {
                candidate.append(i)
                backtracking(result: &result, candidate: &candidate, start: i + 1, n: n, k: k - 1)
                candidate.removeLast() // A stack of operations occurs where the first append is the last to go out. This is
            }
        }
    }
    
}

let s = Solution()

print(s.combine(4, 2))












//class Solution {
//
//    func combine(_ n: Int, _ k: Int) -> [[Int]] {
//
//        var resultArray = [[Int]]()
//        helper(resultArray: &resultArray, currentPos: 1, k: k, end: n)
//        print("resultArray: \(resultArray)")
//        return [[Int]]()
//
//    }
//
//    func helper(resultArray: inout [[Int]], currentPos: Int, k: Int, end: Int){
//
//        //Base case
//        if(currentPos > end){return}
//
//        for i in 1...end{
//            if(end >= ( i + currentPos)){
//                var tempArray = [Int]()
//                while(){}
//                tempArray.append(currentPos)
//                tempArray.append(currentPos + i)
//                resultArray.append(tempArray)
//            }
//        }
//
//        helper(resultArray: &resultArray, currentPos: currentPos + 1, k: k, end: end)
//
//    }
//
//}
//
//let s = Solution()
//
//s.combine(4, 1)
//s.combine(4, 2)
////s.combine(4, 3)
////s.combine(4, 4)
