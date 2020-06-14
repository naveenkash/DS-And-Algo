class Graph {
    constructor(noOfVertices = 1) {
        this.noOfVertices = noOfVertices;
        this.AdjList = {};
    }

    addVertex(vertex) {
        if (vertex == null) {
            return
        }
        this.AdjList[vertex] = [];
    }

    addEdge(srcVertex, destVertex) {
        if (srcVertex == null || destVertex == null) {
            return
        }
        this.AdjList[srcVertex].push(destVertex);
        this.AdjList[destVertex].push(srcVertex);
    }

    printGraph() {
        let keys = Object.keys(this.AdjList);
        for (let i = 0; i < keys.length; i++) {
            console.log(keys[i], this.AdjList[keys[i]]);
        }
    }

    bfs(startingNode) {
        if (startingNode == null) {
            return
        }
        let visited = [], queue = [], result = [];
        visited[startingNode] = true;
        queue.push(startingNode);
        while (queue.length > 0) {
            var queueElement = queue.shift();
            result.push(queueElement);
            var queueElementValue = this.AdjList[queueElement];
            for (let i = 0; i < queueElementValue.length; i++) {
                var nodesConnected = queueElementValue[i]
                if (!visited[nodesConnected]) {
                    visited[nodesConnected] = true;
                    queue.push(nodesConnected);
                }
            }
        }
        console.log('BFS on graph', result);
    }

    dfs(startingNode) {
        if (startingNode == null) {
            return
        }
        let visited = [];
        this.DFSUtil(startingNode, visited);
    }

    DFSUtil(vertex, visited) {
        if (vertex == null || visited == null) {
            return
        }
        visited[vertex] = true;
        console.log(vertex);
        let getNeigbours = this.AdjList[vertex];
        for (let i = 0; i < getNeigbours.length; i++) {
            const getElem = getNeigbours[i];
            if (!visited[getElem]) {
                this.DFSUtil(getElem, visited);
            }
        }
    }
}

let graph = new Graph(6);
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
// graph.printGraph();
// graph.dfs('A');
// graph.bfs('A')
console.log(graph);
