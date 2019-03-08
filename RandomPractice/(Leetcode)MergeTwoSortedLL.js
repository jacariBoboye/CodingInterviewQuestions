/*

Merge two sorted linked lists and return it as a new list. The 
new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

 */

class LinkedList{
	constructor(){
		this.head = null
		this.size = 0
	}
	function node(data){
		this.data = data
		this.next = null
	}
	function addNode(data){
		var node = new node(data)
		if(this.head == null){this.head = node}
		var current = this.head
		while(current.next){
			current = current.next
		}
		current.next = node
	}
}


function Merge(){

}


console.log("Hello")

