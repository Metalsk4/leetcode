const createLinkedList = require("./utils/createLinkedList")
//todo: solve the bugs

class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

const PartitionList = (head, x) => {
    const first = new Node(0)
    let firstPtr = first
    const second = new Node(0)
    let secondPtr = second


    while (head !== null) {
       
        if (head.data < x) {
            firstPtr.next = head
            firstPtr = firstPtr.next
        } else {
            secondPtr.next= head;
            secondPtr = secondPtr.next;
        }

        head = head.next
    }

    secondPtr.next = null
    firstPtr.next = second.next

    return first.next
}




const printList = (root) => {
    let list = ""
    while(root !== null){
            list+= root.data + " -> "
            root = root.next
    }

    list += " none"
    console.log(list)
}

const List1 = createLinkedList([1,4,3,2,5,2])
List1.printList()

const sol1 = PartitionList(List1,3)
printList(sol1)


