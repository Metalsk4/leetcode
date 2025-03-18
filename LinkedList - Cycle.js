const LinkedListCycle = (head) => {
  if (head == null) return false;
  let slowPtr = head;
  let fastPtr = head.next;

  while (fastPtr != null && fastPtr.next != null) {
    if (fastPtr.val === slowPtr.val) {
      return true;
    }
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }
  return false;
};
