class DoublyNode {
  constructor(val, next = null, prev = null) {
    this.value = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtFirst(val) {
    if (this.head == null) {
      this.head = new DoublyNode(val, this.head);
      this.size++;
      return;
    }
    var node = new DoublyNode(val, this.head);
    this.head.prev = node;
    this.head = node;
    this.size++;
  }
  insertAtlast(val) {
    if (this.head == null) {
      this.head = new DoublyNode(val);
      return;
    }
    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new DoublyNode(val, null, current);
    this.size++;
  }
  insertAt(val, index) {
    if (index == 0) {
      this.head = new DoublyNode(val, this.head);
      this.size++;
      return;
    }
    var count = 0;
    var current = this.head,
      previous;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    var nextNode = current;
    var node = new DoublyNode(val, nextNode, previous);
    previous.next = node;
    current.prev = node;
    this.size++;
  }
  removeAt(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    var count = 0,
      previous,
      current = this.head;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    if (current.next == null) {
      previous.next = null;
      this.size--;
      return;
    }

    previous.next = current.next;
    current.next.prev = previous;
    this.size--;
  }
  reverseDoublyLinkedList() {
    var current = this.head,
      temp = null;
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp !== null) {
      this.head = temp.prev;
    }
  }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertAtFirst(1);
doublyLinkedList.insertAtlast(2);
doublyLinkedList.insertAtlast(3);
doublyLinkedList.insertAtlast(5);
doublyLinkedList.insertAt(4, 3);
doublyLinkedList.removeAt(1);
doublyLinkedList.reverseDoublyLinkedList();
//Expected Output null<-1-><-2->-<3-><-4-><-5-> null (-> = null <- = prev) <-5-> 5 prev = 4 , 5 next = null
console.log("Basic Doubly Linked List Methods", doublyLinkedList);

var doublyLinkedList2 = new DoublyLinkedList();
doublyLinkedList2.insertAtlast(1);
doublyLinkedList2.insertAtlast(2);
doublyLinkedList2.insertAtlast(4);
doublyLinkedList2.insertAtlast(3);
doublyLinkedList2.insertAtlast(6);
doublyLinkedList2.insertAtlast(5);
doublyLinkedList2.insertAtlast(8);
doublyLinkedList2.insertAtlast(7);

function mergeDoublyLinkedList(ll) {
  if (ll == null || ll.next == null) {
    return ll;
  }
  var fast = ll,
    slow = ll,
    temp = ll;
  while (fast && fast.next) {
    temp = slow;
    fast = fast.next.next;
    slow = slow.next;
  }
  temp.next = null;
  var left = mergeDoublyLinkedList(ll);
  var right = mergeDoublyLinkedList(slow);
  return mergeSortDoublyLinkedList(left, right);
}
function mergeSortDoublyLinkedList(left, right) {
  var sorted_temp = { value: null, next: null, prev: null };
  var current = sorted_temp;
  while (left !== null && right !== null) {
    if (left.value < right.value) {
      current.next = left;
      current.next.prev = current;
      left = left.next;
    } else {
      current.next = right;
      current.next.prev = current;
      right = right.next;
    }
    current = current.next;
  }
  if (left !== null) {
    current.next = left;
    current.next.prev = current;
    current = current.next;
  }
  if (right !== null) {
    current.next = right;
    current.next.prev = current;
    current = current.next;
  }
  return sorted_temp.next;
}
// Expected output 1-><-2-><-3-><-4-><-5-><-6-><-7-><-8-> null (-> = null <- = prev) <-5-> 5 prev = 4 , 5 next = 6
console.log(
  "mergeSort Doubly Linked List",
  mergeDoublyLinkedList(doublyLinkedList2.head)
);

var doublyLinkedList3 = new DoublyLinkedList();
doublyLinkedList3.insertAtlast(4);
doublyLinkedList3.insertAtlast(2);
doublyLinkedList3.insertAtlast(8);
doublyLinkedList3.insertAtlast(5);
doublyLinkedList3.insertAtlast(1);
doublyLinkedList3.insertAtlast(3);
doublyLinkedList3.insertAtlast(9);
doublyLinkedList3.insertAtlast(6);
doublyLinkedList3.insertAtlast(7);

function quickSortDoublyLinkedList(left, right) {
  if (left == null || left.next == null) {
    return;
  }
  var partitionNode;
  if (right != null && left != right && left != right.next) {
    partitionNode = partitionDoublyList(left, right);
    quickSortDoublyLinkedList(left, partitionNode.prev);
    quickSortDoublyLinkedList(partitionNode.next, right);
  }
  return left;
}

function partitionDoublyList(left, right) {
  var i = left.prev,
    pivot = right,
    j = left;
  while (j != right && j.next) {
    if (j.value <= pivot.value) {
      i = i == null ? left : i.next;
      var temp = i.value;
      i.value = j.value;
      j.value = temp;
    }
    j = j.next;
  }
  i = i == null ? left : i.next;
  var temp = pivot.value;
  pivot.value = i.value;
  i.value = temp;
  return i;
}

function lastNode(ll) {
  var current = ll;
  while (current.next) {
    current = current.next;
  }
  return current;
}
console.log(
  "quickSort Doubly Linked List",
  quickSortDoublyLinkedList(
    doublyLinkedList3.head,
    lastNode(doublyLinkedList3.head)
  )
);
