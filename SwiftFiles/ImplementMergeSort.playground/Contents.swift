
/*
    Implement Merge Sort
 
 Merge sort is the divide and conquer algorithm that involves breaking down an array to its smallest compisiotn and then bubbling back up by combining the seperated arrays into an ordered list.
 
 
 example:
 
 var array = [8,4,9,4,3,5,1,3]
 
 [8,4] | [9,4] | [3,5] | [1,3]
 
 [4,8] | [4,9] | [3,5] | [1,3]
 
 [4,4,8,9] | [1,3,3,5]
 
 [1,3,3,4,5]  * The right array has ended
 
 [1,3,3,4] + left(4,8,9) + right(empty)
 
 [1,3,3,4,4,8,9]
 
 */


func mergeSort(_ arrayOfInt: [Int]) -> [Int]{
    
    guard arrayOfInt.count > 1 else{return arrayOfInt}
    
    let left = Array(arrayOfInt[0..<(arrayOfInt.count/2)])
    let right = Array(arrayOfInt[arrayOfInt.count/2..<arrayOfInt.count])
    
    return merge(left: mergeSort(left), right: mergeSort(right))
    
}

func merge(left: [Int], right: [Int]) -> [Int]{
    
    var resultArray = [Int]()
    var left = left
    var right = right
    
    while(!left.isEmpty && !right.isEmpty){
        if(left.first! < right.first!){resultArray.append(left.removeFirst())}
        else{resultArray.append(right.removeFirst())}
    }
    
    return resultArray + left + right
    
}

print("Mergesort: \(mergeSort([1,5,3,5,1]))")


