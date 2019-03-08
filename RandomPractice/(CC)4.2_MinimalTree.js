/*
Minimal Tree: Given a sorted(increasing order) array with unique integer elements, write 
an algorithm to create a binary search tree with minaml height.
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
}

class node{
	constructor(data){
		this.data = data
		this.left = null
		this.right = null
	}
}

var bst = new tree 

bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)

var root = bst.getRootNode()

bst.inOrderTrav(root)






