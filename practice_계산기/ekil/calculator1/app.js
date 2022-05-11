const $answer = document.querySelector('.result');

const $ac = document.querySelector('.ac');
const $enter = document.querySelector('.enter');

const $nums = document.querySelectorAll('.num');
const $operators = document.querySelectorAll('.operator');

// 숫자, 연산자 누르면 창에도 입력되도록
// 계산한 값을 저장해뒀다가, enter 눌리면 그 값을 출력한다.
// 숫자 클릭시 클릭된 값을 변수에 저장
// 연산자 클릭시 해당 연산을 수행
// 수행한 결과를 answer에 저장
console.log($nums.tabIndex);
$nums.addEventListener('click', handleNumber);

function handleNumber() {
    // 클릭된 숫자가 뭔지 알아야 함
    console.log($nums.tabIndex);
    const i = $nums.tabIndex;
}

// enter
// 계산된 답을 띄워줌
// 계산은 엔터 눌리자 마자 하는 게 맞겠지 -> 그러면 어떻게 함수를 써야 하지?
// $enter.addEventListener('click', handleEnter);

// function handleEnter() {
//     const answer = 
// }

// ac의 기능을 함수로 정의하기
// 이벤트
$ac.addEventListener('click', handleClear);

function handleClear() {
    $answer.innerText = '';
}