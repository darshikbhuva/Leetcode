function hasCycle(head) {
  let set = new Set();
  let curr = head;

  while (curr) {
    if (set.has(curr)) {
      return true;
    } else {
      set.add(curr);
      curr = curr.next;
    }
  }

  return false;
}

function hasCycle2(head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast === null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}
