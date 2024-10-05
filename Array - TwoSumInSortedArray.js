//two pointers solution

//we have to return [intexA+1, indexB+1]
const TwoSumArray = (sortedNumbers, target) => {
  let start = 0;
  let end = sortedNumbers.length - 1;
  const output = [];
  while (start < end) {
    let sum = sortedNumbers[start] + sortedNumbers[end];
    if (sum === target) {
      output[0] = start + 1;
      output[1] = end = 1;
    } else {
      if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
  }
  return output;
};

const output = TwoSumArray([1, 2, 4, 5, 6, 7, 8], 10);

console.log("number at index", output);

const output2 = TwoSumArray([11, 44, 56, 77, 88, 99], 55);

console.log("number at index", output2);
