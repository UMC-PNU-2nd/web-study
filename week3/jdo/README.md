# 3주차 javascript

# 변수

## 선언하는법

- const   변하지않는 데이터 값
- let     변하는 데이터 값

변수에 데이터를 넣는 행동 --> 할당

### const 변수1 = '코딩';

### 변수1 : 변수명

### = '코딩' : 할당

### const에 데이터값을 재할당할 수 없음 ==> 고정된 값을 넣을 때만 사용

## 데이터 타입, 자료형 :

### 1. string : 문자열

- const str = "안녕";
- const str1 = "hi";

### number : 숫자

- const number = 2;

### 3. bigInt : 값이 큰 숫자

### 4. boolean : true, false

const bool = true;

const bool1 = false;

### 5. symbol : 중복되지 않는 고유값

### 6-7. null / undefined

- const a = undefined
- const b = null
- undefined : 변수가 선언되었는데 값이 없다고 자동적으로 입력되는 값
- null 개발자가 일부러 값이 비어있다고 넣어주는 값

### 8. object : 객체 - 함수, 배열, 객체

===========================================

# 연산자

### 1. 산술연산자 : +, -, *, /, %, **

- 축약형 a = a + 10;
    
    => a += 10;
    

### 2. 증감연산자 : ++ --

### 

### 3. 할당연산자 : =

### 

### 4. 문자열 연산자 : +, +=

- let data = 'happy' + '2022';
- console.log(data); ==>  happy2022
- data += '!!';
- console.log(data); ==>  happy2022!!
- 

### 5. 비교연산자 : ==, ===, !=, !== boolean 값을 반환

- == 대충비교 (1, true 와 같다고 봄, null과 undefined를 같다고 봄)
- === 엄격비교 (무조건 같아야 true 반환)

### 6. 비교연산자 : <, >, <=, >=

### 7. 논리연산자 : &&(AND), ||(or), !(부정)

- && : 조건중 하나라도 false 면 false
- || : 조건중 하나라도 true 면 true
- ! : 반대
- 

===========================

# 배열

## 1. 배열 선언 방법

```html
const travel_spot = ['방콕', '뉴욕', '파리'];
```

```html
const travel_spot1 = new Array['방콕', '뉴욕', '파리'];
```

```html
const travel_spot2 = new Array();
```

```html
travel_spot2[0] = '방콕';
```

```html
travel_spot2[1] = '뉴욕';
```

```html
travel_spot2[2] = '파리';
```

## 2. 접근 : index

```html
const paris = travel_spot[2];
```

처음부터 0..1..2

## 3. 추가 및 삭제 ==> const 변수면 새로운 배열로 바꾸는건 안되지만 기존것을 바꾸는건 가능함.

### 추가하는 방법

- push : 뒤에 원소추가

```html
travel_spot.push('토론토','퀘벡');
```

- unshift : 앞에 원소추가
- splice : 원하는 지점에 추가 및 삭제

-> splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들);

```html
travel_spot.splice(4, 0, '멜버른', '아테네');
```

### 삭제하는 방법

- pop : 맨뒤의 원소 삭제 (하나만)
- shift : 맨앞의 원소를 삭제
- splice : 원하는 지점에 추가 및 삭제

```html
travel_spot.splice(3, 3);
```

splice 삭제와 추가 동시에도 가능

===================================

# 객체

==> 배열의 한계를 극복하기 위함임

함수도 저장가능

## 1. 객체 생성

```jsx
const pooh {
			name : 'pooh',

			specied : 'bear',
			
			job : 'disney charactor',
			
			gender : 'boy',
			
			sayHi : function(){
			
			console.log("hi");
			
			}

}
```

## 2. 객체 접근 : ., []

```jsx
console.log(pooh['species']);

console.log(pooh.sayHi());
```

## 3. 객체에 추가 및 삭제

### 추가

```jsx
pooh['say-bye'] = function() {

console.log("bye");

}

pooh.favories = ['honey', 'friends'];
```

### 삭제

```jsx
delete pooh.favorites
```

## 4. 객체 생성자 함수

```jsx
function Charactor(name, species, job, gender) {

				this.name = name;
				
				this.species =species;
				
				this.job = job;
				
				this.gender = gender;
				
				this['sayHi'] : function(){
				
								console.log("hi I'm. ${this.name} ");
				
				};

				this['saybye'] : function(){
				
				console.log("bye");
				
				};

}
```

${this.name} : 변수를 사용하는 방법

### 객체 생성

```jsx
//푸

const pooh = new Charactor('pooh', 'bear', 'disney charactor', 'boy');

//피카츄

const pooh = new Charactor('피카츄', '쥐', '포켓몬 캐릭터', 'boy');

//객체

const obj = new Object();

obj.name = 'dwell';

obj.greeting = 'hi'
```

이렇게 생성 및 선언을 해도되지만 위에 한것처럼 한꺼번에 해도됌

=====================================================

# 함수

```jsx
function 변수명(매개변수) {

				내용;
				
				return 반환값;

}
```

컨벤션

```jsx
function multiply10(num) {

				const result = num * 10;
				
				return result;

}
```

### 함수는 선언만 한다고 사용되는 것이 아님.

### 선언 후 호출을 해줘야 사용하는 것이다.

```jsx
const data = multiply10(5);
```

==> 함수 자체가 상수 값으로 볼 수 있어야한다.

### arrow function : 화살표 표기

```jsx

const multifly10 = (num) => {

				const result = num * 10;
				
				return result;

}
```

================================================

# 조건문

## if문 - else-if문 - else문

```jsx
if(조건문) {

			실행할 코드;

}
```

```jsx
if( age > 19 ) {

				console.log('술을 마실 수 있다.');
				
}else {
				
				console.log('미성년자');

}
```

## 삼항 연산자 : 조건 ? 참일 때 실행될 코드 : 거짓일 때 실행될 코드;

```jsx
const result age > 19 ? ('술을 마실 수 있다.') : ('미성년자');

console.log(result);
```

==> result 에 문자열 값이 담기게 된다.

```jsx
if ( age < 10) {

			console.log('애기');

}else if ( age >= 10 && age <20) {

			console.log('10대');

}

}else if ( age >= 20 && age <30) {

			console.log('20대');

}

}else if ( age >= 30 && age <40) {

			console.log('30대');

}

}else if ( age >= 40 && age <50) {

			console.log('40대');
		
}

}else if ( age >= 60 && age <70) {

			console.log('60대');

}

}else  {

			console.log('노인');

}
```

## switch 문

break를 사용하지 않으면 빠져나오지 않고 아래까지 모두 실행이 됌

```jsx
switch(age) {

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
			
			default :
			
						console.log('애기');
			
			break;

}
```

==========================

# 반복문

### for문

```jsx
for(초기값; 종료조건; 증감설정) {

실행할 코드;

}
```

1 ~ 10 까지 반복하기

```jsx
for(let i = 1; i <= 10; i++) {

				console.log(i);

}
```

### 종료조건을 설정하지 않으면 무한으로 돌아감 ( 무한루프 )

### 반복문은 배열에 하나하나 접근할 때 사용이 많이 됌

```jsx
const numArr = [45, 32, 11, 98, 22];

for(let i = 0; i< numArr.length; i++){

			console.log(numArr[i]);

			numArr[i] += 10;

}
```

### i< numArr.length; ==> 배열의 크기가 바뀔수도 있기때문에 동적으로

### 바뀔 수 있도록 코딩을 해줘야 좋은 코드가 될 수 있다.

## while문

```jsx
while(조건) {

			실행할 코드
			
			증감

}
```

```jsx
let i = 0;

while(i<10) {

			console.log(i);
			
			i++;

}
```

### while문 무한루프

```jsx
while(true) {

			실행할 코드
			
			if(탈출할 조건){
			
						break;
			
			}

}
```

### 반복문을 사용할 때 break 와 continue를 잘 사용해주면 좋다.

## do-while문

```jsx
do {

			console(i);
			
			i++
			
}while (i< 11)
```

### do-while은 조건문을 확인하기 전에 무조건 한번은 실행된다.