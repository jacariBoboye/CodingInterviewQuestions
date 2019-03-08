/*
Rotate matrix: Given an image represented by an NxN matrix, where each pixel in the images 
in bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/


function initMatrix(n){

	var matrix = [] //In java script there is no native way to create multi-dimensional arrays
	var fill = 0

	for(i = 0; i < n; i++){
		matrix[i] = new Array(n); //Creates matrix by row and then stiches them together
		for(j = 0; j < n; j++){
			matrix[i][j] = fill++
		}
	}
	return matrix
}

function rotateMatrix(matrix){
	if(matrix.length == 0 || matrix.length != matrix[0].length) return false  //Can you explain this?
	   for (var i = 0; i < matrix.length / 2; i++) {  //Why is it divided by 2?
       	for (var j = 0; j < matrix.length - 1 - 2 * i; j++) {
            var tmp = matrix[j + i][matrix.length - 1 - i];
            matrix[j + i][matrix.length - 1 - i] = matrix[i][j + i];
            matrix[i][j + i] = matrix[matrix.length - 1 - j - i][i];
            matrix[matrix.length - 1 - j - i][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j - i];
            matrix[matrix.length - 1 - i][matrix.length - 1 - j - i] = tmp;
        }
    }
    return matrix
}
console.log("Initial")
console.log(initMatrix(4))


console.log("Reversed")
console.log(rotateMatrix(initMatrix(0)))


