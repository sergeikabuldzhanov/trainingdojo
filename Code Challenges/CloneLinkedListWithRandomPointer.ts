class LLNode {
  val: number;
  next: LLNode | null;
  random: LLNode | null;
  constructor(val: number, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

function copyRandomList(head: LLNode | null): LLNode | null {
  const nodes = new Map();

  // construct mapping and the copy Linked list without the random pointers
  let old_node = head;
  let prev_new_node: LLNode | null = null;
  while (old_node) {
    const new_node = new LLNode(old_node.val);
    nodes.set(old_node, new_node);
    if (prev_new_node) {
      prev_new_node.next = new_node;
    }
    prev_new_node = new_node;
    old_node = old_node.next;
  }

  // do a secont pass and attach the random pointers using the mapping
  let current = head;
  while (current) {
    if (current.random) nodes.get(current).random = nodes.get(current.random);
    current = current.next;
  }

  return nodes.get(head);
}
