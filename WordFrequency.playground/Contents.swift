/*
 
 Count word frequency
 
 */


func wordFrequency(_ str: String) -> Int{
    
    if(str.count == 0){return 0}
    
    var tempCount = 1, maxCount = tempCount, charArray = Array(str)
    
    for index in 0..<charArray.count - 1{
    
        if(charArray[index] == charArray[index + 1]){
            tempCount+=1
            if(tempCount > maxCount){maxCount = tempCount}
        }else{
            tempCount = 1
        }
        
    }
    
    return maxCount
    
}

print(wordFrequency("abbcccc"))
