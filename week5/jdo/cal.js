const operator = document.querySelectorAll('.operator');
const number = document.querySelectorAll('.number');
const screenText = document.querySelector('.screenText');
const zero = document.querySelector('.zero');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
var screenNum1 = '';
var screenNum2 = '';
var isAfterOperator = true;
var whichOperator = 0;
for (let i = 0; i < number.length; i++) {
    number[i].onclick = () => {
        // 피연산자 1
        if (isAfterOperator) {
            screenNum1 += number[i].textContent;
            screenText.textContent += number[i].textContent;
        }
        // 피연산자 2
        else {
            screenNum2 += number[i].textContent;
            screenText.textContent += number[i].textContent;
        }
    }
}
zero.onclick = () => {
    screenNum1 += zero.textContent;
    screenText.textContent = screenNum1;
}
dot.onclick = () => {
    var dotCount = 0;

    if (isAfterOperator) {
        for (let i = 0; i < screenNum1.length; i++) {
            if (screenNum1.charAt(i) == '.') {
                dotCount++
            }
        }
        if (dotCount > 0) {
            alert('점은 한번만 찍을 수 있습니다.');
        }
        else {
            screenNum1 += dot.textContent;
            screenText.textContent += dot.textContent;
        }
    }
    else {
        dotCount = 0;
        for (let i = 0; i < screenNum2.length; i++) {
            if (screenNum1.charAt(i) == '.') {
                dotCount++
            }
        }
        if (dotCount > 0) {
            alert('점은 한번만 찍을 수 있습니다.');
        }
        else {
            screenNum2 += dot.textContent;
            screenText.textContent += dot.textContent;
        }
    }
}
// AC
operator[0].onclick = () => {
    screenText.textContent = '';
    screenNum1 = '';
    screenNum2 = '';

    isAfterOperator = true;
}
// C
operator[1].onclick = () => {
    var temp = '';
    if (isAfterOperator) {
        for (let i = 0; i < screenNum1.length - 1; i++) {
            temp += screenNum1.charAt(i);
        }
        screenNum1 = temp;
    }
    else {
        for (let i = 0; i < screenNum2.length - 1; i++) {
            temp += screenNum1.charAt(i);
        }
        screenNum2 = temp;

    }
    screenText.textContent = temp;
}
// 나누기
operator[3].onclick = () => {
    isAfterOperator = false;
    whichOperator = 1;
    screenText.textContent += ' / ';
}
//곱
operator[4].onclick = () => {
    isAfterOperator = false;
    whichOperator = 2;
    screenText.textContent += ' * ';
}
// 뺄셈
operator[5].onclick = () => {
    isAfterOperator = false;
    whichOperator = 3;
    screenText.textContent += ' - ';
}
// 덧셈
operator[6].onclick = () => {
    isAfterOperator = false;
    whichOperator = 4;
    screenText.textContent += ' + ';
}
equal.onclick = () => {
    // 연산자가 이미 입력된 경우
    if (!isAfterOperator) {
        switch (whichOperator) {
            case 1:
                screenNum1 = parseFloat(screenNum1) / parseFloat(screenNum2);
                screenText.textContent = screenNum1;
                break;
            case 2:
                screenNum1 = parseFloat(screenNum1) * parseFloat(screenNum2);
                screenText.textContent = screenNum1;
                break;
            case 3:
                screenNum1 = parseFloat(screenNum1) - parseFloat(screenNum2);
                screenText.textContent = screenNum1;
                break;
            case 4:
                screenNum1 = parseFloat(screenNum1) + parseFloat(screenNum2);
                screenText.textContent = screenNum1;
                break;
        }
        screenNum2 = '';
    }
    else {
        alert('연산자를 입력하세요');
    }
}