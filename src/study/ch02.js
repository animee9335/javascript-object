function main() {
    console.log("메인함수 호출")
    let student = {
        name: "일일일",
        age: 29,
        address: ["부산시", "부산진구", "부암동",],
    };
    console.log(student);

    // 대입할 때 타입이 정해진다.
    let student1 = 1.0;
    let student2 = null;
    console.log(typeof student1);
    console.log(typeof student2);

    const PI = 3.14;
}

main();