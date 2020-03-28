class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtFirst(val) {
    this.head = new Node(val, this.head);
    this.size++;
  }
  insertAtLast(val) {
    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(val);
    this.size++;
  }
  insertAt(val, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(val, this.head);
    }
    let current, previous;
    let count = 0;
    current = this.head;
    let node = new Node(val);
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  swapNodesWithoutDataSwap(node1, node2) {
    // Checking if node for swap is present
    if (!node1 || !node2) {
      return;
    }
    if (this.head != null && !this.head.next) {
      return;
    }

    // Finding first element in node
    var prevX = null,
      nextX = this.head;
    while (nextX.next && nextX.value != node1) {
      prevX = nextX;
      nextX = nextX.next;
    }
    // Finding second element in node
    var prevY = null,
      nextY = this.head;
    while (nextY.next && nextY.value != node2) {
      prevY = nextY;
      nextY = nextY.next;
    }

    // checking if we have find the element in node
    if (nextX == null || nextY == null) {
      return;
    }

    // Swapping of two nodes
    if (prevX != null) {
      prevX.next = nextY;
    } else {
      this.head = nextY;
    }

    if (prevY != null) {
      prevY.next = nextX;
    } else {
      this.head = nextX;
    }

    var temp = nextX.next;
    nextX.next = nextY.next;
    nextY.next = temp;
  }
  traverse() {
    var nextNode,
      prevNode,
      currNode = this.head;
    while (currNode != null) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
  }
}

var ll = new LinkedList();

ll.insertAtFirst(4);
ll.insertAtLast(6);
ll.insertAtLast(8);
ll.insertAtLast(10);
ll.insertAtLast(11);
ll.insertAtLast(12);
ll.insertAtLast(13);
ll.insertAt(36, 2);
ll.swapNodesWithoutDataSwap(36, 4);
ll.traverse();

console.log(ll);

var addNode1 = new Node(3);
var addNode2 = new Node(2, addNode1);
var l1 = new Node(1, addNode2);

var addNode3 = new Node(6);
var addNode4 = new Node(5, addNode3);
var l2 = new Node(4, addNode4);

function mergeSortedLinkedList(l1, l2) {
  var mergeSortedLinkedList = { value: -1, next: null };
  var dummyNode = mergeSortedLinkedList;
  while (l1 && l2) {
    if (l1.value > l2.value) {
      document.write(JSON.stringify(dummyNode));
      dummyNode.next = l2;
      l2 = l2.next;
    } else {
      dummyNode.next = l1;
      l1 = l1.next;
    }
    dummyNode = dummyNode.next;
  }
  dummyNode.next = l1 || l2;
  return mergeSortedLinkedList.next;
}
var ml = mergeSortedLinkedList(l1, l2);

console.log(ml);