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
	deleteDuplicates(){ //1(Current)   1(Next)   2
        if(this.head == null){return head}
		var current = this.head
		var next = current.next
		while(current.next){ 
			if(next.next == null){current.next = null}
			if(current.data == next.data){ next = next.next}		
			else{ 
				current.next = next
				current = current.next
			}
		}
		return this.head
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
ll.addElement(3)
ll.addElement(3)
ll.addElement(3)

ll.deleteDuplicates()

ll.printList()








