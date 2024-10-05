const TwoSumArray = (arr = [], target) => {
  const output = [];
  const map = {};
  arr.forEach((element, index) => {
    if (index === 0) {
      map[element] = `${index}`;
    } else {
      const requiredNum = target - element;
      if (map[requiredNum]) {
        output.push(parseInt(map[requiredNum]));
        output.push(parseInt(index));

        //for breaking the loop
        return false;
      } else {
        map[element] = `${index}`;
      }
    }
  });

  return output;
};

const output = TwoSumArray([6, 1, 2, 4, 5], 10);

console.log("number at index", output);
