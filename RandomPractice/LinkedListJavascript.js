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
}///

var ll = new LL();
ll.addElement(1);
ll.addElement(2);
ll.addElement(3);
ll.addElement(4);
ll.addElement(5);
ll.printList();


