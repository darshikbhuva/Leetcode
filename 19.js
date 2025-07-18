function removeNthFromEnd(head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}
