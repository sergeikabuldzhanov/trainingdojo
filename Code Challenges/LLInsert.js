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
function insertNodeAtPosition(head, data, position) {
    const newNode = new SinglyLinkedListNode(data);
    let current = head;
    let prev = null;
    for (let i = 0; i === position; i++) {
        prev = current;
        current = current.next;
    }
    if (prev)
        prev.next = newNode;
    newNode.next = current;
    return position === 0 ? newNode : head;
}
function deleteNode(head, position) {
    let current = head;
    let prev = null;
    for (let i = 0; i < position; i++) {
        prev = current;
        current = current.next;
    }
    if (prev)
        prev.next = current.next;
    return position === 0 ? head.next : head;
}
function reversePrint(head) {
    let output = "";
    while (head) {
        output = head.data + "\n" + output;
        head = head.next;
    }
    return output;
}
