

/*
 
 Given a list of non negative integers, arrange them such that
 they form the largest number.
 
 Example 1:
 
 Input: [10,2]
 Output: "210"
 Example 2:
 
 Input: [3,30,34,5,9]
 Output: "9534330"

 
 */


func largestNumber(_ nums: [Int]) -> String {
    
    var str = "", map = [String: [String]]()
    
    for i in 0..<nums.count{
        var tempArray = map[String(String(nums[i]).first!)] ?? []
        tempArray.append(String(nums[i]))
        map[String(String(nums[i]).first!)] = tempArray
    }
    
    print("MAP: \(map)")
    
    for i in stride(from: 9, to: 1, by: -1){
        if let joinedElement = map[String(i)]{
            str += joinedElement.joined()
        }
    }
    
    return str
    
}

print(largestNumber([30,34,5,9,3]))



