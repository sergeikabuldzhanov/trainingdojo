/* 
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
#     def __lt__(self, other):
#         return self.val < other.val
class LinkedList:
    def __init__(self, head):
        self.head = head
    def __iter__(self):
        while self.head:
            yield self.head
            self.head = self.head.next

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        nodes = heapq.merge(*(LinkedList(node) for node in lists if node), key = lambda x: x.val)
        new_head = None
        prev = None
        for n in nodes:
            if prev:
                prev.next = n
            else:
                new_head = n
            prev = n
        return new_head
        
*/
