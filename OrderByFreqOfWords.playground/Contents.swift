

/*
 
 Given a string, sort it in decreasing order based on the frequency of characters.

 */



func frequencySort(_ s: String) -> String {
    
    var resultStr = ""
    var map = [String:Int]()
    
    for elem in s{
        if let val = map[String(elem)]{map[String(elem)] = val + 1}
        else{map[String(elem)] = 1}
    }
    
    let sortedArray = map.sorted{$0.value > $1.value}
    
    for (key, value) in sortedArray{for _ in 0..<value{resultStr += key}}
    
    return resultStr
    
}

var str = "tree"
var str1 = "Aabb"

print(frequencySort(str))
print(frequencySort(str1))


func frequencySort(s: String) -> String{
    
    
    
    return s
    
}



