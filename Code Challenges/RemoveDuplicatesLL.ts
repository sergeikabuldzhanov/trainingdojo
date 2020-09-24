function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let cur: ListNode | null = head;
  let prev = head;
  while (cur) {
    if (prev.val !== cur.val) prev.next = cur;
    cur = cur.next;
  }
  return head;
}
