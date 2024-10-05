class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

function createNaryTreeFromArray(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root]; // Use a queue for BFS

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== null) {
      const newNode = new TreeNode(arr[i]);
      const parent = queue[0]; // Get the front of the queue

      parent.addChild(newNode);
      queue.push(newNode); // Enqueue the new node
    } else {
      // Move to the next child (skip null values)
      queue.shift();
    }
  }

  return root;
}

// Example usage:
const inputArray = [1, null, 3, 4, null, 6];
const naryTreeRoot = createNaryTreeFromArray(inputArray);
console.log(naryTreeRoot); // Print the N-ary tree structure

module.exports = createNaryTreeFromArray;
