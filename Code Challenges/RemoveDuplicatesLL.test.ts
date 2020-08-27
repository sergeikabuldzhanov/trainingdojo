class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const count: Map<number, number> = new Map();
  while (head) {
    if (count.has(head.val)) {
      count.set(head.val, count.get(head.val) + 1);
    } else {
      count.set(head.val, 1);
    }
    head = head.next;
  }

  let prev: ListNode | null = null;
  let new_head: ListNode | null = null;
  for (let [key, value] of count) {
    if (value > 1) continue;
    const node = new ListNode(key);
    if (prev) {
      prev.next = node;
    } else {
      new_head = node;
    }
    prev = node;
  }
  return new_head;
}
