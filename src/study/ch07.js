// 객체

class Student {
    name;
    age;
}

const s1 = new Student();
console.log(s1);

const s2 = {
    name: undefined,
    age: undefined,
};
console.log(s2)

class Teacher {
    name;
    age;

    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const t1 = new Teacher("일", 2);
console.log(t1.name);

const t2 = {
    name: "일일",
    age: 3,
};
console.log(t2.age);

// 참조 방법
console.log(t2["name"]);
console.log(t2["age"]);
const key = "name";
console.log(t2[key]);

t2["address"] = "부산시";
console.log(t2);

const t3 = {
    ...t2,
    gender: "남",
};
console.log(t3)






