# 9. 라우팅

- javascript는 프론트엔드에서만 국한되어서 사용하는 언어가 아닌, 백엔드에서도 사용가능한 언어가 되었다. ⇒ 그 환경이 **node.js**

- node.js
    - [다운로드](https://nodejs.org/ko/)
    - npm : 사람들이 미리 만들어 놓은 프로그램을 다운받을 수 있는 것
    - node & npm 버전 확인
        
        ```bash
        node --version
        npm --version
        ```
        
    - `npm init` : 처음 프로젝트를 시작할 때 설정해줄 수 있음(디폴트값으로 설정해주려면 `-y` 옵션)

- [express 패키지](https://expressjs.com/ko/)
    - 설치 : `npm install express`
    - 패키지 설치 후 생긴 node_moudules 안의 파일들? ⇒ express 패키지에도 다른 패키지들이 사용되기 때문에 필요한 패키지 모두가 설치된 것
    - package-lock.json? ⇒ express 뿐 아니라, 관련된 여러 패키지들의 정보들도 담겨있음
    - hello world
        
        ```jsx
        const express = require('express')
        const app = express()
        const port = 3000
        
        app.get('/', (req, res) => { //HTTPRequestMethod
          res.send('Hello World!')
        })
        
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
        ```
        
        ```bash
        node app.js
        ```
        
    - npm 종료 : ctrl + C

- nodemon 패키지
    - 매번 코드를 변경할 때마다 서버를 다시 재실행할 필요가 없음
    - 설치 : `npm install -g nodemon`
        - -g : global의 약자, 다른 프로젝트에서도 사용할 수 있도록 (맥의 경우 권한 설정이 필요하기 때문에 맨앞에 sudo를 붙인다.)
    - 실행 : `node app.js` 대신 `nodemon app.js`

- 라우팅 : URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것
    - CRUD (**C**reate = post, **R**ead = get, **U**pdate = put, **D**elete = delete)
    - get
        
        ```jsx
        app.get('/users/:userId', (req, res) => {
          // console.log(req.params.userId);
          const user = users.find((user) => user.id === parseInt(req.params.userId));
          if (!user) {
            res.status(404).send('요청한 userId를 찾을 수 없습니다.')
          }
          res.status(200).json(user)
        })
        ```
        
        - 동적으로 입력되는 주소는 앞에 `:`(콜론)을 붙여준다.
        - `find()` : 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환, 없으면 undefined 반환
        - `status()` : 상태코드(200 = 성공, 404 = 실패)를 보냄
    - post
        
        ```jsx
        app.post("/users", (req, res) => {
          const newUser = req.body;
          
          if (Object.keys(newUser).length === 0) {
            res.status(400).send('user에 관한 정보를 입력해주세요');
          } else if (Object.keys(newUser).length < 4) {
            res.status(400).send('user를 추가하기 위해 필요한 정보를 모두 입력해주세요')
          } else {
            users.push({
              id : users[users.length-1].id + 1,
              ...newUser
            });
          }
          res.json(users)
        })
        ```
        
        - [Postman](https://www.postman.com/downloads/) : API 테스팅툴
        - `app.use(express.json());` : json이 사용되길 원한다고 시스템에 알리는 역할
        - `keys()` 메소드 : key들만 뽑아서 array를 만들어줌
    - put
        
        ```jsx
        app.put('/users/:userId', (req, res) => {
          const id = users.findIndex((user) => user.id === parseInt(req.params.userId));
          const newUser = req.body;
          if (id == -1) {
            res.status(404).send('요청한 userId를 찾을 수 없습니다.')
          } else {
            if (Object.keys(newUser).length === 0) {
              res.status(400).send('user에 관한 정보를 입력해주세요');
            } else {
              users[id] = {
                ...users[id],
                ...req.body
              }
              res.status(200).json(users)
            }
          }
        })
        ```
        
        - `findIndex()` : 주어진 판별함수를 만족하는 배열의 첫번째 요소에 대한 인덱스를 반환, 만족하는 요소가 없으면 -1을 반환
    - delete
        
        ```jsx
        app.delete('/users/:userId', (req, res) => {
          const id = users.findIndex((user) => user.id === parseInt(req.params.userId));
          if (id === -1) {
            res.status(404).send('요청한 userId를 찾을 수 없습니다.')
          }
          users.splice(id, 1);
          res.status(200).json(users)
        })
        ```
        
        - `splice()` : 첫번째 인수 - 제거할 요소의 인덱스, 두번째 인수 - 제거할 요소의 개수