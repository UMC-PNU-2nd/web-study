// 데이터 통신 방법: fetch, axois

// 1. fetch

const result = [];

// 1-1. Promise 이용

fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => console.log(response)) // Promise 형태의 값 반환
.then(response => response.json()) // JSON 형태의 값 반환하는 메서드 json()
// .then(data => result.push(data)) // data를 한꺼번에 result에 push하는 방식 -> 배열 안에 배열 또 생김
// .then(data => data.map(item => result.push(item))) // 한꺼번에가 아니라, map 사용해 data의 각 아이템들에 하나하나 접근, 각 아이템을 빈 배열인 result에 push해주는 방식 -> 배열 안의 배열 X
.then(data => data.map(item => result.push(item.name))) // 데이터의 모든 내용이 아니라, 유저 이름만 저장하고 싶다면 item.name
.catch(error => console.log(error)) // 혹시 오류 발생시 캐치할 수 있도록

console.log(result);
// 만든 빈 배열(result) 안에, 또 다른 배열(data)이 들어가 있고, 그 안에 원하는 객체가 저장되어 있는 형태 반환
// [[{user1}, {user2}, ...]]

// 하나의 배열에 원하는 객체 저장된 형태([{user1}, {user2}, ...])를 원함 -> result.push(data) 대신, result.map(item => result.push(item))

// 1-2. async await 이용
const dataFetch = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch가 실행되고 그 결괏값이 나올 때까지 기다려야 하므로 await 사용
    const data = await response.json(); // JSON으로 변환
    // 빈 배열을 만들었던 1-1과 달리, 데이터를 바로 변수에 저장! (-> 비동기 처리를 동기 처리처럼 이해할 수 있게 해주는 async await!)
    // 1-1에서 fetch()부터 .catch까지의 과정을 async await을 이용하면 .then이 아니라 const 등을 이용해 일반적인, 동기적인 경우처럼 코딩할 수 있음

    return data;
}

const dataResult = dataFetch();

console.log(dataResult);

// 2. axios

// 2-1. Promise 이용
axios.get("https://jsonplaceholder.typicode.com/users")
// .then(data => console.log(data)) // fetch와 달리 자동으로 JSON 형식으로 변환됨
// config, data, headers 등이 반환 -> 원하는 것은 data 속에 있음 -> data.data로 가져와야 함
.then(data => console.log(data.data))
// .then(response => console.log(response.data))라고 써도 무방

// 2-2. async await 이용
const dataFetch2 = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;

    return response;
}

const dataResult2 = dataFetch();

console.log(dataResult2);

// async await 이용한 부분들은 콘솔에 제대로 안 찍히고 Promise {<pending>}이라고 뜨는데 이게 맞나? -> 눌러보면 안에 정보 들어있음! ([[PromiseResult]] 안에)