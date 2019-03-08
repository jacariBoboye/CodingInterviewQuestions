/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class Node{
	constructor(data){
		this.data = data
		this.next = null
	}
}

class LinkedList{
	constructor(){
		this.head = null
		this.size = null
	}

	addElement(data){
		var newNode = new Node(data)
		if(this.head === null){this.head = newNode}
		else{
			var current = this.head
			while(current.next){
				current = current.next
			}
			current.next = newNode
		}
		this.size++
	}
	deleteDuplicates(){
		var current = this.head
		var next = current
		console.log(next)
		while(next.next){
			if(current.data == next.data){
				next = next.next
				current.next = next.next
			}		
			else{
				current = current.next
			}	
		}
	}
	printList(){
		var current = this.head
		console.log(this.head.data)
		while(current.next){
			current = current.next
			console.log(current.data)
		}
	}
}

var ll = new LinkedList
ll.addElement(1)
ll.addElement(1)
ll.addElement(2)
ll.addElement(2)
ll.addElement(2)
ll.addElement(2)
ll.addElement(3)
ll.addElement(3)

ll.deleteDuplicates()
ll.printList()








