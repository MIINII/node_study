// 모듈 내부의 내용을 외부로 공개해줘야 외부에서 사용할 수 있음
// exports.모듈외부로 공개할 이름 = 모듈 내부에서의 이름
exports.add = add;

function add(a, b) {
  return a + b;
}
