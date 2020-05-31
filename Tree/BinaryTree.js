class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// Binary Search Tree
class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(data) {
    if (this.root == null) {
      this.root = new TreeNode(data);
      this.size++;
      return;
    }
    let newNode = new TreeNode(data);
    const searchTree = (node) => {
      if (data <= node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
    this.size++;
  }

  printInOrder() {
    if (this.root == null) {
      return;
    }
    let results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);

      results.push(node.data);

      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    console.log(results);
  }
  printPreOrder() {
    if (this.root == null) {
      return;
    }
    let results = [];
    const traverse = (node) => {
      results.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    console.log(results);
  }
  printPostOrder() {
    if (this.root == null) {
      return;
    }
    let results = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.data);
    };
    traverse(this.root);
    console.log(results);
  }
  breadthFirstSearch() {
    let results = [],
      queue = [];
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      results.push(currentNode.data);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    console.log(results);
  }
  delete(node) {
    if (node == null) {
      return;
    }
    var current = this.root;
    var previous = null;
    while (current) {
      if (node == current.data) {
        if (!current.left && !current.right) {
          // check if node is leaf node
          delete current.data;
          this.size--;
        } else if (current.left && current.right) {
          // check if node contains two children node
          let currPrev = current,
            curr = current.left;
          while (curr.right) {
            currPrev = curr;
            curr = curr.right;
          }
          if (node == this.root.data) {
            this.root.data = curr.data;
          }
          if (curr.left) {
            // check if last node contains any left node
            currPrev.right = curr.left;
          }
          current.data = curr.data;
          delete curr.data;
          this.size--;
        } else if (current.left || current.right) {
          // check if node contains one child element
          if (previous.right.data == current.data) {
            previous.right = current.right;
          } else {
            previous.left = current.left;
          }
          this.size--;
        }
      }
      if (node < current.data) {
        previous = current;
        current = current.left;
      } else {
        previous = current;
        current = current.right;
      }
    }
  }
}
var bst = new BST();
bst.insert(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);
bst.delete(36);
// bst.printInOrder();
// bst.printPreOrder();
// bst.printPostOrder();
// bst.breadthFirstSearch();
console.log(bst);

function checkIfBstIdentical(node1, node2) {
  if (node1 == null && node2 == null) {
    return true;
  }
  if (node1 != null && node2 != null) {
    if (node1.data == node2.data && checkIfBstIdentical(node1.left, node2.left) && checkIfBstIdentical(node1.right, node2.right)) {
      return true;
    }
    return false;
  }
}
var bst1 = new BST();
bst1.insert(15);
bst1.insert(3);
bst1.insert(36);
bst1.insert(2);
bst1.insert(12);
bst1.insert(28);
bst1.insert(39);

var bst2 = new BST();
bst2.insert(15);
bst2.insert(3);
bst2.insert(36);
bst2.insert(2);
bst2.insert(12);
bst2.insert(28);
bst2.insert(39);

console.log('check If Bst Identical', checkIfBstIdentical(bst1.root, bst2.root));

function calculateHeightOfTree(root) {
  if (root == null) {
    return 0;
  }
  return 1 + Math.max((calculateHeightOfTree(root.left), calculateHeightOfTree(root.right)));
}
// Recursive Approach
console.log('calculate Height Of Tree Recursion', calculateHeightOfTree(bst.root));

function calculateHeightOfTreeIterative(root) {
  let height = 0;
  if (root == null) {
    return 0;
  }
  let queue = [];
  queue.push(root)
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      let currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    height++;
  }
  return height;
}
console.log('calculate Height Of Tree Iterative', calculateHeightOfTree(bst.root));

function spiralOrdertraversal(root) {
  let stack1 = [], stack2 = [], result = [];
  stack1.push(root);
  let size = stack1.length;
  while (size) {
    let poppedNode = stack1.pop();
    if (poppedNode.left) {
      stack2.push(poppedNode.left);
    }
    if (poppedNode.right) {
      stack2.push(poppedNode.right);
    }
    console.log(poppedNode);

    poppedNode.data ? result.push(poppedNode.data) : result.push(null);
    while (stack2.length) {
      let poppedNode = stack2.pop();
      if (poppedNode.right) {
        stack1.push(poppedNode.right);
      }
      if (poppedNode.left) {
        stack1.push(poppedNode.left);
      }
      poppedNode.data ? result.push(poppedNode.data) : result.push(null);
    }
    size = stack1.length;
  }
  return result;
}
console.log('spiralOrdertraversal ',
  spiralOrdertraversal(bst.root));
