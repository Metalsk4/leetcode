const ValidParanthesis = (allParanthesis) => {
  //   let leftCounter = 0;
  //   let rightCounter = 0;
  //   for (const paranthesis of allParanthesis) {
  //     if (paranthesis === "(") {
  //       leftCounter++;
  //     } else {
  //       if (leftCounter > 0) {
  //         leftCounter--;
  //       } else {
  //         rightCounter++;
  //       }
  //     }
  //   }

  //   return leftCounter + rightCounter;
  const outputStack = [];
  for (const element of allParanthesis) {
    if (element === ")" && outputStack.at(-1) === "(") {
      outputStack.pop();
    } else {
      outputStack.push(element);
    }
  }

  return outputStack.length;
};

console.log('ValidParanthesis("())")', ValidParanthesis("())"));
console.log('ValidParanthesis("()")', ValidParanthesis("()"));
console.log('ValidParanthesis("()))((")', ValidParanthesis("()))(("));
