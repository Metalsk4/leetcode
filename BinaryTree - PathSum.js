const createBinaryTree = require("./utils/createBinaryTree");

const PathSumBinaryTree = (root, sum) => {
  if (root === null) return false;
  if (root.left === null && root.right === null && root.val == sum) return true;
  //   console.log("root", root, "\nsum", sum);
  return (
    PathSumBinaryTree(root.left, sum - root.val) ||
    PathSumBinaryTree(root.right, sum - root.val)
  );
};

const btree1 = createBinaryTree([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);

console.log(btree1);

console.log(
  "haspathsum [5,4,8,11,null,13,4,7,2,null,null,null,1], sum: 22 --",
  PathSumBinaryTree(btree1, 22)
);
