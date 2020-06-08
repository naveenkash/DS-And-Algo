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
  "reverse String Using Stack = ",
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
    bracket = "";
  for (let i = 0; i < exp.length; i++) {
    bracket = exp.charAt(i);
    if (bracket == "[" || bracket == "{" || bracket == "(") {
      stack.push(bracket);
    }
    switch (bracket) {
      case "]":
        var stackTop = stack.pop();
        if (stackTop == "(" || stackTop == "{" || stackTop == undefined) {
          return false;
        }
        break;
      case "}":
        var stackTop = stack.pop();
        if (stackTop == "[" || stackTop == "(" || stackTop == undefined) {
          return false;
        }
        break;
      case ")":
        var stackTop = stack.pop();
        if (stackTop == "{" || stackTop == "[" || stackTop == undefined) {
          return false;
        }
        break;
    }
  }

  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}
var exp = "[()]{}{[()()]()}";
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

function sortStackUsingRecursion(stack) {
  if (stack.length > 0) {
    var temp = stack.pop();
    sortStackUsingRecursion(stack);
    sortStackInsert(stack, temp);
  }
}

function sortStackInsert(stack, elem) {
  //Base case check if stack is empty or elem is greater than stack top elem
  if (stack.length == 0 || elem > stack[stack.length - 1]) {
    stack.push(elem);
    return;
  } else {
    var temp = stack.pop();
    sortStackInsert(stack, elem);
    stack.push(temp);
  }
}
var sortStack = [6, 9, 2, 5, 1, 0, -3];
sortStackUsingRecursion(sortStack);
console.log("sort Stack Using Recursion", sortStack);

function sortStackUsingTempArray(stack) {
  var temp = [],
    pop;
  while (stack.length > 0) {
    pop = stack.pop();
    while (temp.length > 0 && temp[temp.length - 1] > pop) {
      stack.push(temp.pop());
    }
    temp.push(pop);
  }
  return temp;
}
console.log(
  "sort Stack Using Temp Array",
  sortStackUsingTempArray([9, 0, 6, 2, 1, 10, 4, 3, -8])
);
