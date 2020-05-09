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

function reverseQueueusingRecursion(queue) {
  if (queue == null || queue.length <= 1) {
    return queue;
  }
  var temp = queue.shift();
  reverseQueueusingRecursion(queue);
  queue.push(temp);
  return queue;
}
console.log(
  "reverse Queue using Recursion",
  reverseQueueusingRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9])
);

function reverseQueueFirstKElements(queue, k) {
  if (queue == null || queue.length <= 1 || k == null || k > queue.length) {
    return;
  }
  if (k <= 1) {
    return;
  }
  var stack = [];
  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }
  while (stack.length > 0) {
    queue.push(stack.pop());
  }
  for (let i = 0; i < queue.length - k; i++) {
    var temp = queue.shift();
    queue.push(temp);
  }
  return queue;
}
console.log(
  "reverse Queue First K Elements",
  reverseQueueFirstKElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)
);

function interLeaveQueue(queue) {
  if (queue.length % 2 != 0) {
    return "Input even number of integers.";
  }
  var stack = [];

  var halfSize = queue.length / 2;
  for (let i = 0; i < halfSize; i++) {
    stack.push(queue.shift());
  }
  while (stack.length > 0) {
    queue.push(stack.pop());
  }
  for (let i = 0; i < halfSize; i++) {
    queue.push(queue.shift());
  }
  for (let i = 0; i < halfSize; i++) {
    stack.push(queue.shift());
  }
  while (stack.length > 0) {
    queue.push(stack.pop());
    queue.push(queue.shift());
  }
  return queue;
}
console.log("interLeave Queue", interLeaveQueue([1, 2, 3, 4]));
