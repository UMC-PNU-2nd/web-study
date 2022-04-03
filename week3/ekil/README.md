# 스터디 내용 정리

## 3주차 JavaScript

### 변수, 자료형
- const: 변하지 않는 데이터 값을 넣을 변수를 선언할 때 사용. (한 번 정의하고 할당하면 재할당 불가.)
- let: 변하는 데이터 값을 넣을 변수를 선언할 때 사용. (재할당 가능.)
- string: 문자열. `'안녕'`, `"hi"` 등.
- boolean: true, false의 두 가지 값만 갖는 데이터 타입.
- undefined: 비어있는 값을 의미하는데, 자동으로 값이 없음을 나타낼 때 쓰임. 변수가 선언됐으나 그 안에 아무런 값이 없는 상황이라면 자동으로 undefined라고 찍힘.
- null: 비어있는 값을 의미하나, 값이 의도적으로 비어있음을 알려주기 위해 사용됨. 개발자가 변수를 선언하고, 그 값을 null이라고 입력했을 때만 값이 null일 수 있음.

### 배열
- push: 배열의 맨 뒷자리에 요소(들)를 추가할 때 사용하는 메소드.
- unshift: 배열의 맨 앞자리에 요소(들)를 추가할 때 사용하는 메소드.
- splice: 배열에서, 원하는 지점에 요소(들)를 추가 및 삭제할 수 있는 메소드.
- pop: 배열의 맨 뒷자리에 있는 요소를 삭제할 때 사용하는 메소드.
- shift: 배열의 맨 앞자리에 있는 요소를 삭제할 때 사용하는 메소드.

### 객체
- 배열과 객체의 차이: 배열과 객체는 데이터들의 모음이란 점에서 같음. 그러나 데이터들의 단순한 나열에 불과한 배열과 달리, 객체는 데이터를 **key : value** 형태로 저장함. -> 각 value가 무엇을 의미하는지 key를 보고 바로 확인 가능.

    ❓ 객체의 value에는 함수(메소드) 형태도 저장할 수 있는데, 배열에도 함수를 저장할 수 있는가?
- 생성자 함수: 쿠키를 찍어내는 틀, 혹은 칼 만드는 것을 돕는 거푸집과 같은 역할을 하는 함수. 생성자 함수를 이용하면 객체(인스턴스)를 더 간단히 생성할 수 있음.

### 함수
- function: 인풋 값(인자)을 받아 어떤 기능을 거쳐 아웃풋(반환 값, 리턴 값)을 출력함. `function` 키워드를 써서 함수를 선언. 선언한 함수를 호출해서 실행시킴.
- arrow function: 간단하게 함수를 선언할 수 있음. `function` 키워드 대신 `const`를 사용, 화살표 이용. 인자가 하나이면 인자를 감싸는 `()` 생략 가능, 함수에서 실행할 코드가 한 줄이면 코드를 감싸는 `{}`와 `return` 키워드 생략 가능.

### 조건문
- if문이 거짓으로 판단하는 값: 0, -0, null, false, NaN, undefined, ''(빈 문자열)
- 삼항연산자: **조건 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드**의 형식으로, 조건문을 더 간단히 쓸 수 있음.
- if, else if, else문과 switch문의 차이: if, else if, else문은 만족하는(참인) 조건이 나오면 그 즉시 조건문에서 빠져나옴. 이와 달리 switch문은 만족하는 조건(case)이 나와도 조건문에서 나오지 않고, 그 아래의 코드까지 모두 실행함.

### 반복문
- for문과 while문을 사용하여 아래 배열의 index값들을 각 10씩 더한 반복문을 작성해주세요.

```jsx
const numArr = [77, 81, 12, 34, 51, 20];

for (let i = 0 ; i < numArr.length ; i++) {
  numArr[i] += 10;
}

console.log(numArr);
```

```jsx
const numArr = [77, 81, 12, 34, 51, 20];

let i = 0;
while (i < numArr.length) {
  numArr[i] += 10;
  i++;
}
```


---

(자세한 정리 시작)

### 자바스크립트는 프로그래밍 언어
**프로그래밍 언어**: 변수, 함수, 반복문, 조건문 등을 공통적으로 가짐.

### 변수
데이터를 저장하는 상자.

- **선언**: 변수를 정의하는 것.
    - `const`: 변하지 않는 데이터 값을 넣을 때 사용. → 한 번 정의하고 할당하면, 재할당 불가. (에러 뜸.)
    - `let`: 변하는 데이터 값을 넣을 때 사용. → 재할당 가능.

    ```jsx
    const 변수1 =
    let 변수2 =
    ```

- 할당: 변수에 어떤 값을 넣는 것.

    ```jsx
    const 변수1 = '코딩';
    let 변수2 = '자바스크립트';
    ```

    `변수1`에는 `'코딩'`이라는 값이, `변수2`에는 `'자바스크립트'`라는 값이 **할당**되었음. 위 작업은 **할당**이면서 **초기화**임.

    이 상태에서

    ```jsx
    변수1 = '코딩은 어려워';
    ```
    하면 에러 뜸. `const`로 변수를 정의하고 할당했기 때문.

    ```jsx
    변수2 = 'html';
    ```
    이 경우는 에러 뜨지 않음. `let`으로 변수를 정의하고 할당했기 때문.

    → **고정된 데이터 값**을 넣으려는 경우엔 `const`를, **변하는 값**을 넣으려는 경우엔 `let`을 사용할 것.

- **초기화**: 정의한 변수에 넣는 첫 번째 값.
- **재할당**: 이미 값이 들어간(할당된) 변수에 다른 값을 집어넣는 것.


### 데이터 타입(자료형)
변수에 담을 수 있는 데이터의 타입(종류).

1. **string**: 문자열. `''`, `""`로 표현.

    ```jsx
    const str = '안녕';
    const str2 = "hi";
    const num = '2!!';
    ```

2. **number**: 숫자.

    ```jsx
    const number = 2;
    ```

3. **bigInt**: 큰 숫자. (**number**가 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있음.)

4. **boolean**: **true**, **false**(혹은 **참**과 **거짓**, **0**과 **1**)의 두 가지 값만 갖는 데이터 타입.

    ```jsx
    const bool = true;
    const bool1 = false;
    ```
    문자열처럼 `""` 쓰지 **않음**.

5. **symbol**: 중복되지 않는 고유값. 익명의 객체 속성을 만들 수 있음. 범용성 낮음.

6. **null**, **undefined**: 비어있는 값을 의미함.

    ```jsx
    const a = undefined;
    const b = null;
    ```

    **undefined**는 자동으로 값이 없음을 나타냄.

    **null**은 수동적으로 값이 없음을 저장함.

    ```jsx
    let variable;
    console.log(variable);
    ```

    `variable`이라는 변수만 선언한 채로(값을 넣지 않고) console을 찍어보면, `undefined`가 찍힘.

    → 변수가 선언됐는데 아무런 값이 없음을 자동적으로 알려주는 것이 `undefined`.

    `null`은 개발자가 변수를 선언하고, 그 값을 `null`이라고 입력했을 때만 값이 `null`일 수 있음. 

    → 값이 의도적으로 비어있음을 알려주기 위해 `null`을 사용하는 것.

7. **object**: 객체. 위에서 살펴본 데이터 타입을 제외한 모든 데이터 타입들이 포함됨.
    
    함수, 배열, 객체 등.



### 연산자
1. **산술 연산자**: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`
    
    ```jsx
    const aa = 10 % 3;
    console.log(aa);
    ```
    
    >> **1** (10을 3으로 나눈 나머지 값)
    
    ```jsx
    const bb = 10 ** 2;
    console.log(bb);
    ```
    
    >> **100** (10의 제곱)
    

    `++`, `--`는 **증감 연산자**라고도 함.
    
    ```jsx
    let cc = 5;
    cc += 10; // cc = cc + 10 이라는 의미
    console.log(cc);
    ```
    
    >> 15

    💡 JS에서 한 줄짜리를 주석 처리하려면, 주석 처리할 문장 앞에 `//`.

    ```jsx
    cc -= 8; // cc = cc - 8
    console.log(cc);
    ```

    >> 7


    ❓ **증감 연산자** 설명한다고 했는데 `+=`과 `-=` 사용 예시를 보여줌.

    mdn에 따르면 `+=`과 `-=`은 **할당 연산자**이고, 
    **산술 연산자**에 해당하는 `++`는 증가 연산자, `--`는 감소 연산자.


    - `++`는 단항 연산자로, 피연산자에 1을 더함.
    
        `++x`와 같이 전위 연산자로 사용하면 피연산자(x)에 1을 더한 값을 반환,

        `x++`와 같이 후위 연산자로 사용하면 피연산자(x)에 1을 더하기 전의 값을 반환.

    - `--` 역시 단항 연산자, 피연산자에서 1을 뺌.

        `--x`와 같이 전위 연산자로 사용하면 피연산자(x)에서 1을 뺀 값을 반환,

        `x--`와 같이 후위 연산자로 사용하면 피연산자(x)에서 1을 빼기 전의 값을 반환.

2. **할당 연산자**: `=`
    
    `=`의 오른쪽에 있는 값이 `=`의 왼쪽에 있는 변수에 할당되도록 하는 연산자.

3. **문자열 연산자**: `+`, `+=`
    1. `+`
        
        **산술 연산자**와는 다름. 문자열끼리 더해줌(합쳐줌).
        
        ```jsx
        let data = 'happy' + '2022';
        console.log(data);
        ```
        
        >> “happy2022”
        
        💡 “happy 2022”라는 결과가 나오게 하고 싶다면, 공백까지 적어줘야 함.
        
        ```jsx
        let data = 'happy' + ' 2022';
        console.log(data);
        ```
        
        ```jsx
        let data = 'happy ' + '2022';
        console.log(data);
        ```
        
        ```jsx
        let data = 'happy' + ' ' + '2022';
        console.log(data);
        ```
        
        >> “happy 2022”
        

    2. `+=`
        
        ```jsx
        data += '!!'; //data = data + '!!'와 같은 의미
        console.log(data);
        ```
        
        >> “happy 2022!!”


4. **비교 연산자**: 두 개의 **피연산자**를 비교해서 **boolean** 값을 반환함.
    1. `==`: 두 개의 **피연산자**가 **같은지** 확인함. 같으면 **true**를, 다르면 **false**를 반환.
        
        `===`: `==`과 같지만, `==`보다 엄격하게 비교함. 
        

        ```jsx
        1 == 1
        ```
        
        >> true
        

        ```jsx
        1 === 1
        ```
        
        >> true
        

        ```jsx
        1 == '1'
        ```
        
        >> true
        
        `1`은 **number**, `'1'`은 **string**으로 다르지만, 안의 값이 같은 숫자(1)이기에 true를 반환함.

        
        ```jsx
        1 === '1'
        ```
        
        >> false
        
        `1`과 `'1'` 속의 값(1)이 같은지 확인부터 하고, 데이터 타입까지 같은지 확인함. 데이터 타입까지 일치해야만 true를 반환.
        

        ```jsx
        null == undefined
        ```
        
        >> true
        
        둘이 의미하는 바는 똑같기에, true를 반환.
        

        ```jsx
        null === undefined
        ```
        
        >> false
        
        데이터 타입은 다르기에 false를 반환.
        

    2. `!=`: 두 개의 **피연산자**가 **서로 일치하지 않으면** **true**를, **일치**하면 **false**를 반환.
        
        `!==`: `!=`과 같지만, `!=`보다 엄격하게 비교함.
        
        
        ```jsx
        1 != '1'
        ```
        
        >> false
        

        ```jsx
        1 !== '1'
        ```
        
        >> true
        

    3. 부등호 연산자: `<`, `>`, `<=`, `>=`
        
        ```jsx
        2 > 3
        ```
        
        >> false
        

        ```jsx
        2 >= 2
        ```
        
        >> true
        

        💡 문자열끼리의 비교
        
        ```jsx
        'a' > 'aa'
        ```
        
        >> false
        
        순서(a-b-c-d-...)가 같은 알파벳일 경우, 문자열의 길이가 긴 것이 더 크다고 봄.
        

        ```jsx
        'a' < 'z'
        ```
        
        >> true
        
        알파벳 순서가 뒤인 알파벳이 더 크다고 봄.

5. **논리 연산자**: `&&`, `||`, `!`
    
    1. `&&`: 그리고. and.
    
    ```jsx
    const numdata = 5;
    numdata > 0 && numdata < 10;
    ```
    
    >> true
    

    ```jsx
    numdata > 0 && numdata >10;
    ```
    
    >> false
    
    → `&&`의 앞에 있는 조건과 뒤에 있는 조건이 둘 다 참이어야 true를 반환. 둘 중 하나라도 거짓이라면 false를 반환.
    
    
    2. `||`: 또는. or.
    
    ```jsx
    numdata > 0 || numdata > 10;
    ```
    
    >> true
    
    → `||`의 앞에 있는 조건과 뒤에 있는 조건 둘 중 하나라도 참이면 true를 반환. 둘 다 거짓이어야만 false를 반환.
    

    3. `!`: 부정. not.
    
    ```jsx
    !true
    ```
    
    >> false
    

    ```jsx
    !false
    ```
    
    >> true
    

    ```jsx
    !(numdata > 5)
    ```
    
    >> true
    
    `numdata` 값은 `5`이므로, `numdata > 5`는 거짓임. 따라서 false를 반환해야 하지만, `!`를 썼으므로 true를 반환.


### 배열

1. 배열: 연관성 있는 것들의 리스트.

2. 배열 **선언**하기, **초기화**하기
    1. 배열을 `[ ]` 안에 정의하고, 변수(`travel_spot`)에 넣어줌.
        
        ```jsx
        const travel_spot = ['방콕', '뉴욕', '파리'];
        ```
        

    2. `new Array`를 이용해 배열 정의.
        
        ```jsx
        const travel_spot = new Array('방콕', '뉴욕', '파리');
        ```
        

    3. 먼저 빈 배열(인자가 하나도 없는)을 선언하고, 값을 하나하나 넣어주기. (**인덱스** 이용)
        
        ```jsx
        const travel_spot = [];
        travel_spot[0] = '방콕';
        travel_spot[1] = '뉴욕';
        travel_spot[2] = '파리';
        ```
        
        ```jsx
        const travel_spot = new Array();
        travel_spot[0] = '방콕';
        travel_spot[1] = '뉴욕';
        travel_spot[2] = '파리';
        ```
        
        💡 **인덱스**는 **0**부터 시작. 각 원소의 자리 번호를 말함.

3. 배열 안의 각각의 **값에 접근**하기.
    
    **인덱스** 사용: 배열 안의 몇 번째 원소에 접근하는지 바로 알 수 있음.
    
    ```jsx
    const paris = travel_spot[2];
    console.log(paris);
    ```
    
    >> “파리”

4. 요소 **추가** 및 **삭제**.

변수는 `const`로 선언했을 때 재할당 불가.

배열도 `const`로 선언했다면 완전히 새로운 배열을 재할당하는 것은 불가.

```jsx
travel_spot = ['토론토', '멜버른', '바르셀로나', '아테네'];
```

>> Uncaught TypeError: Assignment to constant variable. ...


그러나, **기존 배열을 수정(요소 추가 및 삭제)**하는 것은 가능!

- 요소 **추가**하는 메소드
    - `push`: 원래 있던 배열 **뒤**에 `( )`에 인자로 넣은 값(원소)들이 **추가**됨.
        
        ```jsx
        travel_spot.push('토론토', '퀘백');
        console.log(travel_spot);
        ```
        
        >> [”방콕”, “뉴욕”, “파리”, “토론토”, “퀘백”]
        
        💡 콘솔에 **// [object Array] (5)**라는 주석이 먼저 나오는데, **(5)**는 (새로운) **배열의 길이**를 말함.
        
        **배열의 길이**: 원소의 개수를 의미함. 마지막 원소의 인덱스 값에 1을 더한 값과 같음.
        
        `push`의 **반환 값**은 **새로운 배열의 길이**.
        
        따라서 `push`를 사용했을 때의 **반환 값**은 **// [object Array] (n)**의 **n** 값과 같다.
        
        그러나 모든 상황에서 **반환 값**이 **// [object Array] (n)**의 **n** 값인 것은 아니다! `push`와 `unshift`에서 우연히 두 값이 같은 것일 뿐, 이 주석은 반환 값을 알려주는 주석이 아님.
        
        💡 `travel_spot.push('토론토', '퀘백');`을 `result`라는 새로운 변수에 넣어주고, `console.log(travel_spot);`에 `result`도 함께 넣으면, 현재 `travel_spot`의 **배열**과 그 **반환 값**을 확인할 수 있음.
        
        ```jsx
        const result = travel_spot.push('토론토', '퀘백');
        console.log(travel_spot, result);
        ```
        
        >> [”방콕”, “뉴욕”, “파리”, “토론토”, “퀘백”] 5
        
        변수 `result`를 만들고, 변수 `travel_spot`에 `push('토론토', '퀘백')`을 실행한 반환 값을 콘솔에 찍어달라 했더니, 현재 배열의 길이와 같은 **5**가 나옴.
        
    - `unshift`: 원래 있던 배열 **앞**에 `( )`에 인자로 넣은 값(원소)들이 **추가**됨.
        
        ```jsx
        travel_spot.unshift('바르셀로나');
        console.log(travel_spot);
        ```
        
        >> [”바르셀로나”, ”방콕”, “뉴욕”, “파리”, “토론토”, “퀘백”]
        
        `unshift`의 **반환 값**도 **새로운 배열의 길이**.
        
        따라서 `unshift`를 사용했을 때의 **반환 값**도 **// [object Array] (n)**의 **n** 값과 같다.
        
        💡 `travel_spot.unshift('바르셀로나');`를 `result2`라는 새로운 변수에 넣어주고, `console.log(travel_spot);`에 `result`도 함께 넣으면, 현재 `travel_spot`의 **배열**과 그 **반환 값**을 확인할 수 있음.
        
        ```jsx
        const result2 = travel_spot.unshift('바르셀로나');
        console.log(travel_spot, result2);
        ```
        
        >> [”바르셀로나”, ”방콕”, “뉴욕”, “파리”, “토론토”, “퀘백”] 6
        
    - `splice`: **원하는 지점**에 **추가** 및 **삭제**
        
        ```jsx
        splice(배열의 변경을 시작할 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들)
        ```
        
        ```jsx
        travel_spot.splice(4, 0, '멜버른', '아테네');
        console.log(travel_spot);
        ```
        
        >> [”바르셀로나”, ”방콕”, “뉴욕”, “파리”, “멜버른”, “아테네”, “토론토”, “퀘백”]
        
        💡 `splice`는 추가, 삭제 함께 가능한 메소드여서, 반환 값이 `push`, `unshift`와 다름.
        
        - **추가**할 경우, **반환 값**은 **빈 배열**.
        - **삭제**할 경우, **반환 값**은 **삭제된 원소**.
        
        💡 `travel_spot.splice(4, 0, '멜버른', '아테네');`를 `result3`이라는 새로운 변수에 넣어주고, `console.log(travel_spot);`에 `result3`도 함께 넣으면, 현재 `travel_spot`의 **배열**과 그 **반환 값**을 확인할 수 있음.
        
        ```jsx
        const result3 = travel_spot.splice(4, 0, '멜버른', '아테네');
        console.log(travel_spot, result3);
        ```
        
        >> [”바르셀로나”, ”방콕”, “뉴욕”, “파리”, “멜버른”, “아테네”, “토론토”, “퀘백”]
        
           []
        
        → **반환 값**이 **빈 배열**임을 확인 가능.
        

- 요소 **삭제**하는 메소드
    
    💡 **삭제**는 추가와 다르게 **하나씩만** 가능.
    
    💡 **반환 값**은 **삭제된 원소(요소)**.
    
    - `pop`: **맨 뒤**의 요소(원소) **삭제**.
    
    ```jsx
    travel_spot.pop();
    console.log(travel_spot);
    ```
    
    >> [”바르셀로나”, ”방콕”, “뉴욕”, “파리”, “멜버른”, “아테네”, “토론토”]
    
    💡 `travel_spot.pop();`을 `result4`라는 새로운 변수에 넣어주고, `console.log(travel_spot);`에 `result4`도 함께 넣으면, 현재 `travel_spot`의 **배열**과 그 **반환 값**을 확인할 수 있음.
    
    ```jsx
    const result4 = travel_spot.pop();
    console.log(travel_spot, result4);
    ```
    
    >> [”바르셀로나”, ”방콕”, “뉴욕”, “파리”, “멜버른”, “아테네”, “토론토”] “퀘백”
    

    - `shift`: **맨 앞**의 요소(원소) **삭제**.
    
    ```jsx
    const result5 = travel_spot.shift();
    console.log(travel_spot, result5);
    ```
    
    >> [”방콕”, “뉴욕”, “파리”, “멜버른”, “아테네”, “토론토”] ”바르셀로나”
    

    - `splice`
    
    ```jsx
    const result6 = travel_spot.splice(3, 3);
    console.log(travel_spot, result6);
    ```
    
    >> [”방콕”, “뉴욕”, “파리”] 
    
       [“멜버른”, “아테네”, “토론토”]
    
    ✍️ 이유는 모르겠으나, `push`, `unshift`, `pop`, `shift`와 달리 `splice`를 이용해 요소를 추가하거나 제거하면, 반환 값이 배열 형태로 나옴.


### 객체(Object)
관련된 데이터들의 모음.

배열도 데이터들의 모음이지만, 데이터들의 (단순한) 나열임.

[이름, 종류, 직업, 성별] 등의 정보를 저장할 수 있으나, 계속 순서를 기억해야 함. 데이터에 접근할 때도 각 데이터가 무엇을 의미하는지 파악해야 함.

```jsx
const pooh = ['pooh', 'bear', 'disney character', 'boy'];
```

pooh의 **종류** 데이터에 접근하기 위해선, `pooh[1]` 입력. → 데이터가 무엇을 의미하는지, 그 순서를 알아야 함.: 배열의 한계.

배열의 한계를 극복하기 위해 등장한 것이 객체. 

1. 객체 선언하기.
    
    **key : value’** 형태로 저장.
    
    ```jsx
    const pooh = {
    	name : 'pooh',
    	species : 'bear',
    	job : 'disney character',
    	gender : 'boy'
    }
    ```
    
    위와 같이 객체를 선언하면, `'bear'`가 의미하는 바가 `'species'`, 즉 종류임을 바로 확인 가능.
    

    함수도 저장 가능.
    
    ```jsx
    const pooh = {
    	name : 'pooh',
    	species : 'bear',
    	job : 'disney character',
    	gender : 'boy',
    	sayhi : function() {
    		console.log("I'm winnie the pooh. What's your name?");
    	}
    }
    ```
    

    객체 안의 데이터들=**Property**, 함수=**Method**라고 부름.
    
    `gender : 'boy'` 뒤에 새로운 **key**인 `sayhi`를 쓰고, 그 **value**를 함수로 줬음.

    

2. 객체의 원소(프로퍼티, 메소드) 하나하나에 접근하기.
    - `.` 이용.
        
        ```jsx
        pooh.species
        ```
        
        위의 것을 콘솔로 확인하려면, 아래와 같이 `console.log();`의 `()` 안에 위의 말을 잘라내서 붙여넣어 줌.
        
        ```jsx
        console.log(pooh.species);
        ```
        
    - `[]` 이용.
        
        ```jsx
        console.log(pooh['species']);
        ```
        
        💡 `[]` 안은 문자열로 바꿔줘야 함!
        
        **key**에 **공백**이나 **특수 문자**가 들어갔을 때는 꼭 `[]`를 이용해야 함.
        
        ```jsx
        const pooh = {
        	name : 'pooh',
        	species : 'bear',
        	job : 'disney character',
        	gender : 'boy',
        	'say-Hi' : function() {
        		console.log("I'm winnie the pooh. What's your name?");
        	}
        }
        ```
        
        >> Uncaught SyntaxError: Unexpected token ‘-’ ...
        
        💡 **key**를 `sayhi`에서 `say-Hi`로 바꾸고 싶다면, 특수 문자가 포함되었기 때문에 문자열 형태로 써줘야 함. (`'say-Hi'`)
        
        ```jsx
        console.log(pooh.say-Hi);
        ```
        
        >> Uncaught ReferenceError: Hi is not defined ...
        
        `say-Hi`를 하나의 함수 이름으로 쓴 것인데, 이를 인식하지 못하기 때문에 에러 발생.
        
        → 특수 문자, 공백이 들어간 **key**에 접근하기 위해서는 `[]`를 이용해야 하고, **key**도 문자열 형태로, 따옴표로 감싸서 써줘야 함.
        
        ```jsx
        console.log(pooh['say-Hi']);
        ```
        
        >> function() {
        		console.log("I'm winnie the pooh. What's your name?");
        	}
        
        함수는 **실행**을 위해 사용하는 것. 뒤에 **호출 기호 `()`**를 쓰면 함수 **실행** 가능.
        
        ```jsx
        console.log(pooh['say-Hi']());
        ```
        
        >> “I’m winnie the pooh. What's your name?"
        
3. 객체에 요소 추가 및 삭제
    
    **프로퍼티**나 **메소드**를 새로 **추가**: 접근할 때와 같음
    
    - 프로퍼티 추가
        
        ```jsx
        pooh.favorites = ['honey', 'friends', 'cake'];
        ```
        
    - 메소드 추가
        
        ```jsx
        pooh['say-bye'] = function() {
        		console.log("I'm winnie the pooh. See you later.");
        	}
        ```
        
        ```jsx
        pooh['say-Bye'] = function() {
        		console.log("I'm winnie the pooh. See you later.");
        	}
        ```
        
    
    기존에 있던 **프로퍼티**, **메소드**를 **삭제**하기: `delete`
    
    ```jsx
    delete pooh.favorites;
    ```
    
4. 생성자 함수(Constructor Function): 객체를 생성해주는 함수. 쿠키를 찍어내는 틀과 같은 역할.
        
    일반 함수가 아니라 생성자 함수임을 나타내기 위해 맨 앞 글자를 대문자로.
        
    ```jsx
        function Character(name, species, job, gender) {
	        this.name = name;
	        this.species = species;
	        this.job = job;
	        this.gender = gender;
	        this['say-Hi'] = function() {
                console.log(`I'm ${this.name}. What's your name?`);
            };
            this['say-Bye'] = function() {
                console.log(`I'm ${this.name}. See you later.`);
            };
        }
    ```
        
    - 함수이기에 `function` 키워드를 먼저 쓰고, 함수 이름을 써줌.
    - 위의 `pooh` 객체를 선언했던 것처럼 `name`, `species`, `job`, `gender`라는 프로퍼티와 `say-Hi`, `say-Bye`라는 메소드를 추가해줘야, 쿠키를 찍어내는 틀과 같은 역할을 할 수 있음.
            
        → `name`, `species`, `job`, `gender`를 모두 인자로 받아옴. `say-Hi`와 `say-Bye`는 `I'm` 뒤에 위의 `name`을 그대로 가져오면 될 것이라 인자로 받지 않음.
            
        
    - 인스턴스: 생성자 함수를 통해 만들어진 객체.
    - `this`: 각각의 인스턴스를 가리킴.
        
    - ``I'm ${this.name} What's your name?`` 부분은 `"I'm" + this.name + "What's your name?"`와 같이 쓸 수도 있음.
            
            
        ✍️ `${}` 이용하려면 `""`나 `''`가 아니라 `(=백틱=backtick=backquoto=grave accent)로 감싸줘야 함.
            
        `+`를 사용해 문자열들을 합치는 게 아니라, 백틱을 이용하는 방식을 **템플릿 리터럴**이라 함.
            
        [https://curryyou.tistory.com/185](https://curryyou.tistory.com/185) : 템플릿 리터럴 설명 글
            
        [https://velog.io/@sunaaank/js-backtick](https://velog.io/@sunaaank/js-backtick) : 백틱 설명 글
            
        ```jsx
            `I'm ${this.name} What's your name?` // O
            "I'm ${this.name} What's your name?**"** // X
            'I'm ${this.name} What's your name?' // X
            
            `I'm` + this.name + `What's your name?` // O
            ****"I'm" + this.name + "What's your name?" // O
            'I'm' + this.name + 'What's your name?' // X
        ```
            
        - `this.name`의 색깔이 다르게 적용되는 것을 확인 가능.
        - `${}`를 이용하려면 템플릿 리터럴 방식을 사용해야 하므로, **백틱**으로 감싸야만 함.
        - `+`로 나열한 것 중 마지막 케이스는 `I'm`과 `What's`에 쓰인 `'`와, 문자열임을 나타내기 위해 사용한 `'`가 서로 구분되지 않아서 초록색으로 된 부분들을 문자열로 인식하고 있음. 지금은 그 부분들을 문자열로 쓰려고 한 게 아니므로 잘못된 예시.
    

    #### 위와 같이 **생성자 함수**를 만들었으니, 이 **생성자 함수**를 사용해서 **객체** 즉, **인스턴스**를 만들어보자.

    ```jsx
    const pooh = new Character('winnie the pooh', 'bear', 'disney character', 'boy');
    ```

    - `pooh`라는 이름의 인스턴스를 만들려고 한다.
    - `new` 뒤에 원하는 생성자 함수(`Character`)를 써준다.
    - `pooh`의 `name`, `species`, `job`, `gender`를 써준다.

    - `console.log(pooh);`라고 써서 콘솔에 찍어보면,
    
        ```jsx
        // [object Object]
        {
    	    "name" : "winnie the pooh",
    	    "species" : "bear",
    	    "job" : "disney character",
    	    "gender" : "boy",
    	    "say-Hi" : "function () {\n  console.log(`I'm ${this.name}. What's your name?`);\n  };",
    	    "say-Bye" : "function () {\n  console.log(`I'm ${this.name}. See you later.`);\n  };"
        }
        ```
    
        인스턴스가 잘 생성되었음을 확인 가능.
    

    - `console.log(pooh['say-Hi']());`라고 써서 콘솔에 찍어보면,
    
        ```jsx
        "I'm winnine the pooh. What's your name?"
        ```
    
        잘 실행됨을 확인 가능.
    

    - 스누피, 피카츄라는 인스턴스도 만들어보자.
    
        ```jsx
        const snoopy = new Character('snoopy', 'dog', 'peanuts character', 'boy');
    
        const pikachu = new Character('pikachu', 'squirrel', 'pokemon character', 'boy');
        ```
    
        ```jsx
        console.log(snoopy, pikachu);
        console.log(snoopy['say-Bye'](), pikachu['say-Bye']());
        ```
    
        콘솔에 찍어보면, 잘 되었음을 확인 가능.
    
        💡 함수 사용시 호출 기호 `()` 넣는 것 확인!!
    

    #### 생성자 함수로 만든 인스턴스도, 다른 객체와 동일한 방식으로 프로퍼티와 메소드를 추가할 수 있음.

    ```jsx
    pooh.favorites = ['honey', 'friends', 'cake'];
    ```

    → `pooh`에만 `['honey', 'friends', 'cake']`라는 배열을 가진 `favorites`라는 프로퍼티가 추가됨.


    #### 생성자 함수를 사용해 객체 선언하기

    ```jsx
    const obj = new Object();
    ```

    `obj`라는 변수를 만들고 `Object`라는 생성자 함수를 이용해 빈(`()` 안에 인자 없는) 객체를 생성.

    콘솔에 찍어보면(`console.log(obj);`),

    ```jsx
    // [object Object]
    {}
    ```

    빈 객체가 나옴.

    그 뒤, 프로퍼티와 메소드를 하나하나 추가.

    ```jsx
    obj.name = 'dwell';
    obj.greeting = function(){
      console.log('hi')
    }
    ```

    혹은, 한 번에 선언해도 됨.

    ```jsx
    const obj = new Object({
      name : 'dwell',
      greeting : function () {
        console.log('hi')
      }
    })
    ```

    💡 앞에서 **배열**을 선언하는 방법 b, c도 위와 같이 생성자 함수를 이용한 것이었음.

    ```jsx
    const array = new Array();
    ```

    대문자로 시작한 `Array()`가 생성자 함수.

    ```jsx
    const travel_spot = new Array('방콕', '뉴욕', '파리');
    ```

    ```jsx
    const travel_spot = new Array();
    travel_spot[0] = '방콕';
    travel_spot[1] = '뉴욕';
    travel_spot[2] = '파리';
    ```

    빈 배열을 먼저 생성하고, 인덱스를 이용해 원소를 하나하나 추가.


### 함수

어떤 인풋 값이 들어오면, 함수에서 어떤 기능을 거쳐, 아웃풋이 출력됨.

- 인풋 값 = **인자**
- 아웃풋 = **리턴 값, 반환 값**


1. 함수 선언하기.
    
    ```jsx
    function multiply10 (num) {
      const result = num * 10
      return result;
    }
    ```
    
    - 함수라는 것을 나타내기 위해 `function` 키워드 사용.
    - `function` 키워드 뒤에 함수 이름을 적어줌.
        
        함수 이름은 자유롭게 지으면 되지만, 함수 안에서 수행되는 기능을 이름만 봐도 알 수 있도록 짓는 것이 컨벤션.
    - 인풋 값이 있다면, `()` 사이에 넣어주면 됨.
    
        **매개 변수**: 인풋 값을 대신해서 **함수 안의 인풋이 들어올 자리**에 써줌. 다른 변수들처럼 아무 이름이나 사용 가능하나, 함수 이름처럼 의미 있는 단어로 써주는 것이 좋음.
        
        예) 숫자가 인풋으로 들어올 것으로 예상될 경우, `num`이라는 이름의 매개 변수를 설정.
    

    - `{ }` 안에 해당 함수 내에서 실행할 코드를 적어줌.
    
        ```jsx
        const result = num * 10
        ```
    
        `result`라는 변수를 선언.
    
        사용자가 입력한 값을 매개 변수 `num`에 받아와서, 그 값에 `10`을 곱한 값을 `result`라는 변수에 할당하라는 의미.

    - 아웃풋 값 정의.
    
        지금은 얻고 싶은 값이 `result`와 같음.
    
        `return` 키워드 사용.
    
        단순히 `console.log`를 찍고 싶은 것이라면 반환 값이 필요 없을 수 있음.
    
        그러나, 함수의 결과 값을 **어떤 변수에 할당**하려 하거나, 결과 값이 어딘가에 반드시 **저장되어야 하는** 상황이라면 다름. → `return` 꼭 적어줘야 함.

2. 함수 호출하기.
    
    함수를 **실행**하기 위해선, 선언을 하고 **호출**을 해야 함.
    
    ```jsx
    multiply10();
    ```
    
    인풋 값이 있다면, `()` 안에 써줘서 호출해야 함.
    
    ```jsx
    multiply10(10);
    ```
    
    위와 같이 호출한 것을 콘솔에 찍어보고 싶다면, 위에 쓴 것을 다른 변수에 할당하면 됨.
    
    ```jsx
    const data = multiply10(10);
    console.log(data);
    ```
    
    단순히 `console.log`(로 결과 값)를 찍으려는 것이면, 애초에 이렇게 써도 됨.

    ```jsx
    function multiply10 (num) {
      const result = num * 10
      console.log(result);
    }

    multiply10(10);
    ```

3. **Arrow Function**
    
    arrow는 화살표를 의미함.
    
    `function` 키워드 사용한 함수 선언보다 훨씬 간단.
    
    **콜백 함수**일 경우 또는 **인자**나 **반환 값**이 **한 줄**일 경우에 많이 사용.
    

    ```jsx
    const multiply10 = (num) => {
      const result = num * 10
      return result;
    }
    
    const data = multiply10(10);
    console.log(data);
    ```
    
    - `function` 키워드가 아니라, 일반 변수를 선언할 때와 같이 `const` 사용.
    - 화살표 이용해 간단히 쓸 수 있음.
    
    - 인자가 하나일 경우, `()`도 생략 가능. (여러 개일 땐 X.)
        
        ```jsx
        const multiply10 = num => {
          const result = num * 10
          return result;
        }
        ```
        
    
    - 함수에서 실행할 코드가 한 줄일 경우, `{}` 생략 가능.
        
        ```jsx
        const multiply10 = num =>
          return num * 10;
        ```
        
        `return`도 생략 가능. (실행할 코드가 한 줄일 경우)

        ```jsx
        const multiply10 = num => num * 10;
        ```


### 조건문
1. `if` 문
    
    ```jsx
    if (조건) {
      실행할 코드
    }
    ```
    
    조건이 하나인 경우에 사용.
    
    - **조건**에 들어갈 값은 반드시 **불리언** 형태(→ 참/거짓 판별 가능한 형태).
        - **false**로 간주(판별)되는 값들: `0`, `-0`, `null`, `false`, `NaN`, `undefined`, `''`(빈 문자열)
        - 나머지는 모두 **true**로 판별됨.
        
    
    - **실행할 코드**에 적힌 코드는, **조건**이 참일 때만 실행됨.
        
        **거짓**일 때는 코드 실행 없이 건너뛰고, 다음 코드로 넘어감.
        
        ```jsx
        let age = 22;
        
        if ( age > 19 ) {
          console.log('술을 마실 수 있다');
        }
        ```
        
        `age`에 할당된 `22`는 `19`보다 큼. → **조건**(`age > 19`)이 **true**. → 코드가 실행됨. → 콘솔에 `"술을 마실 수 있다"`가 찍힘.
        
        ```jsx
        let age = 15;
        
        if ( age > 19 ) {
          console.log('술을 마실 수 있다');
        }
        ```
        
        **조건**이 **false**여서 코드가 실행되지 않았기에, 콘솔에 아무것도 찍히지 않음.

2. `if ... else` 문
    
    ```jsx
    if ( age > 19 ) {
      console.log('술을 마실 수 있다');
    } else {
      console.log('미성년자');
    }
    ```
    
    **조건**이 참일 때는 `if` 문의 코드가, 거짓일 때는 `else` 문의 코드가 실행됨.
    

    **삼항 연산자**
    
    `조건 ? 참일 때 실행될 코드 : 거짓일 때 실행될 코드`의 형식을 취함.
    
    ```jsx
    age > 19 ? console.log('술을 마실 수 있다') : console.log('미성년자');
    ```
    
    반환 값을 콘솔에 나오게 하는 게 아니라, 변수에 저장하고 싶다면,
    
    ```jsx
    const result = age > 19 ? '술을 마실 수 있다' : '미성년자';
    ```
    
    변수(`result`) 선언.
    
    `console.log`들을 지워줌.
    
    **조건**(`age > 19`)이 참일 때는 앞의 값인 `'술을 마실 수 있다'`가 `result`에 할당되고, 거짓일 때는 뒤의 값인 `'미성년자'`가 `result`에 할당됨.

3. `else if` 문 (`if, else if, else`의 순서로 구성.)
    - **조건**이 여러 개일 때.
    - `else if`는 무한으로 쓸 수 있음.
    - 마지막 `else`는 위의 조건들이 하나도 만족되지 못했을 때 실행되는 최후의 코드.
    
    ```jsx
    if (age < 10) {
      console.log('애기');
    } else if (age >= 10 && age < 20) {
      console.log('10대');
    } else if (age >= 20 && age < 30) {
      console.log('20대');
    } else if (age >= 30 && age < 40) {
      console.log('30대');
    } else if (age >= 40 && age < 50) {
      console.log('40대');
    } else if (age >= 50 && age < 60) {
      console.log('50대');
    } else if (age >= 60 && age < 70) {
      console.log('60대');
    } else {
      console.log('노인');
    }
    ```
    
    `age`에 `15`를 할당하면,
    
    - `if` 문의 **조건**은 거짓 → 실행 X, 다음 코드로 넘어감
    - 첫 번째 `else if` 문의 **조건**은 참 → 코드 실행 → 콘솔에 “10대”가 찍힘.
    - 그 뒤의 나머지 코드는 확인하지 않고(그러니 당연히 실행하지도 않고), 조건문을 빠져나옴.
    
    💡 **조건**에 쓴 `age >= 10 && age < 20`은 **10 ≤ age < 20**과 같은 의미임. JS에서는 이처럼 분리해서 쓴다고 함.
    
    `&&`을 사용하지 않고 쓰려면,
    
    ```jsx
    if (age >= 70) {
      console.log('노인');
    } else if (age >= 60) {
      console.log('60대');
    } else if (age >=50) {
      console.log('50대');
    } else if (age >= 40) {
      console.log('40대');
    } else if (age >= 30) {
      console.log('30대');
    } else if (age >= 20) {
      console.log('20대');
    } else if (age >= 10) {
      console.log('10대');
    } else {
      console.log('애기');
    }
    ```
    
4. `swtich` 문
    ```jsx
    switch(age) {
      case 70:
        console.log('70대');
        break;
      case 60:
        console.log('60대');
        break;
      case 50:
        console.log('50대');
        break;
      case 40:
        console.log('40대');
        break;
      case 30:
        console.log('30대');
        break;
      case 20:
        console.log('20대');
        break;
      case 10:
        console.log('10대');
        break;
      default:
        console.log('애기');
    }
    ```

    `switch` 키워드 작성.

    대상이 되는 변수(`age`)를 `()`에 작성.

    `{}` 안에 내용 작성.

    `case`에는 `if` 문에서와 같은 조건문(`age >= 60`)이 들어갈 수 없음. 반드시 하나의 값을 써야 함.

    `age`가 `30`이라면, `case 70` 즉, `age`가 `70`인지부터 확인. → 아니므로, 건너 뜀. → `case 60`, `case 50`, `case 40`에서 같은 과정 거침. → `case 30`을 만족하기에, 콘솔에 “30대”를 찍어주고, `break` 문을 통해 이 `switch` 문에서 나옴.

    `if else` 문과 달리, 만족하는 조건(`case`)이 생겨도 자동으로 바로 빠져나오지 않고, 그 아래의 코드까지 모두 실행함. 그래서 `break`를 사용한 것.

    위의 코드에서 `break;`를 모두 없애면, 콘솔에 `“30대”`, `“20대”`, `“10대”`, `“애기”`가 찍힘. `switch` 문은 만족하는 조건이 생기면 그 아래까지 다 실행해버리기 때문.

    `default` 키워드는 `else`와 비슷한 역할을 함. (일치하는 항목이 없으면 실행되는 기본 옵션.) `default` 실행 후엔 어차피 더 실행될 코드가 없기에 아래에 `break` 쓰는 것은 선택 사항.


### 반복문
1. `for` 문
    
    ```jsx
    for (초기값 ; 종료 조건 ; 증감) {
      실행할 코드
    }
    ```
    
    키워드 `for`.
    
    초기값(반복을 할 시작점) 설정.
    
    반복문의 종료 조건문. -> '이때'까지.
    
    증감 설정.
    
    → 이 셋의 구분자는 `,`가 아니라 `;`.
    
    예제. 1부터 10까지 콘솔에 출력하는 반복문 만들기.
    
    ```jsx
    for (let i = 1 ; i < 11 ; i++) {
    	console.log(i);
    }
    ```
    
    - 초기값을 그냥 `1`이 아니라, `let i = 1`과 같이 씀.
        
        초기화하기 전에 변수 선언이 먼저 필요하기 때문.
        
        변수의 값이 계속 바뀔 것이므로 `const`가 아니라 `let` 사용.
        
        변수의 이름은 `i`.
        
        `i`라는 변수를 선언하고, `1`을 넣어줌. (=초기화)
        
    - 종료 조건을 지정해주지 않으면 반복문은 무한히 반복. (=**무한 루프**)
        
        10까지 반복할 것이므로 종료 조건 적어줌.
        
        `i = 10`이 아니라 `i < 11`로 적어야 함. ← `for` 문의 중간 파트(=종료 조건)에는 해당 문장이 참인지 거짓인지 판별되는 문장이 적혀야 함.
        그 문장이 참이라면 반복문을 실행, 거짓이면 반복문을 종료하도록.
        
    - `i` 값 변경해주기.
        
        `i` 값이 `10`을 초과했을 때 반복문을 멈추길 원함. → `i` 값이 바뀌어야 가능.
        
        `i` 값이 바뀌지 않고 계속 `1`이라면, 무한 루프에 빠지게 될 것.
        
        `i++`는 `i` 값을 1씩 증가시켜줌. (`++`: 증가 연산자)
        
    - 순서는 다음과 같음.
        
        `i`가 `1`이다. → `i < 11`이라는 조건을 만족. → `console.log(i)` 실행. → `i++`를 거쳐 `i` 값이 `2`가 됨.
        → `i`가 `2`이다. → `i < 11`이라는 조건을 만족. → `console.log(i)` 실행. → `i++`를 거쳐 `i` 값이 `3`이 됨.
        → 반복...
        → `i`가 `10`이다. → `i < 11`이라는 조건을 만족. → `console.log(i)` 실행. → `i++`를 거쳐 `i` 값이 `11`이 됨.
        → `i`가 `11`이다. → `i < 11`이라는 조건을 만족 X. → 반복문을 돌지 못하고 종료됨.

    배열에 하나하나 접근할 때 많이 사용.

    - `const numArr = [45, 32, 11, 98, 22];` 각 원소에 접근해 `+10` 해주려면?
    
    
        ✍️ Try it yourself: 
    
        ```jsx
        const numArr = [45, 32, 11, 98, 22];
          for (let i = 0 ; i < 5 ; i++) {
            console.log(numArr[i] + 10);
          }
        ```
    
        배열의 각 원소에 접근하기 위해 인덱스를 이용. 그 인덱스의 값을 넣어줄 변수 `i`를 선언. 인덱스 값은 `0`부터 시작하므로 `0`으로 초기화.
    
        현재 배열 중 마지막 요소의 인덱스 값은 `4`. 따라서 `i`가 `5`보다 작을 때까지 반복문을 실행하면 됨.
    
        `i` 값은 `1`씩 커지면 됨.
    
        `i`의 초기값은 `0`으로, `5`보다 작음. 반복문을 실행함.
    
        `numArr[0]`은 `45`. `45`에 `10`을 더해주고, 그 값을 콘솔에 찍음.
    
        이제 `i`는 `0`에 `1`을 더한 `1`이 됨.
    
        위의 과정을 반복하면, 콘솔 창은 아래처럼 됨.
    
        ```jsx
        55
        42
        21
        108
        32
        ```
    

        💡 모범답안

        ```jsx
        const numArr = [45, 32, 11, 98, 22];
  
        for (let i = 0 ; i < numArr.length ; i++) {
          numArr[i] += 10;
        }
  
        console.log(numArr);
        ```

        배열의 길이를 반환하는 `length`라는 속성을 이용해 `numArr.length`라고 써주면, `numArr`에 원소가 추가되거나 삭제되어도 그 길이를 정확히 가져올 수 있음.

        `numArr[i]`, 인덱스를 이용해 `numArr`의 원소 하나하나에 접근.

        접근한 원소들은 `+= 10`을 통해 `10`씩 더해줌.

        이렇게 쓴 코드는 10씩 증가된 값들로 이루어진 배열을 출력해줌.

        ```jsx
        // [object Array] (5)
        [55,42,21,108,32]
        ```

2. `while` 문
    
    ```jsx
    시작점
    while (조건) {
      반복적으로 실행할 코드
      증감 설정
    }
    ```
    
    `for` 문과 비슷. 위치에 맞게 잘 쓰면 됨!
    
    - 1부터 10까지 콘솔에 찍히도록 하려면?
        
        ```jsx
        for (let i = 1 ; i < 11 ; i++) {
          console.log(i);
        }
        ```
        
        위 코드를 `while` 문으로 나타내면,
        
        ```jsx
        let i = 1;
        while (i < 11) {
          console.log(i);
          i++;
        }
        ```
        
    
    - `const numArr = [45, 32, 11, 98, 22];` 각 원소에 접근해 `+10` 해주려면?
        
        ```jsx
        const numArr = [45, 32, 11, 98, 22];
          
        for (let i = 0 ; i < numArr.length ; i++) {
          numArr[i] += 10;
        }
          
        console.log(numArr);
        ```
        
        ```jsx
        const numArr = [45, 32, 11, 98, 22];
        
        let i = 0;
        while (i < numArr.length) {
          numArr[i] += 10;
          i++;
        }
        
        console.log(numArr);
        ```
        
    
    - `break` 문
        
        **조건**에 `true`를 줄 수도 있음. → 항상 참이므로 **무한 루프**에 빠짐.
        
        무한 루프에서 빠져나오려면, `break`로 현재 실행 중인 반복문에서 탈출.
        
        ```jsx
        let i = 1;
        while (true) {
          if (i > 10) {
            break;
          }
          console.log(i);
          i++;
        }
        ```
        
        `while` 안에 `if` 문을 써줌. `i` 값이 `10`보다 커지면 `break` 실행되므로, 1부터 10까지만 콘솔에 찍히고 반복문에서 나오게 됨.
        
    
    - `continue` 문
        
        `continue`를 사용하면, 뒤에 있는 코드는 실행하지 않고 다음 반복문으로 넘어감.
        
        짝수만 콘솔에 찍히게 하려면, `continue`를 이용해 홀수일 때는 다음 반복문으로 넘어가게 함.
        
        ```jsx
        let i = 1;
        while (true) {
          if (i > 10) {
            break;
          }
          
          i++;
          if (i%2 !== 0) {
            continue;
          }
          
          console.log(i);
        }
        ```
        
        `i++`가 `console.log(i)` 아래에 있으면, `i`가 홀수일 때는 `i++`가 실행되지 못함. `continue`를 만나면 그 아래 코드들이 실행되지 않고 바로 다음 반복문으로 넘어가기 때문.
        → `i` 값이 홀수인 채로 무한히 반복됨.

3. `do while` 문
    
    `while` 문과 유사하나, 먼저 코드 실행하고, 조건을 나중에 확인하는 방식.
    
    한 번이라도 실행은 하고 싶은(해야 하는) 경우에 사용.
    
    ```jsx
    let i = 12;
    while (i < 11) {
      console.log(i);
      i++;
    }
    ```
    
    ```jsx
    let i = 12;
    do {
      console.log(i);
      i++;
    } while (i < 11)
    ```
    
    위 코드 둘 다 `i` 값이 `12`로, `11`보다 큼.
    
    `while` 문의 경우, 조건을 만족하지 않으니 아래의 코드를 한 번도 실행하지 못한 채로 반복문 종료됨. → 콘솔 창에 아무것도 찍히지 않음.
    
    `do while` 문의 경우, 먼저 코드를 실행한 후, 조건을 확인. 조건 확인했더니 조건을 만족하지 않아서, 반복문에서 나옴. → 먼저 실행한 코드에 의해 콘솔 창에 `12`가 한 번 찍힘.
    
    - 1부터 10까지 콘솔에 찍히도록 하려면?
        - `for` 문
            
            ```jsx
            for (let i = 1 ; i < 11 ; i++) {
              console.log(i);
            }
            ```
            
        - `while` 문
            
            ```jsx
            let i = 1;
            while (i < 11) {
              console.log(i);
              i++;
            }
            ```
            
        - `do while` 문
            
            ```jsx
            let i = 1;
            do {
              console.log(i);
              i++;
            } while (i < 11)
            ```
            
            `let i = 1`: 변수 `i`를 선언하고, `1`로 초기화해줌.
            
            조건(`i < 11`)을 확인하지 않고, 먼저 코드를 한 번 실행(`console.log(i)`).
            
            그 후 조건을 확인하고, 참이면 코드를 다시 한 번 더 실행. 거짓이면 반복문은 그대로 종료.