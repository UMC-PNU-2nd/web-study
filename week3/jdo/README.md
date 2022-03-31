변수 선언하는법

const   변하지않는 데이터 값
let     변하는 데이터 값

변수에 데이터를 넣는 행동 --> 할당

const 변수1 = '코딩';
변수1 : 변수명
= '코딩' : 할당

const에 데이터값을 재할당할 수 없음 ==> 고정된 값을 넣을 때만 사용

데이터 타입, 자료형 :
1. string : 문자열
const str = "안녕";
const str1 = "hi";

2. number : 숫자
const number = 2;

3. bigInt : 값이 큰 숫자

4. boolean : true, false
const bool = true;
const bool1 = false;

5. symbol : 중복되지 않는 고유값

6-7. null / undefined
const a = undefined
const b = null


undefined : 변수가 선언되었는데 값이 없다고 자동적으로 입력되는 값
null 개발자가 일부러 값이 비어있다고 넣어주는 값

8. object : 객체 - 함수, 배열, 객체

===========================================

1. 산술연산자 : +, -, *, /, %, **
    축약형 a = a + 10;
        => a += 10;


2. 증감연산자 : ++ --

3. 할당연산자 : =

4. 문자열 연산자 : +, +=
let data = 'happy' + '2022';
console.log(data); ==>  happy2022

data += '!!';
console.log(data); ==>  happy2022!!

5. 비교연산자 : ==, ===, !=, !== boolean 값을 반환
== 대충비교 (1, true 와 같다고 봄, null과 undefined를 같다고 봄)
=== 엄격비교 (무조건 같아야 true 반환)

6. 비교연산자 : <, >, <=, >=

7. 논리연산자 : &&(AND), ||(or), !(부정)
&& : 조건중 하나라도 false 면 false
|| : 조건중 하나라도 true 면 true
! : 반대

===========================
배열 

1. 배열 선언 방법
const travel_spot = ['방콕', '뉴욕', '파리'];

const travel_spot1 = new Array['방콕', '뉴욕', '파리'];

const travel_spot2 = new Array();
travel_spot2[0] = '방콕';
travel_spot2[1] = '뉴욕';
travel_spot2[2] = '파리';

2. 접근 : index
const paris = travel_spot[2];
처음부터 0..1..2 

3. 추가 및 삭제 ==> const 변수면 새로운 배열로 바꾸는건 안되지만 기존것을 바꾸는건 가능함.

    추가하는 방법

    push : 뒤에 원소추가
    travel_spot.push('토론토','퀘벡');

    unshift : 앞에 원소추가

    splice : 원하는 지점에 추가 및 삭제 
    -> splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들);
    travel_spot.splice(4, 0, '멜버른', '아테네');

    삭제하는 방법
    
    pop : 맨뒤의 원소 삭제 (하나만)

    shift : 맨앞의 원소를 삭제

    splice : 원하는 지점에 추가 및 삭제
    travel_spot.splice(3, 3);

    splice 삭제와 추가 동시에도 가능

    ===================================

객체 
==> 배열의 한계를 극복하기 위함임

함수도 저장가능

const pooh {
    name : 'pooh',
    specied : 'bear',
    job : 'disney charactor',
    gender : 'boy',
    sayHi : function(){
        console.log("hi");
    }
}

2. 객체 접근 : ., []
console.log(pooh['species']);
console.log(pooh.sayHi());

3. 객체에 추가 및 삭제

추가
pooh['say-bye'] = function() {
    console.log("bye");
}

pooh.favories = ['honey', 'friends'];

삭제
delete pooh.favorites

4. 객체 생성자 함수 

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
${this.name} : 변수를 사용하는 방법

객체 생성

푸
const pooh = new Charactor('pooh', 'bear', 'disney charactor', 'boy');

피카츄
const pooh = new Charactor('피카츄', '쥐', '포켓몬 캐릭터', 'boy');

const obj = new Object();
obj.name = 'dwell';
obj.greeting = 'hi'
이렇게 생성 및 선언을 해도되지만 위에 한것처럼 한꺼번에 해도됌




