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
