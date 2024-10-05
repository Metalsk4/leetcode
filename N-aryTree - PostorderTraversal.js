const NRYTreeNode = require("./utils/createN-aryTree");

function postorderTraversal(root) {
  if (!root) return [];

  const result = [];

  function traverse(node) {
    for (const child of node.children) {
      traverse(child);
    }
    result.push(node.data); // Visit the node after visiting its children
  }

  traverse(root);
  return result;
}

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

const postOrderTraversal = postorderTraversal(root);
console.log("postOrderTraversal", postOrderTraversal);
