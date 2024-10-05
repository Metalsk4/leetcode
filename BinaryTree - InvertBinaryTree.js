const createBinaryTree = require("./utils/createBinaryTree");

const invertBinaryTree = (rootNode) => {
  if (rootNode == null) {
    return null;
  }
  tempNode = rootNode.left;
  rootNode.left = rootNode.right;
  rootNode.right = tempNode;

  invertBinaryTree(rootNode.left);
  invertBinaryTree(rootNode.right);

  return rootNode;
};

const tree1 = createBinaryTree([1, 2, 3, 4, 5, 6, null]);
console.log("tree1Normal", tree1);
console.log("invertedTree", invertBinaryTree(tree1));
