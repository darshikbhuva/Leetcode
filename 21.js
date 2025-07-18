function mergeTwoLists(list1, list2) {
  let ans = new ListNode();
  let ansList = ans;
  let curr1 = list1;
  let curr2 = list2;

  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      ans.next = curr1;
      curr1 = curr1.next;
    } else {
      ans.next = curr2;
      curr2 = curr2.next;
    }

    ans = ans.next;
  }

  if (!curr1) {
    ans.next = curr2;
  }

  if (!curr2) {
    ans.next = curr1;
  }

  return ansList.next;
}
