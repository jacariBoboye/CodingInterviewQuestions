var str = "baab"
 function super_reduced_string(s){
    // Complete this function
    //Return empty: Even number of elements -> 
    /*
        1. If there are not an odd amount of one element return empty string
    */
    //Iterate through by two and find a match
    //Add to hashmap[key:Boolean]
    /*
        'False' : Even
        'True' : Odd
        1. Add. If not contained set to true. If contained flip the sign
        2. Once completed output false elements
    */
    var arr = []
    var stringBuilder = ""
    for (var char of s){
        if (!(char in arr)){
        	arr[char] = true
        }
        else{
        	arr[char] = !arr[char]
        }
    }
    for(var char of s){
    	if (arr[char] === true && stringBuilder.indexOf(char) == -1){
    		stringBuilder = stringBuilder + char
    	}
    } 
    if (stringBuilder === ""){return "Empty String"}
    return stringBuilder
}
//Test : "aabbbsscdaetvnassccc"

function removeConsequtiveCharsInPlace(s){
	/*
		Iteration o(N)
		//If neighbor is === skip to that index
		//If not save to string builder	
	*/
	var stringBuilder = ""

	for (var index = 0; index < s.length; index++){
		for(var pointer = index + 1; pointer < s.length; pointer++){
			if(s.charAt(index) === s.charAt(pointer)){
				index = pointer
				console.log("Count:" + index + " Found dup: " + s.charAt(index) + " " + s.charAt(pointer))
				break
			}
			else{
				console.log("Count:" + index + " No dup found: " + s.charAt(index) + " " + s.charAt(pointer))
				break
			}
		}
	}
	if (stringBuilder === ""){return "Empty String"}
	return stringBuilder
}

function charsInPlace(str){
	 for (var i = 1; i < str.length; i++) {
            if (str.charAt(i) == str.charAt(i-1)) {
                str = str.substring(0, i-1) + str.substring(i+1);
                i = 0;
            }
        }
        if (str.length == 0) {
        	return "Empty String"
        	console.log("Empty String")
        } else {
        	return str
        	console.log(stringBuilder)
        }
}

//console.log(super_reduced_string(str))
// console.log(removeConsequtiveCharsInPlace(str), "Expected: Empty String")

//console.log(charsInPlace(str))



