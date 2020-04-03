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
    if (current == null) {
      this.head = new Node(val);
      this.size++;
      return;
    }
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
  createLoop(k, l) {
    var count = 1;
    var count2 = 1;
    var current = this.head;
    var current2 = this.head;
    while (count < k) {
      // node to point next to create loop ex: 1->2->3->4->5 = 2 node to point
      current = current.next;
      count++;
    }
    while (count2 < l) {
      // node to which we want to point next ex: 1->2->3->4->5 = 5 node to point to 2
      current2 = current2.next;
      count2++;
    }
    current2.next = current;
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

console.log("Basic Methods", ll);

var addNode1 = new Node(3);
var addNode2 = new Node(2, addNode1);
var l1 = new Node(1, addNode2);

var addNode3 = new Node(6);
var addNode4 = new Node(5, addNode3);
var l2 = new Node(4, addNode4);

function mergeTwoSortedLinkedList(l1, l2) {
  var mergeSortedLinkedList = { value: -1, next: null };
  var dummyNode = mergeSortedLinkedList;
  while (l1 && l2) {
    if (l1.value > l2.value) {
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

var ml = mergeTwoSortedLinkedList(l1, l2);
console.log("mergeTwoSortedLinkedList", ml);

// creares random node
function getNode() {
  var randomList = null;
  for (let i = 9; i >= 1; i--) {
    var randomNumber2 = i;
    var list = new Node(randomNumber2, randomList);
    randomList = list;
  }
  return randomList;
}

// mergeSortLinkedList
function mergeSortLinkedList(ll) {
  if (ll == null || ll.next == null) {
    return ll;
  }

  var temp = ll;
  var slow = ll;
  var fast = ll;

  while (fast != null && fast.next != null) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  temp.next = null;
  var left_side = mergeSortLinkedList(ll);
  var right_side = mergeSortLinkedList(slow);
  return mergeSortTwoLinkedList(left_side, right_side);
}

function mergeSortTwoLinkedList(left, right) {
  var sorted_temp = { value: -1, next: null };
  var current_node = sorted_temp;

  while (left != null && right != null) {
    if (left.value < right.value) {
      current_node.next = left;
      left = left.next;
    } else {
      current_node.next = right;
      right = right.next;
    }
    current_node = current_node.next;
  }
  while (left != null) {
    current_node.next = left;
    left = left.next;
  }
  while (right != null) {
    current_node.next = right;
    right = right.next;
  }
  return sorted_temp.next;
}

let mergeSort = mergeSortLinkedList(getNode());
console.log("mergeSortLinkedList", mergeSort);

function ReverseListInGroupSize(ll, k) {
  var prev = null,
    current = ll,
    nextNode,
    count = 0;
  while (current !== null && count < k) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
    count++;
  }
  if (nextNode !== null) {
    // Asssigning the next node to the last element of current reveresed list
    // Next node is actually the first node of the next set of reversed list
    ll.next = ReverseListInGroupSize(nextNode, k);
  }
  return prev;
}
console.log("ReverseListInGroupSize", ReverseListInGroupSize(getNode(), 3));

// making a looped linked list
var loopedLinkedList = new LinkedList();
loopedLinkedList.insertAtLast(1);
loopedLinkedList.insertAtLast(2);
loopedLinkedList.insertAtLast(3);
loopedLinkedList.insertAtLast(4);
loopedLinkedList.insertAtLast(5);
loopedLinkedList.insertAtLast(6);
loopedLinkedList.insertAtLast(7);
loopedLinkedList.insertAtLast(8);
loopedLinkedList.createLoop(3, 6);

// Detect and remove loop from linked list
function detectLoop(ll) {
  var slow = ll.head;
  var fast = ll.head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return slow;
    }
  }
  return null;
}

function breakLinkedListLoop(node, head) {
  if (!node && !head) {
    return;
  }
  var q = head.head.next;
  while (node.next != q) {
    node = node.next;
    q = q.next;
  }
  node.next = null;
}
breakLinkedListLoop(detectLoop(loopedLinkedList), loopedLinkedList);

// And two number represented by linked list
var twoNum1 = new LinkedList();
twoNum1.insertAtLast(2);
twoNum1.insertAtLast(4);
twoNum1.insertAtLast(3);
var twoNum2 = new LinkedList();
twoNum2.insertAtLast(5);
twoNum2.insertAtLast(6);
twoNum2.insertAtLast(4);

function addTwoNumber(l1, l2) {
  l1 = l1.head;
  l2 = l2.head;

  var l3 = new LinkedList();
  var carry = 0;
  while (l1 && l2) {
    l1.value = l1 ? l1.value : 0;
    l2.value = l2 ? l2.value : 0;
    var current_sum = l1.value + l2.value + carry;
    carry = Math.floor(current_sum / 10);
    var last_digit = current_sum % 10;
    l3.insertAtLast(last_digit);
    l1 = l1.next;
    l2 = l2.next;
  }
  if (carry > 0) {
    l3.insertAtLast(carry);
  }
  return l3.head;
}
console.log("addTwoNumber", addTwoNumber(twoNum1, twoNum2));

var rotateList = new LinkedList();
rotateList.insertAtLast(10);
rotateList.insertAtLast(20);
rotateList.insertAtLast(30);
rotateList.insertAtLast(40);
rotateList.insertAtLast(50);
rotateList.insertAtLast(60);

function rotateLinkedList(ll, k) {
  if (k == 0) {
    return;
  }

  var current = ll.head;
  var count = 1;
  while (count < k && current.next) {
    current = current.next;
    count++;
  }

  if (current == null) {
    return;
  }

  var kthNode = current;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = ll.head;
  ll.head = kthNode.next;
  kthNode.next = null;
  return ll;
}
console.log("rotateLinkedList", rotateLinkedList(rotateList, 4));
