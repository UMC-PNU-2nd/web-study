# 6주차 로컬 스토리지

## 1. 웹 스토리지

- 서버가 아닌, **클라이언트**에 데이터를 저장할 수 있도록 지원하는 기능

- **로컬 스토리지**, **세션 스토리지**가 있음

### 로컬 스토리지 vs 세션 스토리지

- 로컬 스토리지: 스토리지에 저장한 값을 삭제하기 전까지는 그 값이 브라우저에 계속 남아있음
- 세션 스토리지: 브라우저 창을 닫는(=세션 종료하는) 순간, 스토리지에 저장한 값이 사라짐

- 브라우저 창을 닫아도 계속 남아있어야 하는 정보 → 로컬 스토리지에 저장
- 세션이 유지되는 동안에만 남아있으면 되는 정보 → 세션 스토리지에 저장

사용법은 동일

`localStorage.setItem('key', 'value');`

`sessionStorage.setItem('key', 'value');` 등


## 2. 로컬 스토리지

- 로컬 환경의 저장 공간에 정보를 저장하는 것 → 새로고침, 브라우저 껐다 켜기, 컴퓨터 재부팅해도, 해당 문서의 웹 브라우저는 로컬 스토리지에 저장한 데이터들을 가지고 있음

- window 객체의 `localStorage` 속성: 현재 도메인의 로컬 저장소에 접근하게 해줌.

- 개발자 도구-application-local storage에서 현재 페이지에서 로컬 스토리지에 저장되고 있는 정보 확인 

### 로컬 스토리지 데이터 저장, 반환, 제거

1. 저장
    
    `setItem()`: 로컬 스토리지에 정보를 **저장**할 때 사용하는 메서드
    
    ```jsx
    // localStorage.setItem('key', 'value');
    localStorage.setItem('name', 'ekil');
    localStorage.setItem('age', 100);
    ```
    

2. 반환
    
    `getItem()`: 로컬 스토리지에서 정보를 **가져올** 때 사용하는 메서드
    
    ```jsx
    // localStorage.getItem('key');
    
    const result = localStorage.getItem('age');
    console.log(result);
    // "100"
    ```
    
    로컬 스토리지는 문자열, 숫자, 불리언, undefined, null 등의 데이터를 문자열 형태로 **저장**, 문자열 형태로 **반환**
    
    `typeof`: 피연산자의 **데이터 타입**을 나타내는 문자열을 **반환**하는 **연산자**
    
    ```jsx
    const result = localStorage.getItem('age');
    console.log(typeof result);
    // "string"
    // 숫자 형태(100)로 저장했는데, 반환된 데이터는 문자열 형태임을 확인 가능
    ```
    
    **객체**: [object Object]라고 저장되기 때문에, `JSON.stringify()` 이용해 **문자열**로 **변환** 후 **저장**함으로써 본래의 형태를 유지하도록 해주고, **반환** 시에는 `JSON.parse()`이용해 자바스크립트가 해당 문자열을 **객체**로 인식하게끔 **변환**해주어야 함
    
    ```jsx
    // 객체 안에 다양한 타입의 정보 넣어보자.
    
    const travel = {
    	destinations : ['paris', 'sydney', 'taipei'], // 객체(key : value) 형식, value는 배열 형식.
    	days : 100, // 숫자
    	mate: undefined
    	isAvailable: true
    }
    
    localStorage.setItem('travel', travel); // key는 'travel', value는 앞에서 선언한 객체인 travel
    // 객체 형태는 문자열로 저장 X, [object Object]
    ```
    
    `JSON.stringify()`: 데이터 타입을 문자열로 변환
    
    → 스토리지에는 문자열 형식으로만 저장할 수 있기 때문에 이 메서드를 사용해야 함.
    
    ```jsx
    localStorage.setItem('travel', JSON.stringify(travel));
    ```
    
    `JSON.parse()`: 자바스크립트가 객체 형식으로 인식할 수 있게 변환
    
    → 문자열 형태로 저장한 데이터를 본래의 형태인 객체나 배열 등으로 바꿔서 반환하기 위해 사용.
    
    ```jsx
    const data = localStorage.getItem('travel');
    console.log(data);
    // {"'destinations':['paris', 'sydney', 'taipei'], 'days':100, 'isAvailable':true}"
    
    console.log(data.destinations);
    // undefined
    // 문자열 형태면 객체의 key에 접근 불가
    
    const data = JSON.parse(localStorage.getItem('travel'));
    console.log(data); // 객체 형태로 잘 출력됨
    console.log(data.destinations); // ["paris", "sydney", "taipei"] // 객체의 key에 접근 가능
    ```
    

3. 제거
    
    `removeItem()`
    
    ```jsx
    // localStorage.removeItem('key');
    localStorage.removeItem('name');
    ```
    
    `clear()`: 로컬 스토리지 내 모든 데이터 삭제
    ```jsx
    localStorage.clear();
    ```



---
# 7주차 비동기

## 1. 동기와 비동기

동기(synchronous): 순서대로 일을 처리하는 방식

비동기(asynchronous): 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 것들을 먼저 처리하는 방식(시간이 오래 걸리는 작업이 있을 때, **그 작업이 끝날 때까지 아무것도 못하면서 기다리는(=동기 방식) 게 아니라**, 다른 작업을 하다가, 해당(=시간 오래 걸리는) 작업이 끝났을 때 그 결과를 받을 수 있음)

자바스크립트: 동기적 언어 → 위에서부터 순서대로 읽으며 코드 실행

## 2. 비동기 함수

`setTimeout()`: 대표적인 비동기 함수

- 인자: 콜백함수, 숫자(단위: ms, 밀리세컨드. 1ms=0.001s)(얼마나 딜레이시킬 건지 나타냄)
- 동기적으로 모든 코드 실행 후, 비동기적으로 처리할 것들을 실행하기 시작한 시점을 기준으로 n밀리세컨드 후에 코드 실행

## 3. 콜백함수와 비동기

콜백함수: 동기적으로도, 비동기적으로도 사용 가능

```jsx
function asyncFunc(asyncCallback) {
	setTimeout(asyncCallback, 3000);
}

function syncFunc(syncCallback) {
	syncCallback();
}

asyncFunc(() => console.log('async'));
syncFunc(() => console.log('sync'));

// "sync"
// (대략 3초 뒤) "async"
```

- 동기, 비동기 같이 사용시 순서 보장할 수 있어 콜백함수 자주 사용

```jsx
// 콜백함수 중첩 사용으로 원하는 순서로 실행되도록 함

function syncFunc(syncCallbakc) {
	syncCallback();
}

function asyncFunc(asyncCallback) {
	setTimeout(() => {
		asyncCallback();
		syncFunc(() => console.log('sync'));
	}, 3000);
}

asyncFunc(() => console.log('async'));

// "async"
// (약 3초 뒤) "sync"
```

```jsx
// 콜백지옥 간접 체험

const posts = [
	{post_id: 1, post_title: '첫 번째 글'},
	{post_id: 2, post_title: '두 번째 글'}, 
	{post_id: 3, post_title: '세 번째 글'}
];

const comments = [
	{post_id: 1, comment_id: 1, comment: '첫 번째 글 첫 번째 댓글'}
	{post_id: 2, comment_id: 1, comment: '두 번째 글 첫 번째 댓글'}
	{post_id: 2, comment_id: 2, comment: '두 번째 글 두 번째 댓글'}
	{post_id: 2, comment_id: 3, comment: '두 번째 글 세 번째 댓글'}
	{post_id: 3, comment_id: 1, comment: '세 번째 글 첫 번째 댓글'}
	{post_id: 3, comment_id: 1, comment: '세 번째 글 두 번째 댓글'}
];

const postNum = 2;

const getPost = (id, onSuccess, onError) => {
	setTimeout(() => {
		const post = posts.find(post => post.post_id === id); // 배열에 적용하는 find() 메서드
		if(post) {
			onSuccess(post.post_id);
		} else {
			onError("찾는 포스트가 없다.");
		}
	}, 3000)
}

const getComments = (post_id, onSuccess, onError) => {
	setTimeout(() => {
		const result = comments.filter(comment => comment.post_id === post_id); // 배열에 적용하는 filter() 메서드
		if(result.length > 0) {
			onSuccess(result);
		} else {
			onError("찾는 포스트에 댓글이 없다.");
		}
	}, 4000)
}

getPost(
	postNum,
	(postId) => {
		console.log('Post', postId);
		getComments(
			postId,
			(result) => {
				console.log('Comments:', result)
			},
			(message) => {
				console.log(message);
			}
		)
	},
	(message) => {
		console.log(message)
	}
)

// 콜백함수의 중첩 사용으로 가독성 저하, 유지보수 및 수정 어려움

// "Post" 2
/*
"Comments:" // [object Array] (3)
[// [object Object]
{
	"post_id": 2,
	"comment_id": 1,
	"comment": "두 번째 글 첫 번째 코멘트"
}, // [object Object]
{
	"post_id": 2,
	"comment_id": 2,
	"comment": "두 번째 글 두 번째 코멘트"
}, // [object Object]
{
	"post_id": 2,
	"comment_id": 3,
	"comment": "두 번째 글 세 번째 코멘트"
}]
*/
```

## 4. Promise로 콜백지옥 정리하기

**Promise**: 비동기적인 것을 수행할 때(ex. 네트워크 통신, 파일 읽어오기 등) 콜백함수 대신에 유용하게 쓸 수 있는 자바스크립트 객체(object)

```jsx
new Promise(resolve, reject);
```

promise 선언**하자마자** 비동기 작업 시작 → pending(진행 중) → fulfilled(성공적으로 끝낸 상태) / rejected(실패로 끝난 상태)

`resolve`: fulfilled일 때 실행할 코드

`reject`: rejected일 때 실행할 코드

`.then`: `resolve`가 실행됐을 때의 promise 결괏값 반환

`.catch`: `reject`가 실행됐을 때의 promise 결괏값 반환

```jsx
const posts = [
	{post_id: 1, post_title: '첫 번째 글'},
	{post_id: 2, post_title: '두 번째 글'}, 
	{post_id: 3, post_title: '세 번째 글'}
];

const comments = [
	{post_id: 1, comment_id: 1, comment: '첫 번째 글 첫 번째 댓글'}
	{post_id: 2, comment_id: 1, comment: '두 번째 글 첫 번째 댓글'}
	{post_id: 2, comment_id: 2, comment: '두 번째 글 두 번째 댓글'}
	{post_id: 2, comment_id: 3, comment: '두 번째 글 세 번째 댓글'}
	{post_id: 3, comment_id: 1, comment: '세 번째 글 첫 번째 댓글'}
	{post_id: 3, comment_id: 1, comment: '세 번째 글 두 번째 댓글'}
];

const postNum = 2;

const getPost = (id) => {
	return new Promise((resolve, reject) => { 
		setTimeout(() => {
			const post = posts.find(post => post.post_id === id);
			if(post) {
				resolve(post.post_id);
			} else {
				reject("찾는 포스트가 없다.");
			}
		}, 3000)
	})
}

const getComments = (post_id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = comments.filter(comment => comment.post_id === post_id);
			if(result.length > 0) {
				onSuccess(result);
			} else {
				onError("찾는 포스트에 댓글이 없다.");
			}
		}, 4000)
	})
}

getPost(postNum)
.then(postId => {
	console.log('Post:', postId)
	return getComments(postId) // return 써줘야 getComments의 promise 결과를 가져올 수 있음. 안 써주면 undefined
})
.then(result => console.log('Comments:', result))
.catch(message => console.log(message)); // promise를 getPost와 getComments에 각각 선언했는데, 둘 중 어디에서 reject되든 하나의 catch로 잘 실행됨
```

**async await**: 비동기적인 것들을 동기적으로 느끼게 해주는 친구들

- async function 함수 내에서 await문을 만나면 함수 실행 일시 중지
- await 뒤에 있는 Promise의 수행 결괏값을 받아 온 뒤 함수를 재진행

```jsx
const posts = [
	{post_id: 1, post_title: '첫 번째 글'},
	{post_id: 2, post_title: '두 번째 글'}, 
	{post_id: 3, post_title: '세 번째 글'}
];

const comments = [
	{post_id: 1, comment_id: 1, comment: '첫 번째 글 첫 번째 댓글'}
	{post_id: 2, comment_id: 1, comment: '두 번째 글 첫 번째 댓글'}
	{post_id: 2, comment_id: 2, comment: '두 번째 글 두 번째 댓글'}
	{post_id: 2, comment_id: 3, comment: '두 번째 글 세 번째 댓글'}
	{post_id: 3, comment_id: 1, comment: '세 번째 글 첫 번째 댓글'}
	{post_id: 3, comment_id: 1, comment: '세 번째 글 두 번째 댓글'}
];

const postNum = 1;

const getPost = (id) => {
	return new Promise((resolve, reject) => { 
		setTimeout(() => {
			const post = posts.find(post => post.post_id === id);
			if(post) {
				resolve(post.post_id);
			} else {
				reject("찾는 포스트가 없다.");
			}
		}, 3000)
	})
}

const getComments = (post_id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const result = comments.filter(comment => comment.post_id === post_id);
			if(result.length > 0) {
				onSuccess(result);
			} else {
				onError("찾는 포스트에 댓글이 없다.");
			}
		}, 4000)
	})
}

// await 안 썼을 때 -> postId_result에 값 담기지 않음
async function getResult() {
	const postId_result = getPost(postNum);
	console.log(postId_result);
}

getResult();

/*
// [object Promise]
{}
*/

// -> postId_result에 값이 담기지 않은 것! (promise 실행 결괏값이 아니라, promise 자체가 리턴됨)

// 2. await 썼을 때 -> 잘 실행됨
async function getResult() {
	const postId_result = await getPost(postNum);
	console.log(postId_result);
}

getResult();

// 1

// 3. postId_result를 이용해 getComment() 호출 가능
async function getResult() {
	const postId_result = await getPost(postNum);
	const comments_result = await getComments(postId_result);
	console.log('Post:', postId_result, 'Comments:', comments_result);
}

getResult();

/*
"Post:" 1 "Comments:" // [object Array] (1)
[// [object Object]
{
	"post_id": 1,
	"comment_id": 1,
	"comment": "첫 번째 글 첫 번째 댓글"
}]
*/
```
