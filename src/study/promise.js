// 1. Producer
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("finally");
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
    setTimeout(() => reject(`error! ${hen} => 🥚`), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen() // 전해주는 값이 하나뿐이라면 함수명만 적어도 된다.
    .then(getEgg)
    .catch(error => {
        return "🥖";
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
// .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));