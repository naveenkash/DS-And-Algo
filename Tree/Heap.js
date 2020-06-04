
let maxheap = [], minheap = [];
maxheap[0] = null;
minheap[0] = null;
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

function minHeap() {
    function insert(value) {
        minheap.push(value);
        heapifyUp();
    }
    function heapifyUp() {
        let index = minheap.length - 1;
        while (index > 1) {
            let element = minheap[index],
                parentIndex = Math.floor(index / 2),
                parent = minheap[parentIndex];
            if (parent <= element) return
            minheap[index] = parent;
            minheap[parentIndex] = element;
            index = parentIndex;
        }

    }

    function extractMin() {
        let min = minheap[1];
        minheap[1] = minheap.pop();
        heapifyDown(1);
        return min;
    }

    function heapifyDown(index) {
        let left = 2 * index,
            right = 2 * index + 1,
            length = minheap.length,
            smallest = index;
        // if right child is smaller than parent
        if (left <= length && minheap[left] < minheap[smallest]) {
            smallest = left;
        }
        // if right child is smaller than parent
        if (right <= length && minheap[right] < minheap[smallest]) {
            smallest = right
        }

        if (smallest !== index) {
            let temp = minheap[smallest];
            minheap[smallest] = minheap[index];
            minheap[index] = temp;
            heapifyDown(smallest)
        }
    }
    minHeap.insert = insert;
    minHeap.extractMin = extractMin;
}

minHeap();
minHeap.insert(1);
minHeap.insert(2);
minHeap.insert(0);
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(1);
minHeap.insert(-3);
// console.log(minHeap.extractMin());
console.log('Min Heap =', minheap);