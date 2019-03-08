//: Playground - noun: a place where people can play


/*
 REMMEBER THIS STRUCTURE!!!!
 BACKTRACKING FOLLOWS THIS STRUCTURE MOST TIMES
 */

class Solution {
    
    func combinationSum(_ nums: [Int], _ target: Int) -> [[Int]] {
        var resultArray = [[Int]]()
        var tempList = [Int]()
        backtrack(&resultArray, &tempList, nums: nums, start: 0)
        return resultArray
    }
    
    private func backtrack(_ list: inout [[Int]], _ tempList: inout [Int], nums: [Int], start: Int){
        list.append(tempList)
        for i in 0..<nums.count {
            tempList.append(nums[i])
            backtrack(&list, &tempList, nums: nums, start: start)
            tempList.removeLast()
        }
    }
    
}

let s = Solution()

print(s.combinationSum([2,3,6,7], 7))




//DUPLICATES: if(i > start && nums[i] == nums[i-1]) continue; // skip duplicates





/*
 Palindrome Partitioning : https://leetcode.com/problems/palindrome-partitioning/
 
 public List<List<String>> partition(String s) {
 List<List<String>> list = new ArrayList<>();
 backtrack(list, new ArrayList<>(), s, 0);
 return list;
 }
 
 public void backtrack(List<List<String>> list, List<String> tempList, String s, int start){
 if(start == s.length())
 list.add(new ArrayList<>(tempList));
 else{
 for(int i = start; i < s.length(); i++){
 if(isPalindrome(s, start, i)){
 tempList.add(s.substring(start, i + 1));
 backtrack(list, tempList, s, i + 1);
 tempList.remove(tempList.size() - 1);
 }
 }
 }
 }
 
 public boolean isPalindrome(String s, int low, int high){
 while(low < high)
 if(s.charAt(low++) != s.charAt(high--)) return false;
 return true;
 } 
 
 */




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
