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

function quickSortDoublyLinkedList(ll, left, right) {
  if (ll == null || ll.next == null) {
    return;
  }
  var partitionIndex,
    count = 0,
    pivot = ll,
    current = ll;
  if (left < right) {
    while (count < right && current.next !== null) {
      current = current.next;
      pivot = current;
      count++;
    }
    partitionIndex = partitionDoublyList(ll, pivot, left, right);

    quickSortDoublyLinkedList(ll, left, partitionIndex - 1);
    quickSortDoublyLinkedList(ll, partitionIndex + 1, right);
  }
  return ll;
}
function partitionDoublyList(ll, pivot, left, right) {
  var pivotValue = pivot,
    current = ll,
    pivotIndex = left,
    count = left,
    count2 = 0;

  while (count2 < left && current.next !== null) {
    current = current.next;
    count2++;
  }

  while (count < right && current.next !== null) {
    if (current.value <= pivotValue.value) {
      swapDoublyNode(ll, pivotIndex, count);
      pivotIndex++;
    }
    current = current.next;
    count++;
  }
  swapDoublyNode(ll, pivotIndex, right);
  return pivotIndex;
}
function swapDoublyNode(ll, i, j) {
  var current = ll,
    current2 = ll,
    temp1 = ll,
    temp2 = ll,
    temp3 = null,
    count1 = 0,
    count2 = 0;
  while (count1 < i && current.next !== null) {
    current = current.next;
    temp1 = current;
    count1++;
  }
  while (count2 < j && current2.next !== null) {
    current2 = current2.next;
    temp2 = current2;
    count2++;
  }

  temp3 = { ...temp1 };
  temp1.value = temp2.value;
  temp2.value = temp3.value;
}
console.log(
  "quickSort Doubly Linked List",
  quickSortDoublyLinkedList(doublyLinkedList3.head, 0, doublyLinkedList3.size)
);
