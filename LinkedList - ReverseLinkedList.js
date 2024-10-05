class Node {
  next;
  val;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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

const LinkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

const displayList = (list) => {
  while (list != null) {
    console.log(list.val, "=v");
    list = list.next;
  }
};

console.log("current list: \n");
displayList(LinkedList);

const reversedLinkedList = ReverseLinkedList(LinkedList);
console.log("reversed list: \n");
displayList(reversedLinkedList);
