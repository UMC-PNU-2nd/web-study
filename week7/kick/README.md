# Asynchronous

# **Asynchronous 비동기**

### **동기 vs 비동기**

- **Synchronous 동기적이란?**
    - 순서대로 일을 처리하는 방식
- **Asynchronous 비동기적이란?**
    - 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 것들을 먼저 처리하는 방식
    

서버에서 데이터를 받아오는 작업을 수행한다고 작업을 한다고 하자.

이때 이 작업이 모두 완료될 때까지 기다리는 것은 비효율적이다.

- 이러한 경우 비동기적 작업이 더 유리하다.(사용자에게 더 나은 경험)

### 대표적인 비동기 함수

```jsx
console.log('1')

setTimeout(function() { console.log('2') },10)

console.log('3')

console.log('4')

setTimeout(function() { console.log('5') },5)

console.log('6')

setTimeout(function() { console.log('7') },40)

console.log('8')

setTimeout(function() { console.log('9') },30)

console.log('10')
```

- 단순히 코드 순서대로 실행되지 않는다
- `setTimeout` 함수는 콜백함수와 시간을 입력받는다
    - 콜백함수는 특정 시간뒤에 불러와 실행된다!
    - 콜백 함수란?? 함수안에 인자로 들어가는 함수
- 잠시 함수를 기억하고 있다고 이벤트가 끝나면 콜백함수가 들어간다
- 콜백함수는 동기적으로, 비동기 적으로도 사용될 수 있다!

### 콜백함수를 왜 사용하는가?

동기와 비동기식을 함께 사용하였을 때 순서를 보장받을 수 있기 때문이다

```jsx
function asyncFunc(asyncCallback) {
	setTimeout(() => {
    asyncCallback();
    syncFunc(() => console.log('sync'));
  }, 3000);
}

asyncFunc(() => console.log('async'));
```

- 콜백을 중첩하여 사용
- 출력시 sync 함수보다 async 콜백 함수가 먼저 실행된다

서버에서 데이터를 받아오는 경우, 데이터가 넘어오기도 전에 코드가 실행되어 undefined 상태인 경우 asynchronous 비동기를 이용하여 순서를 보장받을 수 있다.

### 실습 코드

```jsx
const posts = [
  { post_id: 1, post_title: "첫번쨰 글" },
  { post_id: 2, post_title: "두번쨰 글" },
  { post_id: 3, post_title: "세번쨰 글" },
];

const comments = [
  { post_id: 1, comment_id: 1, comment: "첫번쨰 글 첫번쨰 코멘트" },
  { post_id: 2, comment_id: 1, comment: "두번쨰 글 첫번쨰 코멘트" },
  { post_id: 2, comment_id: 2, comment: "두번쨰 글 두번쨰 코멘트" },
  { post_id: 2, comment_id: 3, comment: "두번쨰 글 세번쨰 코멘트" },
  { post_id: 3, comment_id: 1, comment: "세번쨰 글 첫번쨰 코멘트" },
  { post_id: 3, comment_id: 2, comment: "세번쨰 글 두번쨰 코멘트" },
```

실제로 서버를 구현하기에는 너무 거창하므로 위 배열들을 서버에 있는 데이터라고 치자.

여기서 postNum을 조작하여 포스트와 그에 맞는 댓글들을 가져오는 로직을 생각해보자

```jsx
const getPost = (id, onSuccess, onError) => {
  setTimeout(() => {
    const post = posts.find( post => post.post_id === id);
    if(post) {
      onSuccess(post.post_id);
    } else {
      onError("찾는 포스트 없다");
    }
  }, 3000)
}

const getComments = (post_id, onSuccess, onError) => {
  setTimeout(() => {
    const result = comments.filter( comment => comment.post_id === post_id);
    if(result.length > 0) {
      onSuccess(result);
    } else {
      onError("찾는 포스트에 코멘트가 없다");
    }
  }, 4000)
}
```

- `getPost` 와 `getComments` 를 통해 해당 id에 맞는 포스트를 찾고, 그에 맞는 댓글 또한 찾을 것이다.
- `onSuccess` 와 `onError` 같이 콜백함수를 인자로 받음으로써 성공 또는 실패시의 함수를 실행 코드에서 정의 할 수 있다.

```jsx
getPost(
  postNum,
  (postId) => {
    console.log('Post', postId);
    getComments(
      postId,
      (result) => {console.log('Comments:' , result)},
      (message) => {console.log(message);}
    )
  },
  (message) => {console.log(message);}
)
```

- `getPost` 를 통해 먼저 PostId를 구할 수 있다.
- 그리고 비동기적으로 콜백 함수를 중첩하여 사용함으로 순서가 보장
- `getComments` 를 통해 해당하는 댓글을 찾아낸다

이렇게 콜백 함수를 중첩하여 사용하면 가독성도 안좋아지고 중첩에 빠지게 된다.

이를 **콜백 지옥**이라고한다.

### Promise() 프로미스란?

- `[Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)`는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
- 기본적으로 함수에 콜백을 전달하는 대신에, 콜백을 첨부하는 방식의 객체

```jsx
new Promise(resolve, reject)
```

- pending (진행중 ), fulfilled (성공적으로 끝낸 상태), rejected (실패로 끝난 상태)의 상태를 가짐
- `resolve` 는 성공하는 경우 실행되는 콜백함수
- `reject` 는 실패하는 경우 실행되는 콜백함수

### 실습 코드

```jsx
const getPost = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find((post) => post.post_id === id);
      if (post) {
        resolve(post.post_id);
      } else {
        reject("찾는 포스트 없다");
      }
    }, 3000);
  });
};

const getComments = (post_id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = comments.filter((comment) => comment.post_id === post_id);
      if (result.length > 0) {
        resolve(result);
      } else {
        reject("찾는 포스트에 코멘트가 없다");
      }
    }, 4000);
  });
};
```

- Promise를 반환하도록 코드를 수정한다
- onSucess와 onError와 같은 콜백 함수를 받지않고 Promise 객체의 resolve, reject를 활용

```jsx
getPost(postNum)
.then(postId => {
  console.log('Post:', postId)
  return getComments(postId)
})
.then(result => console.log('Comments:', result))
.catch(message => console.log(message));
```

- `then` 메소드를 통해 resolve의 경우의 콜백 함수를 정의
- `getComments` 함수가 반환하는 프로미스 객체를 반환(2줄이상) 해줌으로써 다시한번 `.then` 으로 콜백
- catch는 getPost와 getComments 의 경우 모두 캐치가능하여 유용하다
- 콜백지옥을 벗어나 깔끔하게 사용가능

### Async와 Await

```jsx
async function getResult() {
  const postId_result = await getPost(postNum);
  const comments_result = await getComments(postId_result);
  console.log("Post:", postId_result, "Comments:", comments_result);
}

getResult();
```

- 함수앞에 `async` 라는 키워드를 써줘야한다. (비동기적인 실행을 알림)
- `await` 을 사용하면 호출된 Promise의 promiseResult 를 기다려서 받아온다