class node{
	constructor(data){
		this.data = data
		this.next = null
	}
}

class linkedList{
	constructor(){
		this.head = null
		this.size = null
	}
	addElement(data){
		var newNode = new node(data)
		if(this.head === null){this.head = newNode}
		else{
			var current = this.head
			while(current.next){current = current.next}
			current.next = newNode
		}
		this.size++
	}
	printList(){
		var current = this.head
		console.log(current.data)
		while(current.next){
			// console.log(current.data)
			current = current.next
			console.log(current.data)
		}
	}
	reverseLinkedList(){
		if(this.head === null){return head}
		var prev = null
		var current = this.head
		var next = current.next

		while(current.next){
			current.next = prev //Have current next point to previous
			prev = current
			current = next
			next = current.next
		}
		current.next = prev //Have current next point to previous
		this.head = current
	}
}

var ll = new linkedList()

ll.addElement(1)
ll.addElement(2)
ll.addElement(3)
ll.addElement(4)
ll.addElement(5)
ll.reverseLinkedList()
ll.printList()


