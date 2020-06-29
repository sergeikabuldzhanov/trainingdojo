"use strict";
class SinglyLinkedListNode {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
}
function insertNodeAtTail(head, data) {
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
    const newNode = new SinglyLinkedListNode(data);
    newNode.next = head;
    return newNode;
}
