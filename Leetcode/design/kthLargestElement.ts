class KthLargest {
    private k: number;
    private heap: number[];

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = [];

        for (const num of nums) {
            this.add(num);
        }

    }

    add(val: number): number {

        if (this.heap.length < this.k) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }
        else if (val > this.heap[0]) {
            this.heap[0] = val;
            this.bubbleDown(0);
        }

        return this.heap[0];
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parent]) break;
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        const n = this.heap.length;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < n && this.heap[left] < this.heap[smallest])  {
                smallest = left;
            }
            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }


}