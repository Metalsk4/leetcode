const SquaresOfSortedArray = (nums = []) => {
  const output = [];

  for (const element of nums) {
    output.push(Math.abs(element * element));
  }

  output.sort((a, b) => a - b);
  return output;
};

console.log(SquaresOfSortedArray([-7, -3, 2, 3, 11]));
console.log(SquaresOfSortedArray([-4, -1, 0, 3, 10]));
