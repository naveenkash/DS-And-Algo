class Graph {
  constructor(noOfVertices = 1) {
    this.noOfVertices = noOfVertices;
    this.AdjList = {};
  }

  addVertex(vertex) {
    if (vertex == null) {
      return;
    }
    this.AdjList[vertex] = [];
  }

  addEdge(srcVertex, destVertex) {
    if (srcVertex == null || destVertex == null) {
      return;
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
      return;
    }
    let visited = [],
      queue = [],
      result = [];
    visited[startingNode] = true;
    queue.push(startingNode);
    while (queue.length > 0) {
      var queueElement = queue.shift();
      result.push(queueElement);
      var queueElementValue = this.AdjList[queueElement];
      for (let i = 0; i < queueElementValue.length; i++) {
        var nodesConnected = queueElementValue[i];
        if (!visited[nodesConnected]) {
          visited[nodesConnected] = true;
          queue.push(nodesConnected);
        }
      }
    }
    console.log("BFS on graph", result);
  }

  dfs(startingNode) {
    if (startingNode == null) {
      return;
    }
    let visited = [];
    this.DFSUtil(startingNode, visited);
  }

  DFSUtil(vertex, visited) {
    if (vertex == null || visited == null) {
      return;
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
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("C", "F");
// graph.printGraph();
// graph.dfs('A');
// graph.bfs('A')
console.log(graph);

class Edge {
  constructor(to, cost) {
    this.to = to;
    this.cost = cost;
  }
}
class Node {
  constructor(index, cost) {
    this.index = index;
    this.cost = cost;
  }
}

var adj = [];
// for A
var list = [];
list.push(new Edge(1, 2));
list.push(new Edge(3, 6));
list.push(new Edge(4, 7));
adj.push(list);

// for b
list = [];
list.push(new Edge(2, 5));
adj.push(list);

// for c
list = [];
list.push(new Edge(5, 3));
list.push(new Edge(3, 5));
adj.push(list);

// for d
list = [];
list.push(new Edge(4, 9));
adj.push(list);

// for e
list = [];
list.push(new Edge(2, 1));
list.push(new Edge(5, 1));
list.push(new Edge(1, 1));
adj.push(list);

// for f
list = [];
adj.push(list);

var count = 0,
  heap = minHeap();

heap.insert(new Node(0, 0));

function dijkstra(graph, start, end) {
  var visited = [],
    prev = [],
    dist = [];
  for (let i = 0; i < graph.length; i++) {
    visited[i] = false;
    prev[i] = null;
    dist[i] = Infinity;
  }
  dist[start] = 0;
  while (heap.length() > 0) {
    count++;
    if (count > 100) {
      break;
    }
    var min = heap.extractMin();
    visited[min.index] = true;
    if (dist[min.index] >= min.cost) {
      var curAdj = graph[min.index];
      if (min.index == end) {
        break;
      }
      curAdj.forEach((edge) => {
        if (!visited[edge.to]) {
          var newDist = edge.cost + min.cost;
          if (newDist < dist[edge.to]) {
            dist[edge.to] = newDist;
            prev[edge.to] = min.index;
            heap.insert(new Node(edge.to, newDist));
          }
        }
      });
    }
  }
  return { dist, prev };
}

function findShortestPath(graph, start, end) {
  let { dist, prev } = dijkstra(graph, start, end);
  let path = [];
  if (dist[end] == Infinity) {
    return path;
  }
  for (let i = end; i < prev.length; i = prev[i]) {
    path.push(i);
  }
  path.reverse();
  console.log("shortest path = ", path);
}
findShortestPath(adj, 0, 5);

function aStar(adj, start, end) {}

function minHeap() {
  var minheap = [];
  var newObj = {
    minheap: minheap,
  };

  function insert(value) {
    minheap.push(value);
    heapifyUp();
  }

  function heapifyUp() {
    let index = minheap.length - 1;
    while (index > 1) {
      let element = minheap[index],
        parentIndex = Math.floor(index / 2),
        parent = minheap[parentIndex];
      if (parent.cost <= element.cost) return;
      minheap[index] = parent;
      minheap[parentIndex] = element;
      index = parentIndex;
    }
  }

  function extractMin() {
    if (length() == 0) {
      return null;
    }
    let min = minheap[0];
    if (length() > 1) {
      minheap[0] = minheap.pop();
      heapifyDown(0);
    } else {
      minheap = [];
    }
    return min;
  }

  function heapifyDown(index) {
    let left = 2 * index + 1,
      right = 2 * index + 2,
      length = minheap.length,
      smallest = index;

    if (left < length && minheap[left].cost < minheap[smallest].cost) {
      smallest = left;
    }
    if (right < length && minheap[right].cost < minheap[smallest].cost) {
      smallest = right;
    }

    if (smallest !== index) {
      let temp = minheap[smallest];
      minheap[smallest] = minheap[index];
      minheap[index] = temp;
      heapifyDown(smallest);
    }
  }

  function length() {
    return minheap.length;
  }
  newObj.length = length;
  newObj.insert = insert;
  newObj.extractMin = extractMin;

  return newObj;
}
