# LocalStorage

로그인 정보와 같이 계속 유지되어야하는 정보들이 있음

이때 로컬스토리지를 사용하여 이러한 데이터를 저장할 수 있다.

## 로컬 스토리지란?

클라이언트 사용자의 저장 공간

개발자 도구에서 로컬스토리지에 저장되는 목록을 확인가능

key-value 형태로 데이터를 저장

### 저장하기

```jsx
// 로컬 스토리지 정보를 저장할 때 사용하는 메소드 setItem

localStorage.setItem('name', 'uzun');
localStorage.setItem('age', 23);
```

- 새로고침을 해도 날라가지 않는다
- 저장되는 형태는 모두 **문자열**의 형태이다

### 가져오기

```jsx
// 로컬스토리지에서 정보를 가져올 때 사용하는 메소드

const result = localStorage.getItem('age');

console.log(result);
// 23

console.log(typeof result);
// string
```

- 위에서 setItem으로 저장된 키를 호출하여 데이터를 가져온다
- getItem으로 가져오며 값은 반환된다
- 저장되는 데이터는 무조건 문자열의 형태이다

### 객체 저장하기/ 가져오기

객체 travel을 저장하고 싶다고 하자.

```jsx
const travel = {
	destinations : ['paris', 'sydney', 'taipei'],
	days: 100,
	mate : undefined,
	isAvailable : true
}

localStorage.setItem('travel', travel);
// [object Object]
```

- 객체 travel은 제대로 저장되지 않았다. WHY?
    - 저장되는 형태가 문자열이여야하기 때문
- JSON으로 stringfy가 필요하다!

### JSON stringify / parsing

```jsx
localStorage.setItem('travel', JSON.stringify(travel));
/* 
{
	"destination":['paris', 'sydney', 'taipei'],
	"days":100,
	"isAvailable": true
}
*/
```

- JSON 문자열으로 변환되어 문자열 데이터로 잘 들어간다!
- `JSON.stringify()` 로 변환

```jsx
const data = localStorage.getItem('travel');
data = JSON.parse(data);

console.log(data.destination[2])
// 'taipei'
```

- 가져올때에는 JSON에서 객체로 parsing이 필요하다
- `JSON.parse()` 로 변환

### 데이터 삭제하기

```jsx
// 특정 키-값 지우기
localStorage.removeItem('name');

// 전체 날리기
localStorage.clear();
```

### 실습에서~

```jsx
const comments = [];

function handleSumbit(event){
	event.preventDefault();
	const newComment = $commentInput.value;

	if (!newComment) {return};
	const newCommentItem = commentItemTemplate(newComment);
	$commentList.insertAdjacentHTML('afterbegin', newCommentItem);
  $commentInput.value = "";

	comments.push(newComment);
	saveItem();
}
```

- 댓글 등록을 눌렀을 때 실행되는 핸들러
- 새로운 댓글을 comments 라는 배열에 저장하고 `saveItem()` 이라는 함수를 호출

```jsx
function saveItem() {
	localStorage.setItem("comments", JSON.stringify(comments));
}
```

- 이 함수에서는 댓글들을 저장하고 있는 commments 배열을 Stringify 하여
    - 로컬 스토리지에 저장한다
    

```jsx
function displayHistory () {
	const savedComments = JSON.parse(localStorage.getItem('comments'));

	savedComments.map(comment => {
		const newCommentItem = commentItemTemplate(comment);
		comments.push(comment);
		$commentList.insertAdjacentHTML('afterbegin', newCommentItem);
	})
}

displayHistory();
```

- 로컬 스토리지에 저장한 댓글들을 새로고침하면 다시 불러와야한다!
- `displayHistory()` 함수를 실행하여 새로고침 시 댓글을 채워준다
- `comments` 또한 초기화 되므로 채워준다