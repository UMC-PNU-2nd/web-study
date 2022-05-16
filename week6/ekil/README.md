# 8주차 데이터 통신

## 1. HTTP

- HTTP=HyperText Transfer Protocol

- HTTPS=HyperText Transfer Protocol Secure, HTTP + 보안

1. front(client)와 server간의 데이터 통신 방법 중 하나

2. clinet와 server가 어떻게 HyperText를 주고받는지를 규약한 프로토콜의 하나

3. Request(데이터 요청, client → server), Response(응답, server → client)로 구성

## 2. Request
1. 필요한 요소: url 주소, HTTP 요청 메서드(HTTP Request Method: GET, POST, PUT, DELETE)
2. HTTP 요청 메서드 종류
    - GET: 기존의 정보에 그냥 접근(read)(해 사용)할 때. 기존의 데이터를 요청하는 것. (기본값)
    - POST: 기존 데이터에 새로운 데이터 추가할 때. 새로 추가할 데이터를 함께 보내줘야 함.
    - PUT: 기존 데이터를 수정할 때
    - DELETE: 데이터 삭제할 때
3. request의 구성
    - header: 데이터 형식, 최종 목적지 등의 정보를 담음
    - body: 새로 추가할 데이터 등의 정보를 담음(→ POST, PUT 사용시 필요!)
    - startline: url 주소, 어떤 HTTP 요청 메서드를 사용할 것인지 등의 정보를 담음

## 3. Response
response의 형식
- XML: HTML과 유사하게 태그로 구성
- JSON: 배열 안에, 객체와 같은 형식으로 구성 → 많이 사용! (직관적, 간결 → 가독성 🙂)

## 4. 데이터 통신
데이터 통신: 비동기로 일어남 -> promise, asnyc await 이용

1. fetch: 브라우저에서 제공하는 메서드 → 별도의 설치 필요 X
    
    `fetch(url, options)`
    
    - options: body에 해당하는 추가 정보 적을 때
    
    ```jsx
    fetch("https://jsonplaceholder.typicode.com/users")
    // 기본값인 GET
    // Promise 형태를 반환
    ```
    
2. axios: 별도의 설치 필요(HTML에 script 태그 작성해 사용할 수도 있음(=cdn))
    
    ```jsx
    // axios.원하는HTTP요청메소드("url주소")
    axios.get("https://jsonplaceholder.typicode.com/users")
    ```
    
    - fetch 사용시, .then으로 불러온 값을 .json() 메서드 이용해 JSON 형식으로 바꿔주는 과정 필요
    - axios는 자동으로 JSON 형식으로 바꿔주기에, 그런 과정 필요 X
    

---

실습(유튜브)

**하드코딩 → youtube api에서 api 가져와 홈페이지의 동영상들을 동적으로 가져오기**

youtube api에서 api 가져오기

Parameters

필수 인자 中 snippet: 핵심 정보만 모은 것

사용한 메서드: GET

url 뒤에 ?, 그 뒤부터 선택한 parameter(추가적으로 요청했던 사항)들이 key&value 형태로 연결되어 있음

`Number()`: 매개변수를 숫자 형태로 바꿔줌

`toFixed()`: 소숫점 아래 몇 째자리까지 나타낼 것인지 결정하는 메서드, 매개변수로 받은 숫자째자리까지. → 소숫점 표시 없애고 싶다면 매개변수로 0 전달