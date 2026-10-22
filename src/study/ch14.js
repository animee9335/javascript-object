// async, await

async function getUserById(id) {
    const users = [
        {id: 1, username: "user1"},
        {id: 2, username: "user2"},
        {id: 3, username: "user3"},
    ];

    const foundUser = users.find(user => user.id === id); // 하나만 찾을 수 있다, filter를 사용하면 배열로 찾을 수 있다.
    if (!foundUser) {
        throw new Error("id와 일치하는 사용자가 존재하지 않습니다.");
    }

    return foundUser;
}

async function getPostsByUserName(username) {
    const posts = [
        {id: 1, content: "내용1", username: "user1"},
        {id: 2, content: "내용2", username: "user2"},
        {id: 3, content: "내용3", username: "user1"},
        {id: 4, content: "내용4", username: "user2"},
        {id: 5, content: "내용5", username: "user1"},
    ];

    const foundPosts = posts.filter(post => post.username === username);
    if (!foundPosts.length) {
        throw new Error("해당 username으로 검색된 게시글이 없습니다.");
    }

    return foundPosts;
}

getUserById(2)
    .then(foundUser => {
        getPostsByUserName(foundUser.username)
            .then(foundPosts => {
                console.log(foundPosts);
            })
            .catch(console.error);
    })
    .catch(console.error);


// async 비동기끼리 동기 동작하게 만든다.
// await는 비동기에 사용할 수 있지만 setTime에는 사용못한다. promise만 가능.
// 또한 async 내부에서만 await을 사용할 수 있다.
async function run() {
    try {
        // let value = await new Promise((rs, rj) => { // await은 resolve의 값을 리턴한다. 없다면 그대로 promise를 리턴
        //     // rj(new Error("Error"));
        // });
        // console.log(value);

        let foundUser = await getUserById(3);
        console.log(await getPostsByUserName(foundUser));
    } catch (error) {
        console.error(error);
    }
}

run();


// asuncFx, asyncFx2 같은 코드다.
async function asuncFx() {
}

function asyncFx2() {
    return new Promise((rs, rj) => {
    });
}
