async function getRequest() {
    try {
        const response = await fetch("http://localhost:8080/servlet_study_war_exploded/first"); // 해당 링크에 응답
        const responseData = await response.text(); // 링크의 텍스트 데이터를 가져옴
        console.log(responseData);

    } catch (error) {
        console.log(error);
    }
}

getRequest();

function getRequset2() {
    fetch("http://localhost:8080/servlet_study_war_exploded/first")
        .then(response => response.text()
            .then(responseData => console.log(responseData)));
}

getRequset2();