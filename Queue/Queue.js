function Queue() {
  var queue = [],
    front = -1,
    rear = -1;
  function enQueue(value) {
    if (value == null) {
      return;
    }
    if (queue.length == 0) {
      front++;
    }
    queue.push(value);
    rear++;
  }
  function deQueue() {
    if (queue.length == 1) front = -1;
    if (queue.length <= 0) return console.log("Queue Underflow");
    rear--;
    console.log(queue.shift()); // return queue.shift();
  }
  Queue.enQueue = enQueue;
  Queue.deQueue = deQueue;
}
Queue();
// Queue.enQueue(1);
// Queue.enQueue(2);
// Queue.enQueue(3);
// Queue.enQueue(4);
// Queue.deQueue();
// Queue.deQueue();
// Queue.deQueue();
// Queue.deQueue();
// Queue.deQueue();

function QueueUsingLinkedList() {
  var queue = new LinkedList(),
    front = queue.head,
    rear = null;
  function enQueue(value) {
    if (value == null) {
      console.log("No Value Provided");
      return;
    }
    var node = new Node(value),
      head_ref = queue.head;
    node.next = head_ref;
    queue.head = node;
    front = queue.head;
    queue.size++;
  }
  function deQueue() {
    var current = queue.head,
      prev = null;
    if (queue.size <= 1) {
      console.log(current);
      current = null;
      return;
    }
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    rear = prev;
    queue.size--;
    console.log(current);
  }
  QueueUsingLinkedList.enQueue = enQueue;
  QueueUsingLinkedList.deQueue = deQueue;
}
QueueUsingLinkedList();
// QueueUsingLinkedList.enQueue(4);
// QueueUsingLinkedList.enQueue(2);
// QueueUsingLinkedList.deQueue();
