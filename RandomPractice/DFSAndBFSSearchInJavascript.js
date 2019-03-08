/*
https://medium.com/basecs/finding-the-shortest-path-with-a-little-help-from-dijkstra-613149fbdc8e
https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d
https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7
https://medium.com/basecs/the-trials-and-tribulations-of-the-traveling-salesman-56048d6709d
https://medium.com/basecs/from-theory-to-practice-representing-graphs-cfd782c5be38
https://medium.com/basecs/speeding-up-the-traveling-salesman-using-dynamic-programming-b76d7552e8dd

https://www.geeksforgeeks.org/implementation-graph-javascript/

 */



//Create a graph class
//

class Graph{
	constructor(noOfVertices){
		//noOfVertices is used for DFS and BFS
		this.noOfVertices = noOfVertices //Store the number of connections(vertices)
		this.AdjList = new Map() //List of neighbors for a particular vertext
	}
	addVertex(v){
	    this.AdjList.set(v,[])
	}
	addEdge(v,w){
		this.AdjList.get(v).push(w);
		this.AdjList.get(w).push(v); //Here for unidirection
	}
	printGraph(){
		var get_keys = this.AdjList.keys()
		for(var i of get_keys){
			var get_values = this.AdjList.get(i);
			var conc = "";

			for(var j of get_values){
				conc += j + " "
			}
			console.log(i + " -> " + conc);
		}
	}
	dfs(startingNode){
		var visited	= [];
	    for (var i = 0; i < this.noOfVertices; i++){visited[i] = false} //Populate a visited boolean area that correpsondese with each vertex
	    this.dfsUtil(startingNode, visited)//Where the magic happens
	}
	dfsUtil(v, visited){ //Uses recurive stack
		visited[v] = true
		console.log(v)
		var get_neighbors = this.AdjList.get(v) //Grabs all neighbors
		for(var index in get_neighbors){
			var get_elem = get_neighbors[index] //Gets the element at [i] index
			if(!visited[get_elem]){
				this.dfsUtil(get_elem,visited) //Recursively call function again with neighbor and visited array
			}
		}
	}
	bfs(startingNode){
		var q = [] //Intialize queue(FIFO) stack(LIFO)
		var visited = [] //Intialize visited boolean array
		for(var i=0;i<this.noOfVertices;i++){visited[i] = false} //Set favlse to the no of verts
        q.push(startingNode)//Push the startingNode
    	visited[startingNode] = true
    	while(q.length != 0){ //Iterate through until the list is empty
    		var getQueueElement = q.shift()
    		console.log(getQueueElement)
    		var get_list = this.AdjList.get(getQueueElement)
    		for(var i in get_list){
    			var neigh = get_list[i]
    			if(!visited[neigh]){
    				visited[neigh] = true
    				q.push(neigh)
    			}
    		}
    	}
	}

	/*
		BFS Steps
		1. Intialize(visited and queue) and set visited to false
		2. Start 
		3. Declare while loop 
		4. Pop top element and then visit neighbors if it hasnt been visited

	 */
}


// Using the above implemented graph class
var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {g.addVertex(vertices[i]);}
 
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
console.log("BFS");
g.bfs('A');













