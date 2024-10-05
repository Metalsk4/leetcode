const ReverseInteger = (number) => {
  const isNegative = number < 0;
  let reversedNumber = 0;

  number = Math.abs(number);

  while (number !== 0) {
    let rem = number % 10;
    number = Math.floor(number / 10);
    reversedNumber = reversedNumber * 10 + rem;
  }
  if (isNegative) {
    return -reversedNumber;
  }
  return reversedNumber;
};

console.log("ReverseInteger(6372663762): ", ReverseInteger(6372663762));
console.log("ReverseInteger(-12386128736): ", ReverseInteger(-12386128736));
