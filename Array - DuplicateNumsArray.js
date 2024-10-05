const DuplicateInArray = (array) => {
  const map = {};
  let output = false;
  array.forEach((element) => {
    if (map[element]) {
      output = true;
      return false;
    } else {
      map[element] = `${element}`;
    }
  });

  return output;
};

const Array1 = [1, 2, 3, 5, 6, 1, 44, 21, 23];
const Array2 = [23, 55, 66, 77, 0, 11, 22, 44];

console.log(Array1, " - isDuplicate: ", DuplicateInArray(Array1));

console.log(Array2, " - isDuplicate: ", DuplicateInArray(Array2));
