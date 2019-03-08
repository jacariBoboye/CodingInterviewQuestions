/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
 */

class tree{
	constructor(){
		this.root = null
	}
	insert(value){
		var newNode = new Node(value)
		if(this.root == null){this.root = newNode}
		else{this.insertNode(this.root,newNode)}
	}
	insertNode(currentNode, newNode){
		if(newNode.data < currentNode.data){
			if(currentNode.left == null){currentNode.left = newNode}
			else{this.insertNode(currentNode.left, newNode)}
		}
		else if(newNode.data > currentNode.data){
			if(currentNode.right == null){currentNode.right = newNode}
			else{this.insertNode(currentNode.right, newNode)}
		}
	}
	postOrderTrav(root){
		if(root != null){
			this.postOrderTrav(root.left)
			console.log(root.data)
			this.postOrderTrav(root.right)
		}
	}
	getRoot(){
		return this.root
	}
}
class Node{
	constructor(data){
		this.data = data
		this.left = null
		this.right = null
	}
}


var isBalanced = function(root) {
    if(root == null){return true}
    console.log("root: " + root.data + " right : " + root.right + "left: " + root.left)
    var leftDepth = findDepth(root.left)
	var rightDepth = findDepth(root.right)

	if (((Math.abs(leftDepth-rightDepth)) <= 1) && isBalanced(root.left) && isBalanced(root.right)){ //This ensures that every node is touched
		return true
		// return true
	}
	return false
};

function findDepth(root){
	if(root == null){return 0}
	var leftDepth = findDepth(root.left)
	var rightDepth = findDepth(root.right)
	return Math.max(leftDepth,rightDepth,0) + 1
}


var t = new tree()
t.insert(4)
t.insert(5)
t.insert(8)
t.insert(7)
t.insert(1)
t.insert(0)
t.insert(2)
t.insert(3)
t.insert(9)
t.insert(10)

var root = t.getRoot()
console.log("Root: " + root.data)
isBalanced(root)










