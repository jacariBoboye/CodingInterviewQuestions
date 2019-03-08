/*

Implementation of Binary Search Tree in Javascript
- https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/


1. Implement node class
2. Initalize root of tree to null

 */


class Node{

	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}

}

class binarySearchTree{
	constructor(){
		this.root = null;
	}
    insert(val){
    	var newNode = new Node(val);
    	if(this.root === null){
    		this.root = newNode}
    	else{
    		this.insertData(this.root, newNode)
    	}
    }    
	insertData(currentNode, newNode){
		if(newNode.data < currentNode.data){
			if(currentNode.left === null){currentNode.left = newNode}
			else{insertData(currentNode.left, newNode)}
		}
		else{
			if(currentNode.right === null){currentNode.right = newNode}
			else{this.insertData(currentNode.right, newNode)}
		}
	}
	inOrder(node){
		if(node != null){
			this.inOrder(node.left)
			console.log(node.data)
			this.inOrder(node.right)
		}
	}
	preOrder(node){
		if(node != null){
			console.log(node.data)
			this.inOrder(node.left)
			this.inOrder(node.right)
		}
	}
	postOrder(node){
		if(node != null){
			this.inOrder(node.left)
			this.inOrder(node.right)
			console.log(node.data)

		}
	}
	getRootNode(){
		return this.root
	}
	search(node, data){
		if(node === null){console.log("Not Found")} //If child not found return null
		else if(data < node.data){this.search(node.left, data)} //If less traverse the left of the tree
		else if(data > node.data){this.search(node.right, data)} //If more traverse the right of the tree
		else{console.log("Found")} //If equal then return node
	}
}

var bst = new binarySearchTree()

bst.insert('A')
bst.insert('B')
bst.insert('C')
bst.insert('D')
bst.insert('E')
bst.insert('F')
bst.insert('G')
var root = bst.getRootNode();

console.log("Pre Order")
bst.preOrder(root)

console.log("In Order")
bst.inOrder(root)

console.log("Post Order")
bst.postOrder(root)

console.log("Search")
bst.search(root, 'G')



