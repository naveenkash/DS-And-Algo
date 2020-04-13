var arrayForBubbleSort = [3, 5, 9, 1, 0, 16, 2, 2, -1, 0];

function bubbleSort(arr) {
  var lastUnsorted = arr.length;
  for (let i = 0; i < lastUnsorted; i++) {
    for (let j = 0; j < lastUnsorted; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log("Bubble Sort", bubbleSort(arrayForBubbleSort));
