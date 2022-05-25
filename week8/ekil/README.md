# 9주차 라우팅
## 1. npm

- Node Package Manager
- 사람들이 미리 만들어 둔 프로그램을 다운받을 수 있는 앱스토어 같은 것

### 터미널 명령어

노드(Node.js) 잘 설치되었는지 확인: `node --version`

npm도 확인: `npm --version`

`npm init`으로 설정 완료하기 → package.json 파일(다운받은 npm 패키지들 확인할 수 있는 파일임) 생성됨

## 2. express

api를 더 쉽게 만들(직관적, 깔끔한 코드로 작성할) 수 있도록 도와주는 프로그램

설치 명령어: `npm install express`

→ package.json의 “dependencies”에 express가 추가됐음(&설치된 ‘버전’ 정보)을 확인 가능

- node_modules: npm 이용해 다운받은 프로그램(패키지)들이 담기는 폴더
- package-lock.json: express도 다른 npm 패키지들을 결합해 만든 프로그램임. (→ node_modules에 이 다른 패키지들도 함께 설치돼 있음 확인 가능) 그 여러 패키지들의 버전 정보까지 담은 파일.

새로운 것을 접할 때는 공식문서부터 읽어볼 것을 추천

## 3. IP 주소와 포트

port: 3000

localhost:3000

**lcalhost**=자신의 컴퓨터(로컬 컴퓨터, 로컬 PC)를 가리키는 호스트이름(도메인) → 자기 자신의 컴퓨터를 원격 컴퓨터인 것처럼 통신하며 테스트를 할 때 사용

(도메인=www.naver.com이나 localhost 같은 것. IP 주소=202.179.177.22나 127.0.0.1 같은 것. → 도메인은 일일이 IP 주소 칠 수고를 덜어줌.)

**IP 주소**=Internet Protocol Address=네트워크에 연결된 특정 PC의 주소를 나타내는 체계

→ 네트워크 상에서 다른 PC에 접속하기 위해서는 그 PC를 가리키는 주소=IP 주소를 알아야 함

***IPv4**=IP version 4: IP 주소를 네 덩이(각 0~255)의 숫자로 표현하는 방식.

`nslookup naver.com`: 터미널에서 도메인(naver.com)의 IPv4 주소 확인하는 명령어

**port**=IP 내에서 애플리케이션 상호 구분을 위해 사용하는 번호. 숫자(0~65535)는 IP 주소가 가리키는 PC에 진입할 수 있는, 정해진 통로를 의미함.

이미 사용 중인 포트는 중복하여 사용 불가, 0~1024까지의 포트 번호는 이미 정해져 있음

→ IP 주소는 접속하고자 하는 컴퓨터(서버 컴퓨터?)를 찾기 위한 것이고, port는 그 컴퓨터 안에서 돌아가고 있는 여러 프로그램 중 지금 사용하고자 하는 프로그램을 찾기 위한 것임.

→ localhost 뒤에 서로 다른 포트 번호를 적음으로써 여러 개의 애플리케이션(프로그램) 한꺼번에 실행 가능

```jsx
// app.js

const express = require("express");
const app = express(); // app이 express를 사용하겠다고 선언
const port = 3000; // 포트 번호 선언

app.get("/", (req, res) => {// get은 HTTP request method, req=request=사용자가 보낸 요청, res=respond=우리가 보내줄 응답값
	res.send("Hello World!");
});
// 사용자가 요청한 주소가 "/"(=home)일 때, 아래 코드대로, 응답으로 "Hello World!"를 줄게.
// "/" = localhost:3000과 같음.

app.listen(port, () => {
	console.log('서버 실행 중...'); // 서버가 실행 중임을 알 수 있도록
});
```

코드 변경 후 결과 확인 위해서는, 현재 실행 중인 서버 종료(Ctrl + c) 후 다시 시작(터미널에 `node app.js` 명령어 입력)

## 4. nodemon

코드 변경할 때마다 서버 종료 및 재시작 → 번거로움

그럴 필요 없게 해주는 패키지

설치 명령어: `npm install -g nodemon` (-g=global. 현재 프로젝트가 아닌 다른 프로젝트에서도 사용할 수 있도록 함)

*맥: 권한 설정 때문에 `sudo npm install -g nodemon`으로 작성

→ global로 설치한 패키지는 package.json의 dependencies에 추가되지 않음

실행 명령어: `nodemon app.js`

## 5. 라우팅 Routing

패킷에 포함된 주소 등의 상세 정보를 이용해 목적지까지 데이터나 메시지를 체계적으로 다른 네트워크에 전달하는 경로를 선택하고 스위칭하는 과정

경로 정보를 기반으로 현재의 네트워크에서 다른 네트워크로 데이터를 전송하는 경로를 정하고 정해진 경로를 따라 데이터를 전달하는 과정

URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것

- URI=Uniform Resource Identifier → 자원의 고유 식별자(위치(=url이 가리키는 것) +a의 정보(ex. 이름 등)를 표시하는 식별자). URL의 의미를 포함하는 개념
- URL=Uniform Resource Locator → 자원이 실제로 존재하는 위치를 가리킴

## 6. API

- Application Programming Interface

- 두 애플리케이션(소프트웨어) 간의 서비스 계약

- 요청, 응답 사용해 두 애플리케이션(-> 요청 보내는 애플리케이션=클라이언트, 응답 보내는 애플리케이션=서버)이 서로 통신하는 방법을 정의함

API 문서 => 개발자가 요청, 응답을 구성하는 방법에 대한 정보가 들어있음

REST API, Websocket API

api를 만들기 위해서는 라우팅 사용(?)

**CRUD**

C = Create (→ POST)

R = Read (→ GET)

U = Update (→ PUT)

D = Delete (→ DELETE)

## 7. API 만들기 실습

DB 없으므로 간단한 배열 만들어 사용

```jsx
// app.js

const express =require("express");
const app = express();
const port = 5500;

app.use(express.json()); // 정보를 JSON 형식으로 추가하고 보낼 것임 -> express.json()을 사용할 것이라고 명시해줘야 함

const users = [
	{
		id: 1,
		name: "James",
		username: "joker",
		email: "james101@gmail.com",
		phonenumber: "123-456-7070",
	},
	{
		id: 2,
		name: "Christine",
		username: "crystal",
		email: "christine101@gmail.com",
		phonenumber: "123-456-7111",
	},
	{
		id: 3,
		name: "Jammie",
		username: "jam",
		email: "jammie101@gmail.com",
		phonenumber: "123-456-7555",
	}
];

// 사용자가 localhost:5500이라는 주소로 get 요청을 했을 때의 응답을 정의하는 코드
app.get("/", (req, res) => {
	res.send("Welcome");
});

// 사용자가 localhost:5500/users라는 주소로 get 요청을 했을 때의 응답을 정의하는 코드
// 위에서 정의한 users 배열을 보여줘야 함
app.get("/users", (req, res) => {
	res.json(users); // 데이터를 계속 json 형식으로 사용할 것이므로 send 대신 json 사용
});

// 사용자가 각각의 유저 정보에 따로 접근하고 싶을 수 있음
// 사용자가 접근하고 싶은 특정 유저의 아이디를 userId에 적어줄 것
// 사용자가 어떤 아이디에 접근하고 싶을지 알 수 없으므로, 앞에 : 붙여줌
// : 붙이면 동적으로 입력되는 주소
app.get("/users/:userId", (req, res) => {
	// req.params.userId; // 사용자가 입력한 userId 값을 받아오는 코드 -> 사용자가 입력한 userId에 맞는 정보를 users 배열에서 골라 보내줘야 함
	const user = users.find((user) => user.id === parseInt(req.params.userId)); // user.id와 req.params.userId의 데이터 타입이 다름. 숫자, 문자열. -> 둘 중 하나의 데이터 타입을 변환해줘야 함
	res.json(user); // 사용자가 전해준 userId에 해당하는 user 정보를 제공하도록
});
```

`find()` 메서드: 주어진 판별 함수를 만족하는 첫 번째 요소의 값 반환(없을 시 undefined 반환)

→ users 배열에서 해당 userId와 일치하는 것을 찾아 반환하도록 할 것

### 상태코드(status code)

현재 보낸 요청이 잘 처리됐는지 여부 확인할 수 있는 코드

```jsx
// 직전 코드 제일 마지막 부분에, 상태코드까지 함께 보내주도록 status() 이용

app.get("/users/:userId", (req, res) => {
	const user = users.find((user) => user.id === parseInt(req.params.userId));
	res.status(200).json(user);
});
```

개발자 도구 - 네트워크에서 확인 가능

(실습시, 200으로 보냈는데 304라고 찍힐 때는 강력새로고침(Ctrl + Shift + r)하면 200으로 잘 나올 것)


### 예외 처리

사용자가 users에 없는 userId를 입력했을 때에 대한 예외 처리를 해줘야 함(사용자는 왜 아무 것도 나오지 않는지 알 수 없기 때문)

존재하지 않는 userId 입력시, `find()` 실행 결과로 userId 값이 undefined가 됨

→ if문 사용할 건데, 조건이 거짓일 경우 if문의 코드를 실행하지 않으므로 참이 되도록 바꿔줘야 함 (undefined=False)

(`find()` 결과 userId가 어떤 숫자라면 그 값은 참/거짓이 아니므로, `!users`가 참일 때 라는 조건을 만족하지 않을 것. → 따라서 이 if문은 userId가 undefined일 때만 실행된다!)

```jsx
// 직전 코드 제일 마지막 부분을 수정

app.get("/users/:userId", (req, res) => {
	const user = users.find((user) => user.id === parseInt(req.params.userId));

	if (!users) {
		res.status(404).send('요청한 userId를 찾을 수 없습니다.') // 상태코드를 에러 코드인 404로 전하고, 찾을 수 없단 메시지를 보여줌
	}

	res.status(200).json(user);
});
```

### GET 말고 POST

: 새로운 유저 추가

사용자가 POST 요청 보내올 때는, 추가할 새로운 유저 정보를 객체로 전해올 것.

→ request의 body를 통해 해당 객체를 받아올 수 있음

req.body로는 id 제외한 정보가 제공됨. id는 서버 안의 데이터를 관리하기 위해 부여한 것이기 때문. → id 따로 설정해줘야 함.

```jsx
app.post("/users", (req, res) => { // users라는 배열 전체에 새로운 유저 정보 추가하는 것이므로 위치는 /users
	const newUser = req.body;

	users.push({ // push() 이용해 새로운 정보를 배열에 추가해 줌
		id : users[users.length-1].id + 1, // id가 동적으로 생성되도록(users 안의 맨 마지막 id 값(<-인덱스로 접근)보다 하나 큰 값 할당)
		...newUser // newUser 안에 있는 내용물을 하나하나 복사해 새로운 객체 안에 넣어주는 spread 연산자 이용
	})

	res.json(users); // 실제 상황이라면 개인정보 보호 위해 새로 추가된 유저 정보만을 보내줘야 하지만, 실습이므로 전체 유저 정보를 보내주도록 함
});
```

GET과 다르게 브라우저에서 확인 불가능

**postman**(api testing tool) 이용! (데이터 통신할 때 매번 fetch나 axios로 결과 확인하는 번거로움 없이, postman에 api 저장해 원할 때마다 응답 값 확인 가능)

- 메소드를 POST로 선택하고, 추가할 유저 정보를 body에 JSON 형태로 적어준 뒤, Send 버튼을 부르면 Response 화면에 우리가 보내주겠다고 작성한 대로 결과창이 뜸.

- JSON은 문자열로 구성 → 모든 key, value를 문자열 형태로 작성해야 함

- ⭐ JavaScript와 달리 JSON은 `''` 말고 `""`만 사용해야 함!

### 예외 처리

1. 사용자가 빈 객체를 전달했을 경우
    
    빈 배열, 빈 객체의 value=True
    
    ```jsx
    app.post("/users", (req, res) => {
    	const newUser = req.body;
    
    	if (Object.keys(newUser).length === 0) {
    		res.status(400).send('user에 관한 정보를 입력해주세요.')
    	}
    
    	users.push({
    		id : users[users.length-1].id + 1,
    		...newUser
    	})
    
    	res.json(users);
    });
    ```
    
    `array.length === 0`으로 빈 배열인지 확인할 수 있으나, 빈 객체인지는 확인 불가
    
    `keys()` 메서드: 객체의 key들만 뽑아 배열로 만드는 메서드 → 배열로 바뀌었으므로 length가 0인지 확인 가능!
    
2. 사용자가 모든 항목(이름, 전화번호 등)을 전달하지 않았을 경우(=key 1개 이상이 비어있을 경우)
    
    ```jsx
    app.post("/users", (req, res) => {
    	const newUser = req.body;
    
    	if (Object.keys(newUser).length === 0) {
    		res.status(400).send('user에 관한 정보를 입력해주세요.');
    	} else if (Object.keys(newUser).length < 4) { // 값이 하나라도 비어있다면 조건 만족
    		res.status(400).send('user를 추가하기 위해 필요한 정보를 모두 입력해주세요.');
    	} else { // 위의 예외 상황에 해당하지 않을 때만 push하도록
    		users.push({
    			id : users[users.length-1].id + 1,
    			...newUser
    		});
    	}
    
    	res.json(users);
    });
    ```
    

### PUT: 기존 데이터 수정

☑️ 사용자 정보를 통째로 없애고 추가하는 식의 수정이 아니라, 항목 중에서 수정 원하는 것만 전달해도 그게 교체(수정)되도록

- 사용자가 입력한 userId와 일치하는 유저 정보 찾기: `findIndex()` 메서드 사용
    
    `findIndex()` 메서드: 주어진 판별 함수를 만족하는 배열의 첫 번째 요소의 **인덱스** 반환. 만족하는 요소 없으면 -1 반환
    
    판별함수로 userId와 users 배열 속 id가 일치하는지 확인하는 코드 작성
    
- 예외처리: 만족하는 요소 없으면 -1 반환한다는 것 이용
    
    ```jsx
    app.put("/users/:userId", (req, res) => {
    	const id = users.findIndex(user => user.id === parseInt(req.params.userId));
    
    	if (id === -1) {
    		res.status(404).send('요청한 id를 찾을 수 없습니다.');
    	}
    
    	users[id] = {
    		//id : users[id].id, // id만 적히는데, 사용자가 수정할 항목을 하나만 보냈을 경우 아이디와 해당 수정된 항목만 표시됨
    		...users[id], // users 배열에서 해당 id를 가진 요소(객체)의 내용물을 훑으며 불러오도록
    		...req.body // 사용자가 수정 요청한 것은 이 코드에 의해 수정됨
    	}
    
    	res.status(200).json(users);
    });
    ```
    

### DELETE

특정 유저의 유저 정보 전체를 삭제하는 거겠지?

users 배열에서 해당 요소를 삭제한다. → 특정 인덱스의 값 삭제 ⇒ splice 이용

```jsx
app.delete("/users/:userId", (req, res) => {
	const id = users.findIndex(user => user.id === parseInt(req.params.userId));

	if (id === -1) {
		res.status(404).send('요청한 id를 찾을 수 없습니다.');
	}

	users.splice(id, 1);

	res.status(200).json(users);
});
```