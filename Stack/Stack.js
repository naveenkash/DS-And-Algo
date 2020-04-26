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
console.log(
  "reverseStringUsingStack = ",
  strRevChar,
  "= ",
  reverseStringUsingStack(strRevChar)
);

function twoStacksInOneArray(size) {
  var top1 = -1,
    top2 = size;
  var arr = [];
  function push1(num) {
    if (top1 < top2 - 1) {
      top1++;
      arr[top1] = num;
    } else {
      console.log("Stack Overflow");
      return;
    }
  }
  function push2(num) {
    if (top1 < top2 - 1) {
      top2--;
      arr[top2] = num;
    } else {
      console.log("Stack Overflow");
      return;
    }
  }
  function pop1() {
    var popValue;
    if (top1 >= 0) {
      popValue = arr[top1];
      top1--;
      return popValue;
    } else {
      console.log("Stack Underflow");
      return;
    }
  }
  function pop2() {
    var popValue;
    if (top2 < size) {
      popValue = arr[top2];
      top2++;
      return popValue;
    } else {
      console.log("Stack Underflow");
      return;
    }
  }
  twoStacksInOneArray.push1 = push1;
  twoStacksInOneArray.push2 = push2;
  twoStacksInOneArray.pop1 = pop1;
  twoStacksInOneArray.pop2 = pop2;
}

twoStacksInOneArray(10);
// twoStacksInOneArray.push1(1);
// twoStacksInOneArray.push2(2);
// twoStacksInOneArray.pop1();
// twoStacksInOneArray.pop2();

function areParenthesesBanlanaced(exp) {
  var stack = [],
    expSplit = exp.split("");
  for (let i = 0; i < expSplit.length; i++) {
    var parenthesis = expSplit[i];
    if (parenthesis == "[" || parenthesis == "{" || parenthesis == "(") {
      stack.push(parenthesis);
    } else if (parenthesis == "]" || parenthesis == "}" || parenthesis == ")") {
      if (stack.length <= 0) {
        return "Not Balanced";
      }
      var popValue = stack.pop();
      if (popValue == "[" || popValue == "(" || popValue == "{") {
      } else {
        return "Not Balanced";
      }
    }
  }

  if (stack.length <= 0) {
    return "Balanced";
  } else {
    return "Not Balanced";
  }
}
var exp = "[{(())}][]";
console.log("Are Parentheses Balanced =", areParenthesesBanlanaced(exp));

function reverseStringUsingStackRecursion(str) {
  if (str == "") {
    return str;
  } else {
    return reverseStringUsingStackRecursion(str.substr(1)) + str.charAt(0);
  }
}
console.log(
  "reverse String Using Stack Recursion =",
  strRevChar,
  "=",
  reverseStringUsingStackRecursion(strRevChar)
);
