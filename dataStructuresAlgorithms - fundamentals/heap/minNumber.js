class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    peek() {
        return this.heap[0];
    }

    bubbleUp(idx) {
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] >= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

}

const heap = new MinHeap();
const arr = [5, 2, 1, 4, 3];

for (let num of arr) {
    heap.push(num);
}

console.log(heap.peek());