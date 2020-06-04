
let maxheap = [];
maxheap[0] = null;
// Setting index 0 value as null for easy calulation. Starting index from 1
function maxHeap() {

    function insert(data) {
        maxheap.push(data);
        heapifyUp();
    }

    function extractMax() {
        let max = maxheap[1];
        maxheap[1] = maxheap.pop();
        heapifyDown(1);
        return max;
    }

    function heapifyUp() {
        let index = maxheap.length - 1;
        while (index > 1) {
            let element = maxheap[index],
                parentIndex = Math.floor(index / 2),
                parent = maxheap[parentIndex];
            if (parent >= element) return
            maxheap[index] = parent;
            maxheap[parentIndex] = element;
            index = parentIndex;
        }
    }

    function heapifyDown(index) {
        let leftChild = 2 * index,
            rightChild = 2 * index + 1,
            largest = index, length = maxheap.length;
        // if left child is greater than parent
        if (leftChild <= length && maxheap[leftChild] > maxheap[largest]) {
            largest = leftChild;
        }
        // if right child is greater than parent
        if (rightChild <= length && maxheap[rightChild] > maxheap[largest]) {
            largest = rightChild;
        }

        if (largest !== index) {
            let temp = maxheap[largest];
            maxheap[largest] = maxheap[index];
            maxheap[index] = temp;
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
console.log('Max Heap =', maxheap);
