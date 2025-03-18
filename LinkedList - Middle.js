const createLinkedList = require("./utils/createLinkedList");

const FIndMiddle = (head) => {
  if (head === null) {
    return null;
  }
  let fastPtr = head;
  while (fastPtr !== null && fastPtr?.next !== null) {
    fastPtr = fastPtr.next.next;
    head = head.next;
  }

  return head.data;
};

const list1 = createLinkedList([1, 2, 3, 4, 5]);
const list2 = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log(FIndMiddle(list1));
console.log(FIndMiddle(list2));
