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
