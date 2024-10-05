const BinarySearch = (arr = [], target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid;
    }
  }
  if (arr[start] === target) {
    return start;
  }
  return -1;
};

const arr1 = [-1, 0, 3, 5, 9, 12];
const arr2 = [12, 92, 99, 102, 205, 624];

console.log(`arr: [${arr1}], target: 9 found at: `, BinarySearch(arr1, 9));
console.log(`arr: [${arr2}], target: 92 found at`, BinarySearch(arr2, 92));
