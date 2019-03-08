/*
LINKEDLIST
1. Define two seperate constructors: Node && LinkedList
:Node: 
Data- stores a value
Next-Points to the next node in the list
:SinglyList:
Length- Retrieves the number of nodes in a list
Head- Assign a node as the head of a list
Add(value)- adds a node to a list
SearchNodeAt(position)-Searches for a node at n-position in our list
Remove(position) - Removes a node from a list
*/

function Node(data){
	this.data = data
	this.next = null
}
function SinglyLinkedList(){
	this._length = 0
	this.head = null
}

//Defining function accessories (i.e -> .toString)
//(Function_Name).prototype.(Function_accessory_name)

SinglyLinkedList.prototype.add = function(value){
	var node = new Node(value), currentNode = this.head
	//If linkedlist empty then intialize Node
	if(!currentNode){
		this.head = node
		this._length++
		return node
	}
	//Increments to the very end of the linkedlist
	while(currentNode.next){currentNode = currentNode.next}

	//Take the currentNode and make its next point to the new node added
	currentNode.next = node
	//Make the changes reflect in the length count
	this._length++

	return node
}  
SinglyLinkedList.prototype.searchNodeAt = function(position){
	var currentNode = this.head,
	length = this._length,
	count = 1, //Assumption that there is at least one element(Not array)
    message = {failure: 'Failure. Hey you have an empty list.'}

    if(length === 0  || position < 1 || position > length){
    	throw new Error(message.failure)
    }

    while(count < position){
    	currentNode = currentNode.next
    	count++
    }
    return currentNode
}
SinglyLinkedList.prototype.remove = function(position){
	 var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

     if(position > length || length === 0 || position < 1){
     	throw new Error(message.failure)
     }

     else if(position === 1){
     	deletedNode = currentNode.data
     	this.head = currentNode.next
     	currentNode = null
     	this._length--
     	return deletedNode
     }
     else{
     	while(count < position){
     		beforeNodeToDelete = currentNode
     		nodeToDelete = currentNode.next
     		count++
     	}
     }
     beforeNodeToDelete = nodeToDelete.next
     deletedNode = nodeToDelete
     nodeToDelete = null
     this._length--

     return deletedNode
}

function populateLinkedListToTheCount(number){
	var tempLL = new SinglyLinkedList()
	for (var i =0; i< number; i++){
		tempLL.add(i)
	}
	return tempLL
}

var l1 = populateLinkedListToTheCount(5)
var l2 = populateLinkedListToTheCount(5)

function add_Together_LL(l1, l2){
	var len = l1._length, count = 1,carry = 0
	var LL1Head = l1.head, LL2Head = l2.head
	var resultLL = new SinglyLinkedList
    
	while(count <= len){
		var result = LL1Head.data + LL2Head.data
		LL1Head = LL1Head.next
		LL2Head = LL2Head.next

		if((result+carry)>9){
			resultLL.add((((result + carry) % 10) + carry))
			carry = 1

			count++

			continue
		}
		resultLL.add(result + carry)
		carry = 0
		count++

	}
	return resultLL
}

console.log(add_Together_LL(l1,l2))











