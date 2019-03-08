
import UIKit

/*
 
 Check if palindrome
 
 A string is said to be palindrome if reverse of the string is same as string. For example, “abba” is palindrome, but “abbc” is not palindrome.
 
 
 */

//O(N^2)
func checkIfPalindrome(_ s: String) -> Bool{
    
    if(s.count < 2){return false}
    
    let reversedString = Array(s.reversed())
    
    return Array(s) == reversedString
    
}

//O(N))
func ifPalindrome(_ s: String) -> Bool{
    
    var input = s
    let unsafeChars = CharacterSet.alphanumerics.inverted
    input  = input.components(separatedBy: unsafeChars).joined(separator: "").lowercased()
    let inputArray = Array(input)

    var i = 0
    var j = inputArray.count-1
    
    while(i < j){
        
        if(inputArray[i] != inputArray[j]){return false}
        
        i+=1
        j-=1
        
    }
    
    return true
    
}


var x = "1abba1"

print(ifPalindrome(x))
