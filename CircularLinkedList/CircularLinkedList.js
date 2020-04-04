// Using Node class from Linkedlist.js file
var insertAtLastNode6 = new Node(6);
var insertAtLastNode5 = new Node(5, insertAtLastNode6);
var insertAtLastNode4 = new Node(4, insertAtLastNode5);
var insertAtLastNode3 = new Node(3, insertAtLastNode4);
var insertAtLastNode2 = new Node(2, insertAtLastNode3);
var insertAtLastNode = new Node(1, insertAtLastNode2);
insertAtLastNode6.next = insertAtLastNode;

function insertAtLastNodeCircularlist(node, value) {
  if (node == null || value == null) {
    return false;
  }
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

var insertAtFirstNode6 = new Node(6);
var insertAtFirstNode5 = new Node(5, insertAtFirstNode6);
var insertAtFirstNode4 = new Node(4, insertAtFirstNode5);
var insertAtFirstNode3 = new Node(3, insertAtFirstNode4);
var insertAtFirstNode2 = new Node(2, insertAtFirstNode3);
var insertAtFirstNode = new Node(1, insertAtFirstNode2);
insertAtFirstNode6.next = insertAtFirstNode;

function insertAtFirstCircularList(node, value) {
  if (node == null || value == null) {
    return false;
  }
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
