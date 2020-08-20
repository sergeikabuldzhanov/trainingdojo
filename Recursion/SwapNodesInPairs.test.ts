/* 
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.


class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        first = head
        second = head.next
        first.next, second.next = self.swapPairs(second.next), first
        return second
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function swapPairs(head: ListNode | null) {
  if (head === null) return head;
  if (head.next === null) return head;
  let second = head.next;
  [head.next, second.next] = [swapPairs(second.next), head];
  return second
}
