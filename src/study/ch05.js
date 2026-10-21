// 단축평가
const r1 = 10 && 20 && 30; // 앞의 결과가 하나라도 false면 false를 출력, true면 마지막 값이 출력
console.log(r1);
const r2 = 10 || 20 || 30; // 앞의 결과가 하나라도 true면 true를 출력, false면 마지막 값이 출력
console.log(r2);
const data = null;
const r3 = data ?? 20; // a ?? b, a가 false, null, undefind이면 b를 출력 (주로 null로 사용)
console.log(r3);

