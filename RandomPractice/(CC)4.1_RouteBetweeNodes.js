/*

4.1: Route Between Nodes; Given a driected graph, desing an 
algorithm to find out whether there is a route between two nodes. 

 */

class graph{
	constructor(noOfVerts){
		this.noOfVerts = noOfVerts
		this.adjList = new Map()
	}
	addVert(v){
	    this.adjList.set(v,[])
	}
	addEdge(v,e){
		this.adjList.get(v).push(e);
		// this.adjList.get(e).push(v);
	}
	searchDFS(startingNode,target){
		var visited	= [];
		for(var i = 0; i < this.noOfVerts; i++){visited[i] = false}
		if(this.searchForPathUtil(startingNode,visited,target,false)){
			console.log("Path found")
		}
	}
	searchForPathUtil(v, visited, target){
		visited[v] = true
		console.log("V: " + v)
		if(target === v){
			console.log("Path Exists From Starting Node")
		}
		var get_neighbors = this.adjList.get(v)
		for(var verts in get_neighbors){
			var get_elem = get_neighbors[verts]
			if(!visited[get_elem]){this.searchForPathUtil(get_elem,visited,target)}
		}
	}
	searchBFS(startingNode,target){
		var q = [] //Intialize queue(FIFO) stack(LIFO)
		var visited = [] //Intialize visited boolean array
		for(var i=0;i<this.noOfVertices;i++){visited[i] = false} //Set favlse to the no of verts
        q.push(startingNode)//Push the startingNode
    	visited[startingNode] = true
    	while(q.length != 0){ //Iterate through until the list is empty
    		var getQueueElement = q.shift()
    		console.log(getQueueElement)
    		if(getQueueElement == target){console.log("Path exists")}
    		var get_list = this.adjList.get(getQueueElement)
    		for(var i in get_list){
    			var neigh = get_list[i]
    			if(!visited[neigh]){
    				visited[neigh] = true
    				q.push(neigh)
    			}
    		}
    	}
	}
}

var g = new graph(6)

var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for(var i =0; i<vertices.length; i++){g.addVert(vertices[i])}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('C', 'F');

console.log("DFS")
g.searchDFS('A','E');

console.log("BFS")
g.searchBFS('A','F')






