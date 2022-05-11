// 사칙연산을 수행하는 코드를 함수로 따로 만든다.
// 사칙연산 수행할 인자는 어떻게 받는가?
// button 태그에서는 value가 아니라 textContent 속성 이용 -> e.target.textContent

// 숫자1을 저장할 변수를 만든다
// 연산자를 저장할 변수를 만든다 -> 연산자도 변수에 저장하는구나..?
// 숫자2를 저장할 변수를 만든다

// 숫자 버튼 클릭 -> 클릭된 숫자를 변수에 저장 -> 연산자 버튼 클릭 -> 저장 -> 숫자 클릭 -> 숫자 저장 -> 엔터 클릭 -> 계산 -> 결과 출력

let num1 = '';
let operator = '';
let num2 = '';

const $answer = document.querySelector('.screen');
const $ac = document.querySelector('#ac');
const $enter = document.querySelector('#enter');

const $num0 = document.querySelector('#num0');
const $num1 = document.querySelector('#num1');
const $num2 = document.querySelector('#num2');
const $num3 = document.querySelector('#num3');
const $num4 = document.querySelector('#num4');
const $num5 = document.querySelector('#num5');
const $num6 = document.querySelector('#num6');
const $num7 = document.querySelector('#num7');
const $num8 = document.querySelector('#num8');
const $num9 = document.querySelector('#num9');

const $dot = document.querySelector('#dot');

const $plus = document.querySelector('#plus');
const $minus = document.querySelector('#minus');
const $multiply = document.querySelector('#multiply');
const $divide = document.querySelector('#divide');

// 처음 눌린 버튼의 textContent를 num1에 저장하고, answer창에 나오게 한다.
// 연산자
// 두 번째 눌린 버튼

// 클릭 이벤트 발생시, 위의 동작을 실행하는데, 연산자 눌리기 전에 눌린 숫자라면 num1에, 연산자 눌린 후에 눌린 숫자라면 num2에 저장해야 할 것.

// 반복문을 써서 아래 코드를 더 간단히 쓸 순 없나?
$num0.addEventListener('click', onClickNum);
$num1.addEventListener('click', onClickNum);
$num2.addEventListener('click', onClickNum);
$num3.addEventListener('click', onClickNum);
$num4.addEventListener('click', onClickNum);
$num5.addEventListener('click', onClickNum);
$num6.addEventListener('click', onClickNum);
$num7.addEventListener('click', onClickNum);
$num8.addEventListener('click', onClickNum);
$num9.addEventListener('click', onClickNum);

function onClickNum(e) {
    if (!operator) {
        $answer.value = '';
        num1 += e.target.textContent;
    } else {
        num2 += e.target.textContent;
    }
    $answer.value += e.target.textContent;
}

$plus.addEventListener('click', onClickOperator);
$minus.addEventListener('click', onClickOperator);
$multiply.addEventListener('click', onClickOperator);
$divide.addEventListener('click', onClickOperator);

function onClickOperator(op) {
    operator = op;
    $answer.value += op;
}

// enter 누르면 연산 실행해 답을 $answer.value에 저장하기

// switch 문 이용
// 현재 연산자는 button 태그에 감싸진 문자열 형태 -> 바로 계산 불가
// 현재 num1, num2도 문자열 형태!

$enter.addEventListener('click', onClickEnter);

function onClickEnter() {
    switch(operator) {
        case '+':
            $answer.value = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            $answer.value = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            $answer.value = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            $answer.value = parseFloat(num1) / parseFloat(num2);
            break;
    }
}
