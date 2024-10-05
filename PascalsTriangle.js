const PascalsTriangle = (numRows) => {
  const outPut = [];

  for (let i = 0; i < numRows; i++) {
    const current = [];
    current.push(1);
    for (let j = 1; j < i; j++) {
      //output[i-1] is the previous row and j-1 is the previous column
      //current[j] will be sum of previous row's j-1 and j
      const previousRow = outPut[i - 1];
      current[j] = previousRow[j - 1] + previousRow[j];
    }
    current.push(1);

    outPut.push([...current]);
  }

  return outPut;
};

console.log("Pascal Triangle for 3 rows", PascalsTriangle(3));
console.log("Pascal Triangle for 5 rows", PascalsTriangle(5));
