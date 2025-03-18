const creteLinkedlist = require("./utils/createLinkedList");

const MergeTwoSorted = (root1, root2) => {
  let temp = creteLinkedlist([0]);
  let outputList = temp;
  while (root1 !== null && root2 !== null) {
    if (root1.data > root2.data) {
      temp.next = root2;
      root2 = root2.next;
    } else {
      temp.next = root1;
      root1 = root1.next;
    }
    temp = temp.next;
  }
  if (root2 === null) temp.next = root1;
  if (root1 === null) temp.next = root2;

  return outputList.next;
};

const list1 = creteLinkedlist([1, 2, 4]);
console.log("list1");
list1.printList();

const list2 = creteLinkedlist([1, 3, 4]);
console.log("\nlist2");
list2.printList();

const mergeList = MergeTwoSorted(list1, list2);
console.log("\nmerged list");
mergeList.printList();
