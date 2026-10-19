console.log("출력!");

let name = "장서현";
console.log(name);

name = 123;
console.log(name);

name = [1, 2, 3, 4, 5];
console.log(name);

name = {
    "a": [1, 2, 3, 4, 5],
    "b": "장서현",
    "c": 1234
};

console.log(name);
console.log(name.b);
console.log(name["c"]);

let data = [
    {
        class1: {
            student1: {
                id: 1,
                object: {
                    name: "일일일",
                    adress: "서울"
                },
                createdAt: new Date("2025-01-01")
            },
            student2: {
                id: 2,
                object: {
                    name: "이이이",
                    adress: "서울"
                },
                createdAt: new Date("2025-01-01")
            }
        }
    },
    {
        class2: {
            student1: {
                id: 1,
                object: {
                    name: "일일일",
                    adress: "부산"
                },
                createdAt: new Date("2025-01-01")
            },
            student2: {
                id: 2,
                object: {
                    name: "이이이",
                    adress: "부산"
                },
                createdAt: new Date("2025-01-01")
            }
        }
    }
]

console.log(data);
console.log(JSON.stringify(data));

console.log(data[0].class1.student1.object.name);
console.log(data[1].class2.student2.object.name);