function getIntersectionNode(headA, headB) {
  let set = new Set();
  let curr = headB;
  let curr2 = headA;

  while (curr) {
    set.add(curr);
    curr = curr.next;
  }

  while (curr2) {
    if (set.has(curr2)) {
      return curr2;
    }
    curr2 = curr2.next;
  }

  return null;
}
