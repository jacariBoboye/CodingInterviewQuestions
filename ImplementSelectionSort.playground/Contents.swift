
/*
 Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 
 Example 1:
 
 Input: [3,2,1,5,6,4] and k = 2
 Output: 5
 Example 2:
 
 Input: [3,2,3,1,2,4,5,5,6] and k = 4
 Output: 4
 
 */


func findKthLargest(_ nums: [Int], _ k: Int) -> Int {
    return nums.sorted()[(nums.count) - k]
}


let a = [3,2,1,5,6,4] //1,2,3,4,5,6
let kthElem = 2

print(findKthLargest(a, kthElem))
