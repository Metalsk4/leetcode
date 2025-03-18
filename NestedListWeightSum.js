const NestedWeightSum = (nestedList = []) => {
  let sum = 0;
  let level = 1;
  while (nestedList.length !== 0) {
    const tempList = [];
    for (const nestedItem of nestedList) {
      if (typeof nestedItem === "number") {
        sum += nestedItem * level;
      } else {
        tempList.push(...nestedItem);
      }
    }
    level++;
    nestedList = tempList;
  }

  return sum;
};

console.log(NestedWeightSum([[1, 1], 2, [1, 1]]));
