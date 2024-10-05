class TreeNode {
  val;
  left;
  right;
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const createBinaryTree = (arr) => {
  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;
  while (i < arr.length) {
    let current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;
    if (arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }
  return root;
};

module.exports = createBinaryTree;
