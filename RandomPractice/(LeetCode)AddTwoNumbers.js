/*
You are given two non-empty linked lists representing two
 non-negative integers. The digits are stored in reverse order
  and each of their nodes contain a single digit. Add the two 
  numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

class Node{
	constructor(element){
		this.element = element
		this.next = null
	}
}//ELEMENT VAL -- NODE NEXT
class LL{
	constructor(){
		this.head = null;
		this.size = 0;}
	addElement(element){
		var node = new Node(element)
		if(this.head == null){this.head = node} //If LL is empty make element the head
		else{
			var current = this.head;
			while(current.next){current = current.next} //Itearte over list until you find null
			current.next = node; // Once you get to the end set the new element to the end o(n)
		}
		this.size++;
	}
	printList(){
		if(this.head == null){return 0}
		var current = this.head
		while(current.next){
			console.log(current.element)
			current = current.next;
		}
	}
	grabHead(){
		return this.head
	}
}///


function addLinkedList(l1, l2){
	var head1 = l1.grabHead()
	var head2 = l2.grabHead()
	while(head1 || head2){
		head1.data = head1.data + head2.data
		console.log(head1)
		head1 = head1.next
		head2 = head2.next
	}
	return head1
}



var ll1 = new LL();
ll1.addElement(1);
ll1.addElement(2);
ll1.addElement(3);
ll1.addElement(4);
ll1.addElement(5);
// ll1.printList();

console.log("==========")

var ll2 = new LL();
ll2.addElement(1);
ll2.addElement(2);
ll2.addElement(3);
ll2.addElement(4);
ll2.addElement(5);
// ll2.printList();



console.log(addLinkedList(ll1,ll2))