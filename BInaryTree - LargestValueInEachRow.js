
const createBinaryTree = require("./utils/createBinaryTree")


const LargestValueInEachRow = (root) =>{
   const output = []
   const calculateMax = (root, output = [], level) => {
  
      //check if there is no root
      if (root === null) return
   
      //for first element of each level
      if (level === output.length) {
         output.push(root.val)            
      } else {
         //check the max value with previous value(output[level]) and current value(root.val)
         output[level] = Math.max(output[level], root.val)
      }
      level=level+1

      //traverse and find max on each left in left and then right
      calculateMax(root.left, output, level)
      calculateMax(root.right, output, level)
   }
   calculateMax(root, output, 0)
   return output
}

const binaryTree = createBinaryTree([1, 3, 2, 5, 3, null, 9])

console.log(LargestValueInEachRow(binaryTree))