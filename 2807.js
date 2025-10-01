let head = [18, 6, 10, 3];

function insertGreatestCommonDivisors(head) {
  let curr1 = head;
  let head1 = [];

  while (curr1) {
    head1.push(curr1.val);
    curr1 = curr1.next;
  }
  console.log(head1);

  let temp = [];

  for (let i = 0; i < head1.length - 1; i++) {
    temp.push(head1[i]);
    let res = GCD(head1[i], head1[i + 1]);
    temp.push(res);
  }

  temp.push(head1[head1.length - 1]);

  let dummy = new ListNode(0);
  let curr = dummy;

  for (let val of temp) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }

  return dummy.next;
}

const GCD = (a, b) => (a % b === 0 ? b : GCD(b, a % b));

console.log(insertGreatestCommonDivisors(head));
