function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function removeElements(head, val) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return dummy.next;
}
