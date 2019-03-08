


//: Playground - noun: a place where people can play

struct Business {
    let id: Int
    let reviewCount: Int
}

func mergeSortedBusinesses(trendy: [Int], favorite: [Int]) -> [Int] {
    
    var resultArray = [Int](), trendy = trendy, favorite = favorite
    var i = 0, j = 0
    while(i < trendy.count && j < favorite.count){
        if(trendy[i] > favorite[j]){
            resultArray.append(trendy.removeFirst())
            i+=1
        }
        else{
            resultArray.append(favorite.removeFirst())
            j+=1
        }
    }
    
    for x in 0..<trendy.count{resultArray.append(trendy[x])}
    for x in 0..<favorite.count{resultArray.append(favorite[x])}
    
    return resultArray
    
}


var arr = [900,700,400,100]
var arr2 = [100,50,25]

print(mergeSortedBusinesses(trendy: arr, favorite: arr2))

