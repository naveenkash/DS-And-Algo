var strStack = [];
var strRevChar = "Coffee and Donut's";
var strRev = "";
function reverseStringUsingStack(str) {
  var k = 0;
  for (let i = 0; i < str.length; i++) {
    strStack.push(str[i]);
  }
  while (isEmpty()) {
    strRev += strStack.pop();
  }
  function isEmpty() {
    if (strStack.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  return strRev;
}
console.log("reverseStringUsingStack = ", reverseStringUsingStack(strRevChar));
