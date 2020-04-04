// Using Node class from Linkedlist.js file
var circularNode6 = new Node(6);
var circularNode2 = new Node(5, circularNode6);
var circularNode3 = new Node(4, circularNode2);
var circularNode4 = new Node(3, circularNode3);
var circularNode5 = new Node(2, circularNode4);
var circularNode = new Node(1, circularNode5);
circularNode6.next = circularNode;

function insertAtLastCircularlist(node, value) {
  if (node == null) {
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
  "insertAtLastCircularlist",
  insertAtLastCircularlist(circularNode, 7)
);
