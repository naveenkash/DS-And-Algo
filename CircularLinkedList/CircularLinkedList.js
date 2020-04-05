// Using LinkedList class from Linkedlist.js file

var insertAtLastNode = new LinkedList();
insertAtLastNode.insertAtLast(1);
insertAtLastNode.insertAtLast(2);
insertAtLastNode.insertAtLast(3);
insertAtLastNode.insertAtLast(4);
insertAtLastNode.insertAtLast(5);
insertAtLastNode.insertAtLast(6);
insertAtLastNode.createCircular();

function insertAtLastNodeCircularlist(ll, value) {
  if (ll == null || value == null) {
    return false;
  }
  ll = ll.head;
  var temp = ll;
  while (temp.next != ll) {
    temp = temp.next;
  }
  var newNode = new Node(value);
  temp.next = newNode;
  newNode.next = ll;
  return ll;
}
//Expected output 1->2->-3->4->5->6->7->1-2 so on.
console.log(
  "insertAtLastNodeCircularlist",
  insertAtLastNodeCircularlist(insertAtLastNode, 7)
);

var insertAtFirstNode = new LinkedList();
insertAtFirstNode.insertAtLast(1);
insertAtFirstNode.insertAtLast(2);
insertAtFirstNode.insertAtLast(3);
insertAtFirstNode.insertAtLast(4);
insertAtFirstNode.insertAtLast(5);
insertAtFirstNode.insertAtLast(6);
insertAtFirstNode.createCircular();

function insertAtFirstCircularList(ll, value) {
  if (ll == null || value == null) {
    return false;
  }
  ll = ll.head;
  var temp = ll;
  var newNode = new Node(value);
  if (ll !== null || ll.next !== null) {
    while (temp.next != ll) {
      temp = temp.next;
    }
    newNode.next = ll;
    temp.next = newNode;
  }
  return newNode;
}
//Expected output 0->1->2->-3->4->5->6->7->0->1-2 so on.
console.log(
  "insertAtFirstCircularList",
  insertAtFirstCircularList(insertAtFirstNode, 0)
);

var insertAtKthNode = new LinkedList();
insertAtKthNode.insertAtLast(1);
insertAtKthNode.insertAtLast(2);
insertAtKthNode.insertAtLast(3);
insertAtKthNode.insertAtLast(5);
insertAtKthNode.createCircular();

function insertAtCircularList(ll, k, val) {
  if (k > ll.size) {
    return false;
  }
  var newNode = new Node(val);
  if (k == 0) {
    newNode.next = ll.head;
    ll.head = newNode;
  }
  var previous,
    current = ll.head;
  count = 0;
  while (count < k) {
    previous = current;
    current = current.next;
    count++;
  }
  newNode.next = current;
  previous.next = newNode;
  ll.size++;
  return ll;
}
// Expected output 1->2->3->4->5
console.log(
  "insertAtCircularNode",
  insertAtCircularList(insertAtKthNode, 3, 4)
);

var traverseCircularList = new LinkedList();
traverseCircularList.insertAtLast(1);
traverseCircularList.insertAtLast(2);
traverseCircularList.insertAtLast(3);
traverseCircularList.insertAtLast(4);
traverseCircularList.insertAtLast(5);
traverseCircularList.insertAtLast(6);
traverseCircularList.createCircular();

function traverseCircular(ll) {
  var current = ll.head,
    previous = null,
    count = 0,
    nextNode;
  while (count < ll.size) {
    nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
    count++;
  }
  var temp = previous;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = previous;
  return previous;
}
// Expected output 6->5->4->3->2->1-6->5 so on
console.log("traverseCircular", traverseCircular(traverseCircularList));

var splitCircular = new LinkedList();
splitCircular.insertAtLast(1);
splitCircular.insertAtLast(2);
splitCircular.insertAtLast(3);
splitCircular.insertAtLast(4);
splitCircular.insertAtLast(5);
splitCircular.insertAtLast(6);
splitCircular.insertAtLast(7);
splitCircular.insertAtLast(8);
splitCircular.createCircular();

function splitCircularInTwoHalves(ll) {
  if (ll == null) {
    return;
  }
  var slow = ll.head,
    fast = ll.head;
  while (fast.next != ll.head && fast.next.next !== ll.head) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast.next.next == ll.head) {
    fast = fast.next;
  }
  fast.next = slow.next;
  slow.next = ll.head;
  return [slow.next, fast.next];
}
// Expected output first el in array 1->2->3->4->1 son on seconf el in array 5->6->7->8
console.log(
  "splitCircularInTwoHalves",
  splitCircularInTwoHalves(splitCircular)
);
