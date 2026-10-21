/*
const student = [
    {
        name: "일일일",
        age: 11,
    },
    {
        name: "이이이",
        age: 22,
    },
]

const domStudent = [
    "<div>
        <div>이름: 일일일</div>
        <div>나이: 11</div>
    </div>",
    "<div>
        <div>이름: 이이이</div>
        <div>나이: 22</div>
    </div>",
]
*/

let students = [
    {
        name: "일일일",
        age: 11,
    },
    {
        name: "이이이",
        age: 22,
    },
]

students = [
    ...students,
    {
        name: "삼삼삼",
        age: 33,
    }

]

function mapFx(data) {
    return `
        <div>
            <div>이름: ${data.name}</div>
            <div>나이: ${data.age}</div>
        </div>
    `
}

const domStudent = students.map(mapFx);
console.log(domStudent);