//1.
var sorted = bubbleSort([10, 11, 12]);
var sortedStr = JSON.stringify(sorted);
var whatItShouldBe = [10, 11, 12];
var whatItShouldBeStr = JSON.stringify(whatItShouldBe);

console.log(sortedStr == whatItShouldBeStr);

//2.
var sorted = bubbleSort([15, 15, 10, 30]);
var sortedStr = JSON.stringify(sorted);
var whatItShouldBe = [10, 15, 15, 30];
var whatItShouldBeStr = JSON.stringify(whatItShouldBe);

console.log(sortedStr == whatItShouldBeStr);

//3.
var sorted = bubbleSort([15, -1, 7]);
var sortedStr = JSON.stringify(sorted);
var whatItShouldBe = [-1, 7, 15];
var whatItShouldBeStr = JSON.stringify(whatItShouldBe);

console.log(sortedStr == whatItShouldBeStr);

function swap(arr, a, b) {
  //make a temporary variable store arr[a] into it so you don't lose it

  var arrCopy = arr.slice(0);

  var temp = arrCopy[a]; //7

  arrCopy[a] = arrCopy[b];

  arrCopy[b] = temp;

  return arrCopy;
}

function bubbleSort(arr) {
  var arrCopy = arr.slice(0);

  for (var i = 0; i < arrCopy.length; i++) {
    for (var j = 0; j < arrCopy.length; j++) {
      if (arrCopy[j] > arrCopy[j + 1]) {
        arrCopy = swap(arrCopy, j, j + 1);
      }
    }
  }
}
bubbleSort([15, 15, 10, 30]);
