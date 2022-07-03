# node_study

## NODE REPL 모드

### Read / Eval / Print / Loop

> 사용자가 입력한 내용을 읽고 -> 그결괏값을 구한다음 -> 결괏값을 출력 -> 이런과정을 계속 반복
> " In >> node / exit >> .exit

## Module

```jsx
// python import랑 비슷한듯? : 모듈을 로드해서 객체 하나를 리턴

// math_tools.js
function add(a, b) {
  return a + b;
}

// main.js
// python import랑 비슷한듯? : 모듈을 로드해서 객체 하나를 리턴
let m = require('./math-tools.js');

console.log(m.add(1, 2));
```
