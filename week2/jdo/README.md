# 

# css

== 꾸며주는 것

link ==> html와 css를 연결 시켜줌

```html
<link rel="stylesheet" href="style.css">
```

- rel : 용도를 적어주는 곳 (설명)
- href : 주소를 의미한다.

절대경로 : 

- 어떠한 웹페이지나 파일이 가지고 있는 고유한 경로를 말한다.
- 예를들어 http://www.google.com, C:\users\document\untitled.jpg 등을 모두 절대 경로라고한다.

상대경로 :

- 상대경로를 풀어서 보면 '현재 위치한 곳을 기준'으로 해서 '그곳의 위치'이다.
- 다시한번 설명하자면 (Web이라고 기준하에) html 파일이 위치한 폴더를 기준으로 상대적인 경로라는 것.
- ./ : 현재파일의 위치와 같다.
- ../ : 한단계 상위폴더

### css 문법 : 선택자 { css 속성 : value; }

태그, 클래스, id

자신이 원하는 부분에 속성을 넣고 싶을 때

클래스 속성을 사용해주면 됌.

- 태그 선택자

```html
div {

		속성 1;

		속성 2;

}
```

- 클래스 선택자

```html
.클래스명 {

		속성1

		속성2

}
```

- id 선택자

```html
#id명 {
		
		속성1

		속성2

}
```

이렇게 주어야함

css는 순서가 매우 중요함.

클래스는 여러개의 엘레멘트에 줄 수 있지만

id는 하나밖에 안됌

- !important

를 사용하게 되면 무조건적으로 이 속성이 사용됌

단점은 다른 것들을 다 무시하게 된다.

- hover : 마우스를 올렸을 때 변화되는 css 속성

- active : 마우스로 누르고 있는 상태

- focus : 한번 클릭했을 때 적용되는 상태

태그 들 중 한줄 모두를 차지하는 엘레멘트를 블록 엘레멘트

자신이 차지하는 길이만큼만 차지하는 엘레멘트를 인라인 엘레멘트라고 한다.

### <!-- inline : span a img button -->

### <!-- block : p div ul li h1-h6 -->

### nth:child(n) -> n번째 엘레멘트의 속성을 설정할 수 있음

### border: 5px solid blue

테두리넓이, 실선, 파란색

### box-sizing

content-box

border-box

### 전체 속성을 컨트롤 할 수 있는 *

```html
* {

	속성 1;

	속성 2;

}
```

### 상대크기 조절

- em  : 부모요소
- rem  : root태그 html속성

부모와 자식관계

div span {

}

> 반응형 웹페이지를 만들기 위해선 px 보단 em 과 rem 을 사용하는것을 권장함
> 

- resetcss : 웬만한 태그들의 기본 속성들을 모두 초기화 시켜버린다.

## FLEXBOX

1. felx는 container와 item 들로 이루어 져있음.
2. felx는 다른 레이아웃과 다르게 부모속성에 디스플레이 속성을 추가해줌
3. p태그는 p태그에 display를 지정해줬지만
4. felx는 부모속성에 display를 지정해줌
- flex-direction : row(기본값) : 가로정렬 , colunm : 세로정렬
- row-reverse , colunm-reverse 반대로 정렬

### justify-content

- flex-start(기본값)
- flex-end
- center
- space-between
- space-evenly
- space-arount

### align-items  ( 높이값을 설정해줘야 적용됌 )

- flex-start
- baseline -> 텍스트를 기준으로 정렬
- flex-end
- center

### flex-grow: 늘어나는 비율을 설정

기존의 flex아이템들이 차지하는 비율을 설정됌

### flex-shrink : 줄어드는 비율으르 설정

```html
/* Keyword values */

flex: auto;

flex: initial;

flex: none;

/* One value, unitless number: flex-grow */

flex: 2;

/* One value, length or percentage: flex-basis */

flex: 10em;

flex: 30%;

/* Two values: flex-grow | flex-basis */

flex: 1 30px;

/* Two values: flex-grow | flex-shrink */

flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */

flex: 2 2 10%;

/* Global values */

flex: inherit;

flex: initial;

flex: unset;
```

### flex-wrap - 크기가 줄어들지 않고 다음 줄로 넘어가는 속성

- nowrap (기본값. 넘어가지않음)
- wrap
- wrap-reverse

-------------------------------------

## position

static ( 다른 엘리먼트에 지장을 주지않느다. 만약 부딛히면 덮어씀) --> 곂곂이 쌓는 느낌을 줄 수있음 z-index 잘 사용

- top
- bottom
- left
- right

### absolute ( 다른 포지션을 가진 부모속성을 기준으로 함

- 상위 태그에 static 이 없으면 body태그의 값을 이용함 )

### relative

### fixed

- 스크롤을 할때 nav바 처럼 고정되어있는 것들
- static이 없을 때 body태그를 기준으로 설정됌

position : fixed;

를 사용할 경우

left : 0;

top : 0;

을 같이 사용해준다.

### sticky

- 스크롤을 했을 때 사라짐 --> top bottom 등 하나이상을 설정 해주어야함
- fixex는 스크롤시 같이 움직이는데
- sticky는 상단에 닿을 때 그때부터 고정됌

------------------------------

## roboto

다양한 폰트를 link나 import 혹은 다운을 받아서 사용할 수 있는 사이트