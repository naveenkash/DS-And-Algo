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
console.log(
  "insertAtCircularNode",
  insertAtCircularList(insertAtKthNode, 9, 4)
);
