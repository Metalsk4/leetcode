const palindromeNumber = (number) => {
  if (number < 0 || (number !== 0 && number % 10 === 0)) {
    return false;
  }
  //   number = `${number}`;
  //   for (let index = 0; index < number.length / 2; index++) {
  //     if (number[index] !== number[number.length - 1 - index]) {
  //       return false;
  //     }
  //   }
  //   return true;
  let reverse = 0;
  let actualNum = number;
  while (number !== 0) {
    let rem = number % 10;
    number = Math.floor(number / 10);
    reverse = reverse * 10 + rem;
  }

  return reverse === actualNum;
};

console.log("palindromeNumber", palindromeNumber(1223221));
