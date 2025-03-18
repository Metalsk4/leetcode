const BinaryTree = require("./utils/createBinaryTree")
const PrintTreeInArrayFormat = require("./utils/PrintBinaryTree")

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


const BinaryTreePruning = (root) => {
    if (root === null) return null;

    let output = new TreeNode(root.val)

    output.left = BinaryTreePruning(root.left)
    output.right = BinaryTreePruning(root.right)



    if (output.val === 0 && output.left === null && output.right === null) {
        return null
    }

    return output
}

const inputBinaryTree = BinaryTree([1, null, 0, 0, 1])
const prunnedTree = BinaryTreePruning(inputBinaryTree)
console.log("prunnedTree",prunnedTree)
console.log(PrintTreeInArrayFormat(prunnedTree))


