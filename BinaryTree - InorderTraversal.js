const createBinaryTree = require("./utils/createBinaryTree");

const InoroderTraversal = (root) => {
  const output = [];
  if (root == null) {
    return output;
  }

  const traverse = (root) => {
    if (root.left !== null) {
      traverse(root.left);
    }
    output.push(root.val);
    if (root.right !== null) {
      traverse(root.right);
    }
  };

  traverse(root);

  return output;
};

const binaryTree = createBinaryTree([1, null, 2]);
console.log("traverseInprder [1, null, 2]", InoroderTraversal(binaryTree));
