class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
  append(data) {
    const newNode = new Node(data);

    let current = this;
    if (current === null) {
      current = newNode;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this;
    let listStr = "";
    while (current) {
      listStr += current.data + " -> ";
      current = current.next;
    }
    listStr += "None";
    console.log(listStr);
  }
}

// Example usage:
const createLinkedListWithArray = (array = []) => {
  let linkedList = null;
  array.forEach((item, index) => {
    if (index === 0) {
      linkedList = new LinkedList(item);
    } else {
      linkedList.append(item);
    }
  });
  return linkedList;
};

module.exports = createLinkedListWithArray;
