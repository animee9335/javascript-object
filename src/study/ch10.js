// 비동기 동작을 위한 Promise
// console.log(1);
// console.log(2);
// console.log(3);
//
// setTimeout(() => console.log(4), 1000);
// console.log(5);

// const p1 = new Promise((resolve, reject) => {
//     console.log("프로미스 생성");
//     resolve(10);
// });
//
// p1.then((result) => { // resolve는 작업이 성공했을 때 호출. 값이 결과로 전달, reject는 작업이 실패했을 때 호출. 에러가 전달
//     console.log(result);
//     return 30;
// }).then((result) => { 작업이 성공했을 때 호출
//     console.log(result);
// })
//
// const p2 = new Promise((resolve, reject) => {
//     console.log("프로미스 생성2");
//     resolve(20);
// });
//
// p2.then((result) => {
//     console.log(result);
//     return 40;
// }).then((result) => {
//     console.log(result);
// })
// 동기진행 p1 log -> resolve 10 -> p1 then ->p2 log -> resolve 20 -> p2 then
// 비동기진행 resolve 10 log -> return 30 -> resolve 20 log -> return 40 -> 30 log -> 40 log



new Promise((resolve, reject) => {
    resolve("1단계");
}).then((result) => {
    console.log(result);

    new Promise((resolve, reject) => {
        resolve("2단계");
    }).then((result) => {
        console.log(result);
    });
});










