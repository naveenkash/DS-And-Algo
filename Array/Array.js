var arrayForBubbleSort = [3, 5, 9, 1, 0, 16, 2, 2, -1, 0];

function bubbleSort(arr) {
  var length = arr.length - 1;
  for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("Bubble Sort Array", bubbleSort(arrayForBubbleSort));

var arrayForSelectionSort = [8, 5, 1, 0, -4, 10, 2, 5];

function selectionSort(arr) {
  var minIndex,
    temp,
    length = arr.length - 1;
  for (let i = 0; i <= length; i++) {
    minIndex = i;
    for (let j = i + 1; j <= length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log("selection Sort", selectionSort(arrayForSelectionSort));

var arrayForInsertionSort = [5, 8, 1, 0, -4, -1, 2, 6];

function insertionSort(arr) {
  var length = arr.length - 1;
  for (let i = 1; i <= length; i++) {
    var temp = arr[i],
      j = i;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
console.log("insertion Sort Array", insertionSort(arrayForInsertionSort));

var arrayForMergeSort = [9, 4, 1, 3, 7, -3, 6];

function mergeSortArray(arr) {
  var length = arr.length;
  if (length < 2) {
    return arr;
  }
  var midIndex = Math.floor(length / 2),
    leftArray = arr.slice(0, midIndex),
    rightArray = arr.slice(midIndex),
    left = mergeSortArray(leftArray),
    right = mergeSortArray(rightArray);

  return mergeArray(left, right);
}

function mergeArray(left, right) {
  var tempArr = [];
  var lLen = left.length - 1,
    rLen = right.length - 1,
    l = 0,
    r = 0;
  while (l <= lLen && r <= rLen) {
    if (left[l] < right[r]) {
      tempArr.push(left[l]);
      l++;
    } else {
      tempArr.push(right[r]);
      r++;
    }
  }
  return tempArr.concat(left.slice(l).concat(right.slice(r)));
}
console.log("mergeSort Array", mergeSortArray(arrayForMergeSort));

var arrayForQuicksortSort = [3, 9, 7, 4, 1, 80, 5, -1, 2];

function quicksortArray(arr, left, right) {
  var pivot = right,
    partitionIndex;

  if (left < right) {
    partitionIndex = partitionQuicksort(arr, pivot, left, right);
    quicksortArray(arr, left, partitionIndex - 1);
    quicksortArray(arr, partitionIndex + 1, right);
  }
  return arr;
}
function partitionQuicksort(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swapQuicksort(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swapQuicksort(arr, partitionIndex, right);
  return partitionIndex;
}
function swapQuicksort(arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
console.log(
  "quicksort Array",
  quicksortArray(arrayForQuicksortSort, 0, arrayForQuicksortSort.length - 1)
);

var arrayForHeapSort = [0, 2, 3, 4, 8, 5, 6, 1, 7];
arrayForHeapSort.unshift(null); // adding null at index 0 for easy calculations

function heapSort(arr) {
  let n = arr.length;
  buildMaxHeap();
  while (n > 1) {
    swap(1, n - 1); // n - 1 is last index in array and 0 is first element to swap 
    n = n - 1; // reducing n size so it's not iterated over element from end again
    heapifyDown(1); // making max heap again after swap element
  }
  function buildMaxHeap() {
    let startIdx = Math.floor(n / 2);
    for (let i = startIdx; i >= 1; i--) {
      heapifyDown(i);
    }
  }
  function heapifyDown(i) {
    let largest = i,
      left = 2 * i,
      right = 2 * i + 1;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      swap(i, largest);
      heapifyDown(largest);
    }
  }
  function swap(index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  return arr
}
console.log('Heap Sort ', heapSort(arrayForHeapSort));
