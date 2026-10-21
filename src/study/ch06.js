// 배열

let arr1 = new Array();
let arr2 = [];

arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1.push(40);

arr2[0] = 10;
arr2[1] = 20;
arr2[2] = 30;
arr2.push(40, 50);

arr2 = [...arr2, ...arr1, 60]; // 새로운 배열안에 ...arr2 기존 배열을 통채로 가져올 수 있다. arr2 그냥 사용하면 배열 안에 배열이 되어 2차 배열이 된다.
console.log(arr1, arr2);

let result = [];

for (let i = 0; i < 100; i++) {
    result = [...result, i + 1];
}

console.log((result));