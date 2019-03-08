
/*
 
 239. Sliding Window Maximum

 
 Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.
 
 Example:
 
 Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
 Output: [3,3,5,5,6,7]
 Explanation:
 
 Window position                Max
 ---------------               -----
 [1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 
 Steps:
 1. Partioning array by k start and end
 2.
 
 */


//func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {
//    var forwardMax = Array(0..<nums.count), backwardMax = forwardMax, resultArray = [Int]()
//    forwardMax[0] = nums[0]
//    backwardMax[backwardMax.count-1] = nums[nums.count-1]
//    for i in 1..<nums.count{
//        forwardMax[i] = max(nums[i],forwardMax[i-1])
//        backwardMax[backwardMax.count - i] = max(nums[nums.count - i - 1], backwardMax[backwardMax.count-i])
//    }
//    print("ForwardMax: \(forwardMax)")
//    print("backwardMax: \(backwardMax)")
//    return resultArray
//}

func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int] {
    if(nums.isEmpty){return []}
    var resultArray = [Int]()
    resultArray.append(0)
    for i in 1..<k{ //O(N)
        if(nums[i] > nums[resultArray.last!]){resultArray[0] = i}
        else{resultArray[0] = resultArray.last!}
    }
    for i in k..<nums.count{//O(N)
        if(i - k < resultArray.last!){//Checks if the index is within our window
            if(nums[resultArray.last!] > nums[i]){resultArray.append(resultArray.last!)}
            else{resultArray.append(i)}
        }
        else{
            resultArray.append(i)
            for j in (i-k+1)...i{resultArray[resultArray.count-1] = (max(nums[resultArray.last!], nums[j])) == nums[resultArray.last!] ? resultArray.last! : j}//O(K)
        }
    }
    for i in 0..<resultArray.count{resultArray[i] = nums[resultArray[i]]}
    return resultArray
}

print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3), [3,3,5,5,6,7])
print(maxSlidingWindow([], 0), [])
print(maxSlidingWindow([1,-1], 1), [1,-1])
print(maxSlidingWindow([1,3,1,2,0,5], 3), [3,3,2,5])
print(maxSlidingWindow([9,10,9,-7,-4,-8,2,-6], 5), [10,10,9,2])

class Solution{
    /*
        This method basically partitions the array and only adds an element once the window has been
        exceed the bounds of the last dequed element.
     */
    func maxSlidingWindow(_ nums: [Int], _ k: Int) -> [Int]{
        var result = [Int](), deque = [Int]()
        for i in 0..<nums.count{
            /*While deque is not empty and the last element is within bounds of window*/
            while(!deque.isEmpty && deque.first! < i-k+1){deque.removeFirst()}
            /*While deque is not empty and the last element is the max within the window*/
            while(!deque.isEmpty && deque.last! < nums[i]){deque.removeLast()}
            /*One out of bounds of the window store the maximum which will be the first dequed element*/
            if(!deque.isEmpty && i >= k+1){result.append(nums[deque.first!])}
        }
        return result
    }
}

var s = Solution()
print(s.maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3), [3,3,5,6,7])
