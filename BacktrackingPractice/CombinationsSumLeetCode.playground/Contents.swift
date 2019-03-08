//: Playground - noun: a place where people can play


/*
 REMMEBER THIS STRUCTURE!!!!
 BACKTRACKING FOLLOWS THIS STRUCTURE MOST TIMES
 */

class Solution {
    
    func combinationSum(_ nums: [Int], _ target: Int) -> [[Int]] {
        
        var resultArray = [[Int]]()
        var tempArray = [Int]()
        backtrack(&resultArray, tempList: &tempArray, nums: nums, remain: target, start: 0)
        return resultArray
        
    }
    
    private func backtrack(_ list: inout [[Int]], tempList: inout [Int], nums: [Int], remain: Int, start: Int){
        if(remain < 0){return}
        else if(remain == 0){list.append(tempList)}
        else{
            for i in start..<nums.count{
                /*Every iteration adds the current elem. We only advance when we get the unexpected result*/
                tempList.append(nums[i])
                
                /*In the event the remain is less than 0 than we return and remove that last element that didn't work*/
                backtrack(&list, tempList: &tempList, nums: nums, remain: remain - nums[i], start: i)
                
                /*Removes element that didnt get us our desired result*/
                tempList.removeLast()
            }
        }
    }
    
}

let s = Solution()

print(s.combinationSum([2,3,6,7], 7))












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
