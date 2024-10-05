const createBinaryTree = require("./utils/createBinaryTree");

// Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Input: root = [1,2,2,3,4,4,3]
// Output: true

//left of left should be equal to right of right and right of left should be equal to left of right

const isSymmetric = (rootNode) => {
  if (rootNode == null) {
    return true;
  }
  return checkIsmirrorNode(rootNode.left, rootNode.right);
};

const checkIsmirrorNode = (leftNode, rightNode) => {
  if (leftNode === null && rightNode === null) {
    return true;
  }
  if (leftNode == null || rightNode == null || rightNode.val !== leftNode.val) {
    return false;
  }

  return (
    checkIsmirrorNode(leftNode.left, rightNode.right) &&
    checkIsmirrorNode(leftNode.right, rightNode.left)
  );
};

const tree1 = createBinaryTree([1, 2, 2, 3, 4, 4, 3]);
console.log(tree1);
console.log(isSymmetric(tree1)); //true

const tree2 = createBinaryTree([1, 2, 2, null, 3, null, 3]);
console.log(tree2);
console.log(isSymmetric(tree2)); //false

const tree3 = createBinaryTree([1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 5]);
console.log(tree3);
console.log(isSymmetric(tree3)); //true
