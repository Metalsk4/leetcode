class TreeNode {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  addChild(childNode) {
    childNode.parent = this;
    this.children.push(childNode);
  }
}

// Example usage:
// const root = new TreeNode("Root", "Root Data");
// const child1 = new TreeNode("Child1", "Child 1 Data");
// const child2 = new TreeNode("Child2", "Child 2 Data");

// root.addChild(child1);
// root.addChild(child2);

// child1.addChild(new TreeNode("Grandchild1", "Grandchild 1 Data"));
// child1.addChild(new TreeNode("Grandchild2", "Grandchild 2 Data"));

// console.log(root); // Print the N-ary tree structure

module.exports = TreeNode;
