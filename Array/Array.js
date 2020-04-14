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
console.log("selectionSort", selectionSort(arrayForSelectionSort));
