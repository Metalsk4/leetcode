const ReverseString = (chars = []) => {
  let start = 0;
  let end = chars.length - 1;
  while (start < end) {
    let temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;

    start++;
    end--;
  }
  return chars;
};

console.log(ReverseString(["a", "e", "i", "o", "u"]));
