// const validPalindrome = (incomingString = "") => {
//   let newString = "";
//   for (let index = 0; index < incomingString.length; index++) {
//     //test for alpha numeric
//     if (!/[^a-zA-Z0-9]/.test(incomingString.charAt(index))) {
//       newString += incomingString.charAt(index);
//     }
//   }
//   newString = newString.toLowerCase();

//   console.log("newString", newString);

//   let start = 0;
//   let end = newString.length - 1;
//   while (start < end) {
//     if (newString.charAt(start) !== newString.charAt(end)) {
//       return false;
//     }
//     start++;
//     end--;
//   }
//   return true;
// };

const checkIsAlphaNumberic = (char) => {
  return !/[^a-zA-Z0-9]/.test(char);
};

const validPalindrome = (incomingString = "") => {
  incomingString = incomingString.toLowerCase();
  let start = 0;
  let end = incomingString.length - 1;
  while (start < end) {
    if (
      checkIsAlphaNumberic(incomingString.charAt(start)) &&
      checkIsAlphaNumberic(incomingString.charAt(end))
    ) {
      if (incomingString.charAt(start) != incomingString.charAt(end)) {
        return false;
      }
      start++;
      end--;
    } else {
      if (!checkIsAlphaNumberic(incomingString.charAt(start))) {
        start++;
      }
      if (!checkIsAlphaNumberic(incomingString.charAt(end))) {
        end--;
      }
    }
  }
  return true;
};

const string1 = "A man, a plan. a canal: Panama";
const string2 = "race a car";

console.log("validPalindrome - " + string1 + " : ", validPalindrome(string1));
console.log("validPalindrome - " + string2 + " : ", validPalindrome(string2));
