class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null;
  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode | null;
  constructor() {
    this.head = null;
  }
}

function insertNodeAtTail(
  head: SinglyLinkedListNode,
  data: number
): SinglyLinkedListNode {
  const newNode = new SinglyLinkedListNode(data);
  if (head === null) {
    const newList = new SinglyLinkedList();
    newList.head = newNode;
    return newList.head;
  }
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

function insertNodeAtHead(head, data) {


}