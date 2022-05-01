// 사용자로부터 댓글을 입력받아 댓글 리스트에 추가되게 하기

// 사용할 요소 DOM으로 선택하기
const $commentList = document.querySelector('#commentsList');
const $commentForm = document.querySelector('#commentInputContainer');
const $commentInput = document.querySelector('#commentInput');

// 저번 시간 예제
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

// 이번 시간 예제
// 1. comment 버튼 및 Enter 눌렀을 때 새로고침 되는 것 막기
// preventDefault() 메서드 사용

// 2. 사용자 입력 값 받아와 저장하기

// 3. 저장한 입력 값을 코멘트 리스트에 추가하기
// 저장한 입력 값을 저번 시간에 만든 commentItemTemplate에 넣어서, 열심히 만들어둔 템플릿의 HTML을 리턴해준다.
// 리턴한 값을 commentList에 추가해준다.

// 4. 댓글 입력 창에 적힌 내용을 없애주기=새로고침 해주기.
// 사용자 입력 값 받아온 $commentInput.value의 값을 빈 문자열로 바꿔줌.

// 5. 댓글로 아무 내용을 추가하지 않고 제출해도 댓글이 등록되는 케이스를 예외 처리 해주기
// 조건문과 return 이용.

$commentForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const newComment = $commentInput.value;

  if (!newComment) {return}; // newComment에 아무것도 추가되지 않았다면, 값은 빈 문자열. -> 조건문 배울 때, 0, -0, null, false, NaN, undefined, ''(빈 문자열)은 false로 판별된다고 했다! -> 빈 문자열이면 false -> !(빈 문자열=false) = true -> if문은 true일 때 실행하므로. -> 빈 문자열이어서 !(newComment)가 true가 된다면 return을 만나게 됨 -> 함수는 return을 만나는 즉시 종료된다고 했음 -> 사용자 입력 값이 템플릿에 저장되고 그것이 리스트에 추가되고 댓글로 등록되며 댓글 입력 창은 다시 빈 문자열 상태로 돌아가는 작업이 실행되지 않음.
  const newCommentItem = commentItemTemplate(newComment);
  $commentList.insertAdjacentHTML('afterbegin', newCommentItem);
  $commentInput.value = '';
}
