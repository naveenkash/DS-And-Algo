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
