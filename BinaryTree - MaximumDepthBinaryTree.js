const binaryTree = require("./utils/createBinaryTree");

const MaximumDepthBinaryTree = (root) => {
  if (root === null) {
    return 0;
  }
  return (
    1 +
    Math.max(
      MaximumDepthBinaryTree(root.left),
      MaximumDepthBinaryTree(root.right)
    )
  );
};

const btree1 = binaryTree([3, 9, 20, null, null, 15, 7]);
const btree2 = binaryTree([1, null, 2]);

console.log("[3, 9, 20, null, null, 15, 7]", MaximumDepthBinaryTree(btree1));
console.log("[1,null,2]", MaximumDepthBinaryTree(btree2));
