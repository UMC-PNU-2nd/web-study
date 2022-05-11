// 새로고침 시 댓글 사라지는 문제 해결하기

// 사용자 댓글을 로컬 스토리지에 저장

// 저번 시간 예제
const $commentList = document.querySelector('#commentsList');
const $commentForm = document.querySelector('#commentInputContainer');
const $commentInput = document.querySelector('#commentInput');

const commentItemTemplate = (newComment) => {
    return `
    <li class="commentItem">
        <img src="https://yt3.ggpht.com/ytc/AKedOLSQGbDNv_O0h6b23kaHrSI7UyfBQS_fNdKeKg=s88-c-k-c0x00ffffff-no-rj" class="profileImg" />
        <div>
            <p id="commentName">Ekil</p>
            <p>${newComment}</p>
            <div class="flex">
                <button class="commentBtn">
                    <span class="commentIcon">
                        <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z" class="style-scope yt-icon"></path></g></svg>
                    </span>
                </button>
                <button class="commentBtn">
                    <span class="commentIcon">
                        <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z" class="style-scope yt-icon"></path></g></svg>
                    </span>
                </button>
                <button class="commentBtn">
                    답글
                </button>
            </div>
        </div>
    </li>
    `;
}

// const newComment = commentItemTemplate('안녕하세요. 반갑습니다.');
//
// $commentList.insertAdjacentHTML('afterbegin', newComment);

$commentForm.addEventListener('submit', handleSubmit);

// 이번 시간 예제
// 1. 새로운 배열 생성
const comments = [];

// 4. 새로고침되지 않아 로컬 스토리지에 저장되지 않아서, 함수 만들어 호출 -> 3.에서 적은 코드를 실행시키고 싶으니까(새 댓글이 제출되는 이벤트가 발생했을 때! => 그러니까 handleSubmit이라는 이벤트핸들러 마지막에 이 함수에 호출기호 달아서 써주는 것이고) 함수로 만들어서 함수이름에 호출기호만 달면 이 코드가 실행되도록 하려는 것!!
function saveItem() {
    // 3. 배열을 로컬 스토리지에 저장
    localStorage.setItem('comments', JSON.stringify(comments));
}

// 7. 새로고침 시, 로컬 스토리지에 저장된 댓글들이 페이지에 출력되도록 하기
function displayHistory() {
    const savedComments = JSON.parse(localStorage.getItem('comments'));

    // 8. savedComments를 하나하나 돌며 comment들을 commentItemTemplate에 넣어주기
    savedComments.map(comment => {
        // 9. commentItemTemplate에 넣어 바꿔준 comment를 배열 comments에 넣어주기(=새로고침할 때마다 빈 배열 되는 것 방지)
        const newCommentItem = commentItemTemplate(comment);
        comments.push(comment); // newCommentItem이 아니라 comment를 comments에 넣어주는 것에 대한 의문: newCommentItem은 사용자 눈에 보이는 멀쩡한 댓글 형태임(사용자 이름, 프로필 사진, 좋아요 싫어요 답글 버튼이 있는). comments는 댓글을 넣을 배열인데, 개발자 도구의 로컬 스토리지 창에서 확인했을 때 Key가 comments, Value가 배열 comments의 내용물(?)임. 따라서, newCommentItem을 comments에 넣으면 깔끔하게 댓글 내용만 담긴 배열(["안녕하세요", "반갑습니다"])이 아니라, 만들어둔 템플릿에 댓글 내용이 ${} 안에 담긴 형태의 거대한 생김새가 될 것. 그걸 원하는 게 아니라 위에 예시로 든 깔끔한 배열 형태를 원하는 것이기에, comment를 넣어줘야 하는 것이다.
        // 10. 만든 것을 $commentList에 추가
        $commentList.insertAdjacentHTML('afterbegin', newCommentItem);
    })
}

// 11. 선언한 함수 실행
displayHistory();

// 6. 'comments'가 로컬 스토리지에 배열 형태로 잘 저장되고 있는지 확인
// const savedComments = JSON.parse(localStorage.getItem('comments'));
// console.log(typeof savedComments);
// console.log(savedComments);
// console.log(savedComments[0]);
// 배열이 아니라 문자열 꼴로 저장되면, 인덱스로 접근시 해당 댓글이 아니라 글자 하나에만 접근 가능 -> 원하는 바가 아님
// console.log(savedComments[0])
// 안
// 안녕하세요 가 나오길 바랐는데. -> JSON.stringify, JSON.parse 사용하는 이유.

function handleSubmit(event) {
    event.preventDefault();
    const newComment = $commentInput.value;

    if (!newComment) {return};
    const newCommentItem = commentItemTemplate(newComment);
    $commentList.insertAdjacentHTML('afterbegin', newCommentItem);
    $commentInput.value = '';

    // 2. 새로운 댓글 추가될 때마다 배열(comments)에 추가
    comments.push(newComment);
    // console.log(comments); // 확인
    // 5. 만든 함수 실행시킴
    saveItem();
}

