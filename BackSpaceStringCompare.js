const BackSpaceStringCompare = (str1 = "", str2 = "") => {
  const stack1 = [];
  const stack2 = [];
  for (const ch1 of str1) {
    if (ch1 === "#") {
      if (!!stack1.at(-1)) {
        stack1.pop();
      }
    } else {
      stack1.push(ch1);
    }
  }
  for (const ch2 of str2) {
    if (ch2 === "#") {
      if (!!stack2.at(-1)) {
        stack2.pop();
      }
    } else {
      stack2.push(ch2);
    }
  }
  return stack1.join() == stack2.join();
};

console.log("ab#c ===", " ad#c: ", BackSpaceStringCompare("ab#c", "ad#c"));
console.log("a#c ===", " ad#c: ", BackSpaceStringCompare("a#c", "ad#c"));

console.log("ab## ===", " c#d#: ", BackSpaceStringCompare("ab##", "c#d#"));
console.log("a#c ===", " b: ", BackSpaceStringCompare("a#c", "b"));
