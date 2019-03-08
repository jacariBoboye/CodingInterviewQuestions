/*
Invert a binary 

Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

 */


class tree{
	constructor(){
		this.root = null
	}
	insert(element){
		var newNode = new node(element)
		if(this.root === null){this.root = newNode}
		else{this.insertNode(newNode, this.root)}
	}
	insertNode(newNode, node){
		if(newNode.data < node.data){
			if(node.left === null){node.left = newNode}
			else{this.insertNode(newNode, node.left)}
		}
		else if(newNode.data > node.data){
			if(node.right === null){node.right = newNode}
			else{this.insertNode(newNode, node.right)}
		}
	}
	inOrder(node){
		if(node !== null){
			this.inOrder(node.left)
			console.log(node.data)
			this.inOrder(node.right)
		}
	}
	getRootNode(){
		return this.root
	}
	invertBST(root){
		if(root === null){return null}
		var left = this.invertBST(root.left) //Creates stack of inverse left side
		var right = this.invertBST(root.right) //Creates stack of inverse right side
		//Set the new roots left and right and then return
		root.left = right 
		root.right = left
		return root
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
bst.insert(0)
bst.insert(-1)
bst.insert(3)

var root = bst.getRootNode()
bst.invertBST(root)
bst.inOrder(root)











