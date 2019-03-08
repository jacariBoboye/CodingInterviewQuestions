
/*
 Quick sort algorithm:
 
 https://github.com/raywenderlich/swift-algorithm-club/tree/master/Quicksort
 
 Worst case: o(n^2)
 Best case: nLog(n)
 
 
 */


func quicksort<T: Comparable>(_ a: [T]) -> [T] {
    
    guard a.count > 1 else { return a }
    
    let pivot = a[a.count/2]
    let less = a.filter { $0 < pivot }
    let equal = a.filter { $0 == pivot }
    let greater = a.filter { $0 > pivot }
    
    return quicksort(less) + equal + quicksort(greater)

}


let list = [ 10, 0, 3, 9, 2, 14, 8, 27, 1, 5, 8, -1, 26 ]

quicksort(list)
