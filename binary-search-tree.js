class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    if (val > current.val) {
      if (current.right) {
        return this.insertRecursively(val, current.right);
      } else {
        current.right = new Node(val);
        return this;
      }
    } else if (val < current.val) {
      if (current.left) {
        return this.insertRecursively(val, current.left);
      } else {
        current.left = new Node(val);
        return this;
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (val === current.val) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) {
      return;
    }

    if (val === current.val) {
      return current;
    } else if (val > current.val) {
      return this.findRecursively(val, current.right);
    } else {
      return this.findRecursively(val, current.left);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, visitedNodes = []) {
    if (current) {
      visitedNodes.push(current.val);
      if (current.left) {
        this.dfsPreOrder(current.left, visitedNodes);
      }
      if (current.right) {
        this.dfsPreOrder(current.right, visitedNodes);
      }
    }
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root, visitedNodes = []) {
    if (current) {
      if (current.left) {
        this.dfsInOrder(current.left, visitedNodes);
      }
      visitedNodes.push(current.val);
      if (current.right) {
        this.dfsInOrder(current.right, visitedNodes);
      }
    }
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root, visitedNodes = []) {
    if (current) {
      if (current.left) {
        this.dfsPostOrder(current.left, visitedNodes);
      }
      if (current.right) {
        this.dfsPostOrder(current.right, visitedNodes);
      }
      visitedNodes.push(current.val);
    }
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisit = [this.root];
    let visitedNodes = [];

    while (toVisit.length > 0) {
      let node = toVisit.shift();
      if (node) {
        visitedNodes.push(node.val);
        if (node.left) toVisit.push(node.left);
        if (node.right) toVisit.push(node.right);
      }
    }
    
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  // findSecondHighest() {}
}

module.exports = BinarySearchTree;
