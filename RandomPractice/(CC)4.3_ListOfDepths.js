/*
List of Depths: Given a binary tree, design an algoithm which create a linked list 
of all the nodes at each depth(e.g.,, if you have a tree with depth D, you;; have D linked lists)
 */

class LLNode{
	constructor(element){
		this.element = element
		this.next = null
	} 
}

class LL{
	constructor(){
		this.head = null 
		this.size ++
	}
	addElement(element){
		var node = new LLNode(element)
		if(this.head == null){this.head = node}
		else{
			var current = this.head
			while(current.next){current = current.next}
			current.next = node
		}
		this.size++
	}
}

class TreeNode{
	constructor(data){
		this.data = data
		this.left = null
		this.right = null
	}
}

class Tree{
	constructor(){
		this.root = null
	}
	preOrder(TreeNode, level){
		if(TreeNode == null){return null}
		console.log(TreeNode.data)
		console.log("Level: " + level)
		console.log("Level Values: " + TreeNode.data + "Left: " + TreeNode.left + "Right: " + TreeNode.right)
		level+=1
		this.preOrder(TreeNode.left, level)
		this.preOrder(TreeNode.right, level)
	}
	inOrder(TreeNode){
		if(TreeNode == null){return null}
		else{
			this.inOrder(TreeNode.left)
			console.log(TreeNode.data)
			this.inOrder(TreeNode.right)
		}
	}
	insert(element){
		var newNode = new TreeNode(element)
		if(this.root == null){this.root = newNode}
		else{this.insertNode(this.root, newNode)}
	}
	insertNode(node,newNode){
		if(newNode.data < node.data){
			if(node.left == null){node.left = newNode}
			else{this.insertNode(node.left, newNode)}
		}
		else if(newNode.data > node.data){
			if(node.right == null){node.right = newNode}
			else{this.insertNode(node.right, newNode)}
		}
	}
	getRootNode(){
		return this.root
	}
	enhancedPreOrderUtil(root){
		var arrayList = []
		var level = 0
		this.enhancedPreOrder(arrayList, level, root)
		return arrayList
	}
	enhancedPreOrder(arrayList, level, treeNode){
		if(treeNode == null){return null}
		var curList = new LL
		//THE IF STATMENT MAKES THE DESCISION OF CREATING A NEW LLNODE OR FETCHING THE OLD ONE. 
		if(arrayList.length === level){arrayList.push(curList)}
		else{curList = arrayList[level]}
		//PUSH NEW TREENODE TO LL
		curList.addElement(treeNode.data)
		this.enhancedPreOrder(arrayList, level++, treeNode.left)
		this.enhancedPreOrder(arrayList, level++, treeNode.right)
	}
}


//You could use a BFS AKA Level-Order Search or use a modified preordered search that takes
//into account the level of the depth


var bst = new Tree
bst.insert(10)
bst.insert(6)
bst.insert(8)
bst.insert(19)
bst.insert(11)
bst.insert(17)
var root = bst.getRootNode()
// bst.preOrder(root,0)
// bst.inOrder(root)

console.log("ROot: " + root.data)
var arrayList = bst.enhancedPreOrderUtil(root)

var level = 0
console.log("ArrayCount: " + arrayList.length)
//YOU NEED TO UPDATE THE For-looP
for(element of arrayList){
	var current = element.head
	var str = current.element
	while(current.next){
		current = current.next
		str = str + ", " + current.element
	}
	console.log("========="+ level +"========")
	console.log(str)
	level++
}






