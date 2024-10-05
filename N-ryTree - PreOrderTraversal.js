const NRYTreeNode = require("./utils/createN-aryTree");

const TraversePreOrder = (root) => {
  const result = [];

  const traverse = (root) => {
    if (root == null) {
      return;
    }
    result.push(root.data);
    for (const child of root.children) {
      traverse(child);
    }
  };

  traverse(root);
  return result;
};
const tree1 = [1, null, 3, 2, 4, null, 5, 6];
const root = new NRYTreeNode("Root", 1);
const child1 = new NRYTreeNode("Child1", 3);
const child2 = new NRYTreeNode("Child2", 2);
const child3 = new NRYTreeNode("Child3", 4);

root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

child1.addChild(new NRYTreeNode("Grandchild1", 5));
child1.addChild(new NRYTreeNode("Grandchild2", 6));

console.log("Nry tree", root);
console.log("Input: " + tree1 + "\nOutput: " + TraversePreOrder(root));
