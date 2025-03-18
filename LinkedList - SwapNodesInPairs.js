const createLinkedList = require("./utils/createLinkedList")



const SwapNodeInPairs = (head) => {
    if(head == null){
        return null
    }

    let cur = head;

    while(cur !== null && cur.next !== null){
        let temp = cur.data;
        cur.data = cur.next.data;
        cur.next.data = temp;

        cur = cur.next.next
    }

    return head;
}

const list1 = createLinkedList([1,2,3,4])

let swappedNodes = SwapNodeInPairs(list1)
console.log(swappedNodes)




