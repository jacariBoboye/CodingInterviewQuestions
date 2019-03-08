/*
Check Balanced: Implmenet a function to check if a binary tree is balanced. For the purposes
of this question, a balnced tree is defined to be true is defined to be a tree such that the 
heights of the two subtrees of any node never differ by more than one.

Specification: A well-formed binary tree is said to be "height-balanced" if (1) it is empty, or (2) its left and right
 children are height-balanced and the height of the left tree is within 1 of the height of the right tree.
 */

class tree{
	constructor(){
		this.root = null
	}
	insert(value){
		var newNode = new node(value)
		if(this.root == null){this.root = newNode}
		else{this.insertNode(this.root, newNode)}
	}
	insertNode(currentNode, newNode){
		if(newNode.data < currentNode.data){
			if(currentNode.left == null){node.left = newNode}
			else{this.insertNode(currentNode.left, newNode)}
		}
		else if(newNode.data > currentNode.data){
			if(currentNode.right == null){currentNode.right = newNode}
			else{this.insertNode(currentNode.right, newNode)}
		}
	}
	inOrderTrav(root){
		if(root != null){
			this.inOrderTrav(root.left)
			console.log(root.data)
			this.inOrderTrav(root.right)
		}
	}
	getRootNode(){
		return this.root
	}
	rightSubtreeCount(node, count){
		if(node != null){
			var c = count++
			console.log("Right: " + c)
			this.leftSubStreeCount(node.right, c)
		}
	}
	leftSubStreeCount(node, count){
		if(node != null){
			var c = count++
			console.log("Left: " + c)
			this.leftSubStreeCount(node.left, c)

		}
	}
	isBinarySearch(root){
		return this.leftSubStreeCount(root,0) === this.rightSubtreeCount(root,0)
	}
}

class node{
	constructor(data){
		this.data = data
		this.left = null
		this.right = null
	}
}


var bst = new tree()
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)
var root = bst.getRootNode()
bst.inOrderTrav(root)

console.log(bst.isBinarySearch(root))



