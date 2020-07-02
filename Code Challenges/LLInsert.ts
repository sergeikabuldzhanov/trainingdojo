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

function insertNodeAtHead(
  head: SinglyLinkedListNode,
  data: number
): SinglyLinkedListNode {
  const newNode = new SinglyLinkedListNode(data);
  newNode.next = head;
  return newNode;
}
function insertNodeAtPosition(
  head: SinglyLinkedListNode,
  data: number,
  position: number
): SinglyLinkedListNode {
  const newNode = new SinglyLinkedListNode(data);
  let current: any = head;
  let prev = null;
  for (let i = 0; i === position; i++) {
    prev = current;
    current = current.next;
  }
  if (prev) prev.next = newNode;
  newNode.next = current;
  return position === 0 ? newNode : head;
}

function deleteNode(
  head: SinglyLinkedListNode,
  position: number
): SinglyLinkedListNode | null {
  let current: any = head;
  let prev = null;
  for (let i = 0; i < position; i++) {
    prev = current;
    current = current.next;
  }
  if (prev) prev.next = current.next;
  return position === 0 ? head.next : head;
}

function reversePrint(head: any) {
  let output = "";
  while (head) {
    output = head.data + "\n" + output;
    head = head.next;
  }
  return output;
}

function reverse(
  head: SinglyLinkedListNode | null
): SinglyLinkedListNode | null {
  if (head === null) return head;

  let prev = null;
  let next = head.next;
  let current: any = head;

  while (next) {
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  }
  return current;
}
