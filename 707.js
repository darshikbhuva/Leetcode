function Node(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  let count = 0;
  let curr = this.head;

  if (index >= this.size || index < 0) {
    return -1;
  }

  while (count !== index) {
    curr = curr.next;
    count++;
  }

  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    newNode.next = null;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.next = null;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);
  let count = 0;
  let curr = this.head;

  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    while (count !== index - 1) {
      curr = curr.next;
      count++;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  let count = 0;
  let curr = this.head;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    while (count !== index - 1) {
      curr = curr.next;
      count++;
    }

    curr.next = curr.next.next;
  }

  this.size--;
};
