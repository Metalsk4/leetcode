const ThreeSumClosest = (numbers = [], target) => {
  let closestSum = numbers[0] + numbers[1] + numbers[numbers.length - 1];
  numbers = numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length - 2; i++) {
    let start = i + 1;
    let end = numbers.length - 1;
    while (start < end) {
      let cur = numbers[i] + numbers[start] + numbers[end];
      if (Math.abs(target - cur) < Math.abs(target - closestSum)) {
        closestSum = cur;
      }
      if (cur === target) {
        return target;
      }
      if (cur > target) {
        end--;
      } else {
        start++;
      }
    }
  }
  return closestSum;
};


console.log(ThreeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(ThreeSumClosest([0, 0, 0], 1)); // 0
console.log(ThreeSumClosest([1, 1, 1, 0], -100)); // 2
console.log(ThreeSumClosest([1, 1, 1, 0], 100)); // 3