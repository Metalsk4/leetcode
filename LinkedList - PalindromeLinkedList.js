const PalindroneLIkedList = (head) => {
  let fastPtr, slowPtr;
  if (head === null) {
    return true;
  }

  while (fastPtr != null && fastPtr.next != null) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
  }
  temp = reversedLinkedList(slowPtr);

  while (temp != null) {
    if (temp.val != head.val) {
      return false;
    } else {
      temp = temp.next;
      head = head.next;
    }
  }
  return false;
};

const ReverseLinkedList = (headList) => {
  let output = null;

  while (headList != null) {
    const tempNode = headList.next;
    headList.next = output;
    output = headList;
    headList = tempNode;
  }
  return output;
};
