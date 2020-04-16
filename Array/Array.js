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
console.log("Bubble Sort", bubbleSort(arrayForBubbleSort));

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
console.log("insertion Sort", insertionSort(arrayForInsertionSort));

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
console.log("mergeSortArray", mergeSortArray(arrayForMergeSort));
