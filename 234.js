function isPalindrome(head) {
  //finding the middle element
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse the second half of list

  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //checking the palindrom

  let firstList = head;
  let secondList = prev;

  while (secondList) {
    if (firstList.val != secondList.val) {
      return false;
    }

    firstList = firstList.next;
    secondList = secondList.next;
  }

  return true;
}
