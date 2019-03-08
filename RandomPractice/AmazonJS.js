function retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude){
	var literatureText = literatureText.replace(/[.]/g,'').split(/\s/);
	var wordFreq = {}
	var max = []
	literatureText.forEach(function(word){
		if(wordsToExclude.indexOf(word) == -1){
			if(!wordFreq[word]){wordFreq[word] = 0;}
			wordFreq[word] += 1;
		}
	});
 	return getMaxFromObject(wordFreq);
}
function getMaxFromObject(o){
	var vals = [];
	var maxArr = []
	for(var i in o){
		vals.push(o[i])
	}
	var max = Math.max.apply(null, vals);
	for(var i in o){
		if(o[i] == max){maxArr.push(i)}
	}
	return maxArr
}

var wordsEx = []
console.log(retrieveMostFrequentlyUsedWords("I am the big the big bull.", wordsEx))



function reorderLines(logFileSize, logfile){
	var lexigraph = {}
	var numberical = []
	var final = []
	for(var i = 0; i < logFileSize; i++){
		var words = logfile[i].split(" ")
		for(var word of words){
			if(words.indexOf(word) == 1){
				if('0123456789'.indexOf(word[0]) !== -1){
					numberical.push(words)
				}
				else{
					lexigraph[word] = words
				}
			}
		}
	}
	var keys = Object.keys(lexigraph)
	keys.sort()
	for(var key of keys){final.push(lexigraph[key])}
	for(var arr of numberical){final.push(arr)}
	return final
}
var listOfStrings = ["a1 a", "b1 1", "b3 c"]

console.log(reorderLines(listOfStrings.length,listOfStrings))












