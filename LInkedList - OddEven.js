const createLinkedList = require("./utils/createLinkedList");

// class Node {
//   data;
//   next;
//   constructor(val) {
//     this.data = val;
//     this.next = next;
//   }
// }

const OddEvenLinkedList = (root) => {
  if (root === null) {
    return null;
  }
  let odd = root;
  let even = root.next;
  let tempNode = even;

  //   console.log("tempNode", tempNode);
  //   console.log("odd", odd);
  //   console.log("even", even);

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;

    even = even.next;
  }

  odd.next = tempNode;
  return root;
};

const list1 = createLinkedList([1, 2, 3, 4, 5]);
list1.printList();

oddevenList = OddEvenLinkedList(list1);
oddevenList.printList();
