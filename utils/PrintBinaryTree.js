const PrintBInaryTree = (rootNode, output=[]) => {
   

    if(rootNode === null){
        return
    } else {
        output.push(rootNode.val)
    }

    // console.log("rootNode",rootNode)
    // console.log("output",output)

    PrintBInaryTree(rootNode.left,output)
    PrintBInaryTree(rootNode.right,output)

    return output
}

const processOutput = (rootNode) => {
    const output = []
    PrintBInaryTree(rootNode, output)
    return output

}

module.exports = processOutput