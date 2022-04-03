# 3. Javascript

## 1.  변수, 자료형, 연산자

- 변수
    - 데이터를 저장하는 상자
    - 선언 : 정의하는 것
        - `const` : 변하지 않는 데이터 값을 넣을 때 사용
        - `let` : 데이터 값이 변할 때 사용
    - 초기화 : 정의한 변수에 넣는 첫번째 값
    - 재할당 : 이미 값이 들어간 변수에 다른 값을 넣는 것
    
    ```jsx
    // 선언과 초기화를 동시에
    const 변수1 = '코딩';
    let 변수2 = '자바스크립트';
    
    // 변수1 = '코딩은 어려워'; (재할당 불가능)
    변수2 = 'html';
    ```
    

- 데이터 타입, 자료형
    - string : 문자열,  `‘안녕’` , `“hi”` 와 같이 작은따옴표 / 큰따옴표로 표현
    - number : 숫자
    - bigInt : 큰 값의 숫자 데이터 (자주 쓰이지 않음)
    - boolean : `true`, `false`로 표현 (1과 0으로도 표현이 가능하다.)
    - symbol : 중복되지 않는 고유한 값 (자주 쓰이지 않음)
    - null / undefined
        - `undefined` : 자동적으로 값이 없음을 나타낸다.
            
            ```jsx
            const variable;
            console.log(variable)
            // 출력값 : undefined
            // 변수를 선언하고 값을 넣어주지 않으면 자동으로 undefined
            ```
            
        - `null` : 수동적으로 값이 없는 것을 저장한다.
    - object : 객체 *ex) 함수, 배열, 객체*
    
- 연산자
    - 산술 연산자 : `+`, `-`, `/`, `*`, `%`, `**`
        
        ```jsx
        const a = 10 % 3;
        console.log(a);
        // 출력값 : 1
        // % 연산자는 나머지를 계산해준다.
        
        const b = 10 ** 2;
        console.log(b);
        // 출력값 : 100
        // ** 연산자는 거듭제곱을 계산해준다.
        ```
        
    - 대입 연산자 : `+=`, `-=`, `*=`, `/=`
        
        ```jsx
        let c = 5;
        c += 10; // c = c + 10;
        console.log(c);
        // 출력값 : 15 
        
        c -= 8; // c = c - 8;
        console.log(c);
        // 출력값 : 7
        ```
        
    - 증감 연산자 : `++`, `--`
    - 할당 연산자 : `=`
    - 문자열 연산자 : `+`
        
        ```jsx
        let data = 'happy' + ' 2022';
        console.log(data);
        // 출력값 : 'happy 2022'
        
        data += '!!'; // data = data + '!!';
        console.log(data);
        // 출력값 : 'happy 2022!!'
        ```
        
    - 비교 연산자
        - `==` : 두 개의 피연산자가 같은지 확인, 같으면 true, 다르면 false 반환
        - `===` : `==`과 역할이 같지만, 자료형까지 비교한다
            
            ```jsx
            null == undefined // true
            null === undefined // false
            ```
            
        - `!=`, `!==` : 두 개의 피연산자가 일치하지 않을 때 true, 일치하면 false
        - `A > B` A가 B보다 크면 true, 아니면 false
        - `A >= B` A가 B보다 크거나 같으면 true, 아니면 false
        - `A < B` A가 B보다 작으면 true, 아니면 false
        - `A <= B` A가 B보다 작거나 같으면 true, 아니면 false
            
            ```jsx
            // 문자열 비교
            'a' < 'aa' // 길이가 길면 크다
            'a' < 'a' // 알파벳 순서가 뒤에 있는 것이 더 크다
            ```
            
    - 논리 연산자 : &&(그리고), ||(또는), !(부정)
        - && : 둘 다 true여야만 true
        - || : 둘 중 하나만 true여도 true
        - ! : !true → false / !false → true

## 2. 배열

- 배열 : 연관성 있는 것들의 리스트

- 배열의 선언과 초기화
    
    ```jsx
    // 1.
    const travel_spot = ['방콕', '뉴욕', '파리'];
    
    // 2.
    const travel_spot = new Array('방콕', '뉴욕', '파리');
    
    // 3.
    const travel_spot = new Array();
    travel_spot[0] = '방콕';
    travel_spot[1] = '뉴욕';
    travel_spot[2] = '파리';
    ```
    

- 배열에 접근하기 → index 값 활용
    
    ```jsx
    const paris = travel_spot[2];
    console.log(paris);
    // 출력값 : '파리'
    ```
    

- 추가 및 삭제
    
    ```jsx
    // travel_spot = ['토론토', '멜버른', '바르셀로나', '아테네'];
    // 이미 만들어진 배열에 완전 새로운 배열을 재할당하는 것은 불가능
    // 추가나 삭제로 수정하는 것은 가능
    ```
    
    - `push` : 배열 뒤에 원소 추가 *(return 값 : 추가 후 배열의 길이)*
        
        ```jsx
        travel_spot.push('토론토', '퀘백');
        console.log(travel_spot);
        // 출력값 : ['방콕', '뉴욕', '파리', '토론토', '퀘백']
        ```
        
    - `unshift` : 배열 앞에 원소 추가 *(return 값 : 추가 후 배열의 길이)*
        
        ```jsx
        travel_spot.unshift('바르셀로나');
        console.log(travel_spot);
        // 출력값 : ['바르셀로나', '방콕', '뉴욕', '파리', '토론토', '퀘백']
        ```
        
    - `splice` : 원하는 지점에 추가 및 삭제 *(return 값 : 추가 → 빈 배열, 삭제 → 삭제된 값)*
        
        ⇒ `splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들)`
        
        ```jsx
        travel_spot.splice(4, 0, '멜버른', '아테네');
        console.log(travel_spot);
        // 출력값 : ['바르셀로나', '방콕', '뉴욕', '파리', '멜버른', '아테네', '토론토', '퀘백']
        ```
        
    
    - `pop` : 맨 뒤의 원소 삭제 (추가와 다르게 1개만 삭제) *(return 값 : 삭제된 값)*
        
        ```jsx
        travel_spot.pop();
        console.log(travel_spot);
        // 출력값 : ['바르셀로나', '방콕', '뉴욕', '파리', '멜버른', '아테네', '토론토']
        ```
        
    - `shift` : 맨 앞의 원소 삭제 *(return 값 : 삭제된 값)*
        
        ```jsx
        travel_spot.shift();
        console.log(travel_spot);
        // 출력값 : ['방콕', '뉴욕', '파리', '멜버른', '아테네', '토론토']
        ```
        
    - `splice`로 삭제하기
        
        ```jsx
        travel_spot.splice(3, 3); // 3번째 index부터 시작해서 3번째 원소를 포함한 3개를 삭제
        console.log(travel_spot);
        // 출력값 : ['방콕', '뉴욕', '파리']
        ```
        
    - `splice`로 동시에 추가와 삭제하기
        
        ```jsx
        travel_spot.splice(1, 1, '이스탄불', '하노이'); // 1번째 index부터 시작해 1개 삭제 후 원소 추가
        console.log(travel_spot);
        // 출력값 : ['방콕', '이스탄불', '하노이', '파리']
        ```
        
    

## 3. 객체

```jsx
const pooh = ['pooh', 'bear', 'disney character', 'boy'];
// 각각의 위치가 의미하는 바를 정확히 알기 어려움 => 배열의 한계
```

- 객체 : 배열의 한계를 극복하기 위해 등장

- 객체의 선언
    
    ```jsx
    const pooh = {
    	name : 'pooh',
    	species : 'bear',
    	job : 'disney character',
    	gender : 'boy',
    	'say-Hi' : function() {
    		console.log("I'm winnie the pooh, What's your name?");
    	}
    };
    
    // key와 value 형태로 저장
    // object 안의 data들은 property, 함수는 method라고 한다.
    ```
    

- 객체에 접근하기 : 주로  `.` 이나  `[]`  사용
    
    ```jsx
    pooh.species; // bear
    pooh['species'] // bear
    ```
    
    - key에 공백이나 특수문자가 들어갔을 때는 반드시 `[]`를 사용해야 한다.
        
        ```jsx
        // pooh.say-Hi; // 사용불가
        pooh['say-Hi']; // function 출력됨
        pooh['say-Hi'](); // "I'm winnie the pooh, What's your name?"
        ```
        

- 객체에 추가 및 삭제
    - 추가 ( `=` 사용)
        
        ```jsx
        pooh['say-Bye'] = function() {
        	console.log("I'm winnie the pooh, See you later");
        };
        pooh.favorites = ['honey', 'friends', 'cake'];
        
        console.log(pooh);
        
        /* 출력값
        {
        	'name' : 'pooh',
        	'species' : 'bear',
        	'job' : 'disney character',
        	'gender' : 'boy',
        	'say-Hi' : function() {
        		console.log("I'm winnie the pooh, What's your name?");
        	},
        	'say-Bye' : function() {
        		console.log("I'm winnie the pooh, See you later");
        	},
        	'favorites' : ['honey', 'friends', 'cake']
        }*/
        ```
        
    - 삭제 (`delete` 사용)
        
        ```jsx
        delete pooh['say-Bye'];
        delete pooh.favorites;
        
        console.log(pooh);
        
        /* 출력값
        {
        	'name' : 'pooh',
        	'species' : 'bear',
        	'job' : 'disney character',
        	'gender' : 'boy',
        	'say-Hi' : function() {
        		console.log("I'm winnie the pooh, What's your name?");
        	}
        }*/
        ```
        

- 생성자 함수 (blueprint) : 틀
    
    ```jsx
    function Character(name, species, job, gender) {
    	this.name = name; // this : 생성자 함수를 통해 만들어진 객체 -> 인스턴스
    	this.species = species;
    	this.job : job;
    	this.gender : gender;
    	this['say-Hi'] = function() {
    		console.log("I'm" + this.name + ", What's your name?");
    	};
    	this['say-Bye'] = function() {
    		console.log(`I'm ${this.name}, See you later`);
    	};
    }
    ```
    
    - 생성자 함수 사용해서 객체 만들기
        
        ```jsx
        const pooh = new Character('winnie the pooh', 'bear', 'disney charcter', 'boy');
        console.log(pooh);
        /* 출력값
        {
        	'name' : 'winnie the pooh',
        	'species' : 'bear',
        	'job' : 'disney character',
        	'gender' : 'boy',
        	'say-Hi' : function() {
        		console.log("I'm" + this.name + , What's your name?");
        	},
        	'say-Bye' : function() {
        		console.log(`I'm ${this.name}, See you later`);
        	}
        }*/
        
        console.log(pooh['say-Hi']());
        // 출력값 : "I'm winnie the pooh, What's your name?"
        
        const snoopy = new Character('snoopy', 'dog', 'comic book character', 'boy');
        const pikachu = new Character('pikachu', 'squirrel', 'pokemon charcter', 'boy');
        ```
        
    - 생성자 함수 사용해서 객체 선언하기
        
        ```jsx
        const obj = new Object();
        console.log(obj);
        // 출력값 : {}
        
        obj.name = 'dwell';
        obj.greeting = function(){
        	console.log('hi');
        };
        ```
        
        ```jsx
        const obj = new Object({
        	name : 'dwell',
        	greeting : function(){
        		console.log('hi');
        	};
        })
        ```
        

## 4. 함수

- 함수 : input값(인자)이 들어오면, function을 거쳐 output(return값)이 출력된다.
    
    ```jsx
    // 함수 선언
    function multiply10(num) {// 컨벤션 : 개발자들끼리의 규칙(여기서는 함수 안에서 수행되는 기능을 이름만 보고 알 수 있도록)
    	const result = num * 10;
    	return result; 
    }
    
    // 함수 호출
    const data = multiply10(10);
    console.log(data); // 출력값 : 1000
    ```
    

- arrow function (ES6부터 나온 최신 문법)
    
    ```jsx
    const multiply10 = (num) => {
    	const result = num * 10;
    	return result; 
    }
    
    const data = multiply10(100);
    console.log(data); // 출력값 : 1000
    ```
    
    - 위 케이스의 경우 `return result = num * 10;` 으로 함수 안의 내용을 줄일 수 있고, 한줄이 되므로 아래와 같이 정리할 수 있다.
    
    ```jsx
    const multiply10 = (num) => num * 10;
    
    const data = multiply10(100);
    console.log(data); // 출력값 : 1000
    ```
    

## 5. 조건문

- if문
    - `false`라고 판별되는 값 : `0`, `-0`, `null`, `false`, `NaN`, `undefined`, `‘’`
    
    ```jsx
    if (조건) { // 조건에 들어갈 것은 무조건 boolean 형태
    	실행할 코드 // 조건이 참일 때만 실행, 거짓이면 건너뛰고 다음 코드로 넘어간다
    }
    ```
    
    ```jsx
    let age = 22;
    
    if ( age > 19 ) {
    	console.log('술을 마실 수 있다.');
    }
    
    // 출력값 : '술을 마실 수 있다.'
    ```
    
    ```jsx
    let age = 15;
    
    if ( age > 19 ) {
    	console.log('술을 마실 수 있다.');
    }
    
    // 출력값 없음
    ```
    

- if else문
    
    ```jsx
    let age = 15;
    
    if ( age > 19 ) {
    	console.log('술을 마실 수 있다.');
    } else { // 조건이 거짓일 때 실행됨. 따로 조건이 없음
    	console.log('미성년자');
    }
    
    // 출력값 : '미성년자'
    ```
    
    - 삼항연산자 : 조건 ? 참일 때 실행될 코드 : 거짓일 때 실행될 코드
        
        ```jsx
        let age = 15;
        
        age > 19 ? console.log('술을 마실 수 있다.') : console.log('미성년자');
        
        // 출력값 : '미성년자'
        ```
        
        ```jsx
        let age = 15;
        
        const result = age > 19 ? '술을 마실 수 있다.' : '미성년자';
        console.log(result);
        
        // 출력값 : '미성년자'
        ```
        

- if, else if, else문 (`else if` ⇒ if문의 조건이 거짓이고 그 후 이 조건이 참일 때~ / `else if`는 무한으로 쓸 수 있다.)
    
    ```jsx
    let age = 15;
    
    if (age < 10) {
    	console.log('애기');
    } else if (age >= 10 && age < 20) { 
    					// 사실 이미 age < 10이 거짓이므로 age < 20만 적어도 됨
    	console.log('10대');
    } else if (age >= 20 && age < 30) {
    	console.log('20대');
    } else if (age >= 30 && age < 40) {
    	console.log('30대');
    } else if (age >= 50 && age < 60) {
    	console.log('40대');
    } else if (age >= 70 && age < 80) {
    	console.log('50대');
    } else if (age >= 80 && age < 90) {
    	console.log('60대');
    } else {
    	console.log('노인');
    }
    
    // 출력값 : '10대'
    ```
    

- switch문
    
    ```jsx
    switch(age) {
    	case 70: // 조건이 들어갈 수 없고, 특정한 값이 들어가야 한다
    		console.log("70대");
    		break; // switch문은 조건을 만족해도 아래 코드가 실행되기 때문에 break 설정
    	case 60:
    		console.log("60대");
    		break;
    	case 50:
    		console.log("50대");
    		break;
    	case 40:
    		console.log("40대");
    		break;
    	case 30:
    		console.log("30대");
    		break;
    	case 20:
    		console.log("20대");
    		break;
    	case 10:
    		console.log("10대");
    		break;
    	default:
    		console.log("애기");
    }
    ```
    

## 6. 반복문

- for문
    
    ```jsx
    for (초기값; 종료조건; 증감) { // 종료 조건은 조건문으로
    	실행할 코드
    }
    ```
    
    ```jsx
    for (let i = 1; i < 11; i++) { // i가 1일때부터 +1씩 하다가, i < 11이 false가 되면 종료
    	console.log(i);
    }
    
    /*출력값
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    */
    ```
    
    ```jsx
    const numArr = [45, 32, 11, 98, 22];
    for (let i = 0; i < numArr.length; i++) {
    	numArr[i] += 10;
    }
    console.log(numArr);
    
    //출력값 : [55, 42, 21, 108, 32]
    ```
    

- while문
    
    ```jsx
    시작점
    while (조건) {
    	실행할 코드
    	증감
    }
    ```
    
    ```jsx
    let i = 1;
    while(i < 11) {
    	console.log(i);
    	i++;
    }
    
    /*출력값
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    */
    
    ```
    
- `break` : 반복문을 돌다가 조건을 만족하면 반복문을 빠져나옴
    
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
    
- `continue` : 조건을 만족하면 다음 코드를 실행하지 않고 다음 루프를 돈다.
    
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
    
    /*출력값
    2
    4
    6
    8
    10
    */
    ```
    
- do while문 : 최초 한번은 조건을 확인하지 않고 무조건 코드를 실행
    
    ```jsx
    let i = 1;
    do {
    	console.log(i);
    	i++;
    } while(i < 11)
    ```