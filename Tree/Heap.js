
let heap = [];
heap[0] = null;
// Setting index 0 value as null for easy calulation. Starting index from 1
function maxHeap() {

    function insert(data) {
        heap.push(data);
        heapifyUp();
    }

    function extractMax() {
        let max = heap[1];
        heap[1] = heap.pop();
        heapifyDown(1);
        return max;
    }

    function heapifyUp() {
        let index = heap.length - 1;
        while (index > 1) {
            let element = heap[index],
                parentIndex = Math.floor(index / 2),
                parent = heap[parentIndex];
            if (parent >= element) return
            heap[index] = parent;
            heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    function heapifyDown(index) {
        let leftChild = 2 * index,
            rightChild = 2 * index + 1,
            largest = index, length = heap.length;
        // if left child is greater than parent
        if (leftChild <= length && heap[leftChild] > heap[largest]) {
            largest = leftChild;
        }
        // if right child is greater than parent
        if (rightChild <= length && heap[rightChild] > heap[largest]) {
            largest = rightChild;
        }

        if (largest !== index) {
            let temp = heap[largest];
            heap[largest] = heap[index];
            heap[index] = temp;
            heapifyDown(largest);
        }
    }

    maxHeap.insert = insert;
    maxHeap.extractMax = extractMax;
}
maxHeap();
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(6);
maxHeap.insert(9);
maxHeap.insert(3);
maxHeap.insert(3);
maxHeap.insert(1);
// console.log(maxHeap.extractMax());
console.log('Max Heap =', heap);
