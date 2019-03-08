/*
Merge two sorted linked lists and return it as a new list. The new list should be made by 
splicing together the nodes of the first two lists.
*/

/*
1. Having a fixed element within the first A LL and comparing that node
to every single element within the B LL  o(m*n)
2. Creating extra memory(Hashmap) and saving each node. The next loop
will compare each node in the B LL and see if it is contained TIME:o(A+B) Space(n) 
3. Increment both lists at one time. If you find the equidistance 
between the intersection and the two elements then you can increment at
the same time. All you have to is subtract len(A) - len(b) to get 
starting point. If A is larger then you swap the the head of each pointer.
Or create two seperate for loops closed within if statments. o(A+B)
*/


class linkedList{
	constructor(data){
		this.data = data
		this.next = null
	}
	linkedList(){
		this._length = 0
		this.head = null
	}
}




