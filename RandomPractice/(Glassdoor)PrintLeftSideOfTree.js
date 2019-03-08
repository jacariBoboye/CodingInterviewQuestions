class tree{
	constructor(){
		this.root = null
	}
	function node(data){
		this.data = data
		this.left = null
		this.right = null
	}
	function addEdge(){

	}
	function addVertex(data,node){
		if(node == null){node = data}
		else if(node.data > data)(addVertex(data,node.left))
		else(addVertex(data,node.left))

	}
	function add(data){
		var node = new node(data)
		if(this.root == null){this.root = node}
		else{addVertex(data,this.root)}
	}

}