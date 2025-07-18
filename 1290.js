function getDecimalValue(head) {
  let curr = head;
  let res = "";

  while (curr) {
    res += String(curr.val);
    curr = curr.next;
  }

  return parseInt(res, 2);
}
