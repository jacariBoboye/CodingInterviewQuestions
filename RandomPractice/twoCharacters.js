/* TWO CHARACTERS
String  always consists of two distinct alternating characters. For example, if string 's two distinct characters are x and y, then t could be xyxyx or yxyxy but not xxyy or xyyx.

You can convert some string  to string  by deleting characters from . When you delete a character from , you must delete all occurrences of it in . For example, if  abaacdabd and you delete the character a, then the string becomes bcdbd.

Given , convert it to the longest possible string . Then print the length of string  on a new line; if no string  can be formed from , print  instead.

Input Format

The first line contains a single integer denoting the length of . 
The second line contains string .

Constraints


 only contains lowercase English alphabetic letters (i.e., a to z).
Output Format

Print a single integer denoting the maximum length of  for the given ; if it is not possible to form string , print instead.

Sample Input

10
beabeefeab
Sample Output

5
Explanation

The characters present in  are a, b, e, and f. This means that  must consist of two of those characters.

If we delete e and f, the resulting string is babab. This is a valid  as there are only two distinct characters (a and b), and they are alternating within the string.

If we delete a and f, the resulting string is bebeeeb. This is not a valid string  because there are three consecutive e's present.

If we delete only e, the resulting string is babfab. This is not a valid string  because it contains three distinct characters.

Thus, we print the length of babab, which is , as our answer.
*/


/*

True: 
1. Two distinct characters
2. Alternatating: 1. Equal number 2. One away


Operations: 
1. Create a Hashmap 2. Load up values [char : char.count] 
3. Check for highest amount. Check if one away or if equal amount

False: 
1. If s.length !> 1
2. If only one character 

*/

var str = "beabeefeab"

function twoWords(s){
	var map = {}
	var highest = 0
	for (var char of s){
		map[char] = (char in map) ? map[char] + 1 : 1;
		highest = (map[char] > highest) ? map[char] : highest
	}
	console.log("Highest : " + highest)
	return map
}

console.log(twoWords(str))

























