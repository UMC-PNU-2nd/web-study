const express = require('express')
const app = express()
const port = 3000


const users = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
},
{
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
}]

// controller 역할
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.json(users);
});
app.get("/users/:userId", (req, res) => {
    // res.json(users);
    // console.log(req.params.userId);
    const user = users.find((user) => user.id === parseInt(req.params.userId));

    if (!user) {
        req.status(404).sene('요청한 userId를 찾을 수 없습니다.')
    }

    res.status(200).json(user);
});
app.post('/users', (req, res) => {
    const newUser = req.body;

    users.push({
        id: users[users.length - 1].id + 1,
        ...newUser
    })
    res.json(users);

    // 객체 빈칸 오류 처리
    if (Object.keys(newUser).length === 0) { //new 들의 key들만 뽑아서 배열로 만들어줌
        res.status(400).console.log('객체를 입력해주세요');
    } else if (Object.keys(newUser).length < 10) {
        res.status(400).send('user를 추가하기 위해 필요한 정보를 모두 입력해주세요.');
    } else {
        users.push({
            id: users[users.length - 1].id + 1,
            ...newUser,
        });
    }
    res.json(users);

});


app.put("/users/:userId", (req, res) => {
    const id = users.findIndex(user => user.id === parseInt(req.param.userId));
    console.log(id);
    users[id] = {
        id: users[id].id,
        ...req.body
    }
    res.status(200).console.log('')
});




app.listen(port, () => {
    console.log(`서버 실행중`);
});

