

/*
 
 30. Substring with Concatenation of All Words
 
 Input:
 s = "barfoothefoobarman",
 words = ["foo","bar"]
 Output: [0,9]
 Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
 The output order does not matter, returning [9,0] is fine too.
 Example 2:
 
 Input:
 s = "wordgoodstudentgoodword",
 words = ["word","student"]
 Output: []
 
 
 */

func findSubstring(_ s: String, _ words: [String]) -> [Int] {
    
    
    return []
    
}



//Create a hashmap and add every single combination within the map
/*
 Key -> Will be the combo
 Value -> starting index
 
 1. Add every combination to map and save the starting index of that substring(n^n)
 2. Run through in oN over the words array and append index to result array
 3. Return resultArray
 */
