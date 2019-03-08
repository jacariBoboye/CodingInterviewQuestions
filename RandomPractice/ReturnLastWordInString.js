var lengthOfLastWord = function(s) {
    if(s.length<1){return 0}
    var lengthOfLastWord = 0
    var charFound = false
    for (var i = s.length-1; i>0; i--){
        if(s[i] != ' '){
            charFound = true
            lengthOfLastWord++
        }
        else if (charFound){return lengthOfLastWord}   
        
    }
    return 0
};


var str = "chicken noodle"
console.log(lengthOfLastWord(str))