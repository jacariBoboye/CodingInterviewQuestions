
func flattenArray(nestedArray: [Any]) -> [Int]{
    
    var flattenedArray = [Int]()
    
    for element in nestedArray{
        print("Element: \(element)")
        if element is Int{flattenedArray.append(element as! Int)}
        else if element is [Any]{
            let recursionResult = flattenArray(nestedArray: element as! [Any])
            for num in recursionResult{flattenedArray.append(num)}
        }
    }
    return flattenedArray
}

let result = flattenArray(nestedArray: [1,[2]])
print("Result: \(result)")
