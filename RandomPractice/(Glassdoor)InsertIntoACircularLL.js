/*

Insert a node into a circular linked list

 */


class circularLL{
	 constructor(){
		this.head = null
		this.size = 0
	}
	function Node(data){
		this.next = null
		this.data = data
	}

	function addElement(data){
		var newNode = new Node(data)
		if(this.head == null){this.head.data = newNode}
		else{
			var current = this.head
			while(current){
				current = current.next
			}
			current.next = newNode
		}

	}
}