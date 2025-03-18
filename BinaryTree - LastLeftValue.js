const createBinaryTree = require("./utils/createBinaryTree")

const LastLeftValue = (root) => {
    const queue = [] 

    queue.push(root)

    //take first element from queue and go towards right and process left at last
    //since we are pushing a node only if it has children and we are pushing left in the last 
    //and at a time only one element is being processed first right element will be processed 
    // and at last left most will remain unprocessed
    while(queue.length !== 0) {
        root = queue.shift();

        if(root?.right !== null) queue.push(root.right)
        if(root?.left !== null) queue.push(root.left)
    }

    return root.val
}

const binaryTree = createBinaryTree([1,2,3,4,null,5,6,null,null,7])

console.log(LastLeftValue(binaryTree))