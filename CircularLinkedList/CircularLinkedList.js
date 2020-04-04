// Using LinkedList class from Linkedlist.js file

var insertAtLastNode = new LinkedList();
insertAtLastNode.insertAtLast(1);
insertAtLastNode.insertAtLast(2);
insertAtLastNode.insertAtLast(3);
insertAtLastNode.insertAtLast(4);
insertAtLastNode.insertAtLast(5);
insertAtLastNode.insertAtLast(6);
insertAtLastNode.createCircular();

function insertAtLastNodeCircularlist(node, value) {
  if (node == null || value == null) {
    return false;
  }
  node = node.head;
  var temp = node;
  while (temp.next != node) {
    temp = temp.next;
  }
  var newNode = new Node(value);
  temp.next = newNode;
  newNode.next = node;
  return node;
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

function insertAtFirstCircularList(node, value) {
  if (node == null || value == null) {
    return false;
  }
  node = node.head;
  var temp = node;
  var newNode = new Node(value);
  if (node !== null || node.next !== null) {
    while (temp.next != node) {
      temp = temp.next;
    }
    newNode.next = node;
    temp.next = newNode;
  }
  return newNode;
}
//Expected output 0->1->2->-3->4->5->6->7->0->1-2 so on.
console.log(
  "insertAtFirstCircularList",
  insertAtFirstCircularList(insertAtFirstNode, 0)
);
