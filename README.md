# node_study

## NODE REPL 모드

### Read / Eval / Print / Loop

> 사용자가 입력한 내용을 읽고 -> 그결괏값을 구한다음 -> 결괏값을 출력 -> 이런과정을 계속 반복
> " In >> node / exit >> .exit

## Module
01. 모듈 내부의 내용을 외부로 공개해줘야 외부에서 사용할 수 있음
02. exports.모듈외부로 공개할 이름 = 모듈 내부에서의 이름
03. 내가 직접만든 모듈 / 이미 만들어져있는 모듈 :(코어모듈<내장> / 서드파티모듈<제3자가 만든 모듚>)


```jsx
// python import랑 비슷한듯? : 모듈을 로드해서 객체 하나를 리턴

// math_tools.js
function add(a, b) {
  return a + b;
}
exports.add = add;

// main.js
// python import랑 비슷한듯? : 모듈을 로드해서 객체 하나를 리턴
let m = require('./math-tools.js');

console.log(m.add(1, 2));
```

``` jsx
// 모듈 하나씩 공개하는 방법
exports.PI = 3.14;
exports.add = function add(a, b) { return a + b; };
exports.substract = function substract(a, b) { return a - b; };
exports.multiply = function multiply(a, b) { return a * b; };
exports.divide = function divide(a, b) { return a / b; };


// 모듈로 객체를 만들어서 공개하는 방법
const caculator = {
  PI: 3.14,
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
```