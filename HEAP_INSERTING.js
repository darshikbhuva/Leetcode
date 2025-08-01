class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1; // based on zero index array
  }

  getRightChildIndex(i) {
    return 2 * i + 2; // based on zero index array
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2); // based on zero index array
  }

  insert(val) {
    this.heap.push(val);
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIndex = this.getParentIndex(i);
      if (this.heap[i] < this.heap[parentIndex]) {
        [this.heap[i], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[i],
        ];
        i = parentIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new MinHeap();

heap.insert(5);
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(1);

console.log(heap);
