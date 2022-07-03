// 모듈 하나씩 공개하는 방법
// exports.PI = 3.14;
// exports.add = function add(a, b) {
//   return a + b;
// };
// exports.substract = function substract(a, b) {
//   return a - b;
// };
// exports.multiply = function multiply(a, b) {
//   return a * b;
// };
// exports.divide = function divide(a, b) {
//   return a / b;
// };


// 모듈로 객체를 만들어서 공개하는 방법
const caculator = {
  PI: 3.14,
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};


// 모듈로 객체 만들어서 공개하는 경우 꼭 module.exports 사용!!!
module.exports = caculator;
