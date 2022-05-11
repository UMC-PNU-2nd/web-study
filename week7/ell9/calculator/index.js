const result = document.querySelector('#result');
let operCnt = 0;
let pntCnt = 0;

// AC, Enter 버튼
const funcBtn = document.querySelectorAll('.func');
funcBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.innerText == 'AC')
      result.innerText = '0';
    else
      result.innerText = eval(result.innerText);
    operCnt = 0;
    pntCnt = 0;
    if (result.innerText.includes('.'))
      pntCnt += 1;
  })
})

// 숫자 버튼
const numBtn = document.querySelectorAll('.number');
numBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (result.innerText == '0')
      result.innerText = btn.innerText;
    else
      result.innerText += btn.innerText;
  })
})

// 연산자 버튼
const operBtn = document.querySelectorAll('.operator');
operBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (['+', '-', '*','/'].includes(result.innerText.substr(-1)))
      alert('수를 입력해주세요!');
    else if (result.innerText == 0)
      alert('수를 입력해주세요!');
    else {
      result.innerText += btn.innerText;
      operCnt += 1;
    }
  })
})

// 소수점 버튼
const pntBtn = document.querySelector('#point');
pntBtn.addEventListener('click', () => {
  if(!['+', '-', '*','/'].includes(result.innerText.substr(-1))) {
    if ((operCnt == pntCnt) || !result.innerText.includes('.')){
      result.innerText += '.';
      if (result.innerText.includes('..'))
        result.innerText = result.innerText.replace('..','.');
      pntCnt += 1;
    }
  }
})

