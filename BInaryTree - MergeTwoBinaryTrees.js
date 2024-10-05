const createBinaryTree = require("./utils/createBinaryTree");

class TreeNode {
  left;
  right;
  val;

  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const MergeBInaryTree = (tree1, tree2) => {
  //base case
  if (tree1 == null && tree2 == null) {
    return null;
  }
  if (tree1 == null) return tree2;
  if (tree2 == null) return tree1;

  var outPutTree = new TreeNode((tree1?.val || 0) + (tree2?.val || 0));

  outPutTree.left = MergeBInaryTree(tree1.left, tree2.left);
  outPutTree.right = MergeBInaryTree(tree1.right, tree2.right);

  return outPutTree;
};

const tree1 = createBinaryTree([1, 3, 2, 5]);
const tree2 = createBinaryTree([2, 1, 3, null, 4, null, 7]);
console.log(tree1);
console.log(tree2);

const mergedTree = MergeBInaryTree(tree1, tree2);
console.log("merged", mergedTree);
