# 2주차 내용 정리

## 1. CSS
HTML이 뼈대라면, CSS는 그 위의 살로, HTML을 꾸미는 역할.   
JavaScript는 사람의 뇌. 정적인 것을 동적으로 기능하게 함.

`<link>`: HTML과 CSS를 연결하는 태그. `rel` , `href` 속성을 작성.

`rel`: 현재 작성 중인 HTML 파일과 연결하고자 하는 파일의 관계를 작성. CSS는 HTML을 꾸미는 용도, "stylesheet" 키워드 작성.   
`href`: 파일의 위치를 상대 경로 혹은 절대 경로로 작성.

브라우저마다 태그의 기본 스타일이 존재함.   
동일한 웹페이지를 여러 브라우저에서 보여주고 싶을 때는 브라우저의 기본 스타일링을 초기화하는 작업(주로 margin과 padding 값을 없애주는 작업) 필요.

## 2. 선택자
CSS 문법: `선택자 { css 속성 : value; }`   
선택자: 스타일을 적용할 HTML 요소를 선택하는 역할.

선택자 사이의 공백은 부모와 자식 관계를 나타냄.

우선순위는 태그 선택자 < 클래스 선택자 < 아이디 선택자

### 태그 선택자
태그를 이용해 HTML 요소를 선택.   
`<div>`를 선택하려면, `div`라고만 쓰면 됨.

### 클래스 선택자
태그가 같은 여러 요소들 중 특정 요소들만 선택하기 위해 클래스를 이용.

HTML에는 `<div class="lightblue">`와 같이 써주고,   
CSS에는 `.lightblue`처럼 클래스 이름 앞에 `.`을 붙여서 선택.

### 아이디 선택자
고유한 아이디를 부여하고, 그것을 이용해 요소를 선택.

HTML에 `<div id="yellow">`와 같이 써주고,   
CSS에서 `#yellow`처럼 아이디 이름 앞에 `#`을 붙여서 선택.

하나의 요소는 하나의 아이디만 갖고, 전체 문서에 동일한 아이디를 공유하는 요소는 없어야 함.

### `!important`
어떤 상황에서든 이 키워드가 쓰인 스타일이 가장 우선적으로 적용됨.   
전체 맥락 완전 무시하는 코드이므로 특별한 이유가 없다면 사용 권하지 않음.

### 가상 선택자
💡 검색해보니, 선택자에 추가하는 키워드로 '가상 클래스'와 '가상 요소'가 있음.   
'가상 클래스'는 아래에서 다루는 `:hover`, `:active`와 같은 형태로 선택자 바로 뒤에 써주는 것이고,   
'가상 요소'는 `::before`, `::after`, `::placeholder`와 같은 형태로 선택자 바로 뒤에 써주는 것.


일반 선택자로 선택할 수 없는 것들을 선택할 때 사용.

`:hover`: 요소 위에 마우스를 올렸을 때의 상태를 선택할 때.   
`:active`: 클릭을 하고 있는 상태, 마우스로 요소를 계속 누르고 있는 상태를 선택할 때.   
`:focus`: 클릭을 한 번 해서 계속 포커싱되어 있는 상태를 선택할 때.

💡 `active`는 누르고 있는 상태를 유지하는 동안만 효력이 유지되고, `focus`는 한 번 눌렀다가 떼어도 계속 효력이 유지됨. 해당 요소 이외의 다른 곳을 클릭하면 `focus` 효력이 해제되어 원래 상태로 돌아감.

`:nth-child()`: 해당 태그를 가진 n번째 요소를 선택할 때.

`<p>` 중 세 번째 요소를 선택하려면,

```
p:nth-child(3) {
	display: none;
}
```

우선순위는 태그 선택자 < 클래스 선택자 = 가상 선택자 < 아이디 선택자

### 전체 선택자
`*`

모든 태그를 선택할 때 사용.


## 3. `display` 속성
HTML 태그들은 각각 고유한 `display` 값을 가지고 있음.   
그 값을 변경할 때 사용하는 속성.

태그들의 `display` 종류
- `block`: 부모 요소의 전체 공간을 차지하여 ‘블록’을 만듦. 언제나 새로운 줄에서 시작(줄 바꿈 유발)하고, 좌우 양쪽으로 최대한 늘어나 가능한 모든 너비를 차지함. `width`와 `height`를 지정할 수 있음.   
`<p>`, `<div>`, `<ul>`, `<li>`, `<h1>-<h6>` 등
- `inline`: 콘텐츠의 흐름을 끊지 않고, 요소를 구성하는 태그에 할당된 공간만 차지함. 문서 흐름에서 줄바꿈을 강제하지 않음. `width`와 `height`를 지정할 수 없음.   
`<span>`, `<a>`, `<img />`, `<button>` 등

`display` 속성에 쓸 수 있는 값
- `none`: 아예 요소를 사라지게 함.
- `block`
- `inline`
- `inline-block`: `inline`과 `block`이 합쳐진 것. `inline`처럼 한 줄에 여러 요소가 올 수 있고, `block`처럼 `width`와 `height`를 지정할 수 있음.


## 4. `box-sizing` 속성
Box model
- `content`
- `padding`: `content`와 `border` 사이의 간격(여백).
- `border`: 테두리. 굵기, 종류, 색상 지정 가능.
- `margin`: 다른 박스들과의 간격.

`box-sizing` 속성 이용해 `width`, `height`가 기본적으로 `content`에 적용되게 할지, `border`까지를 기준으로 적용되게 할지를 선택 가능.

`box-sizing: content-box`시, padding 과 border 를 설정할 때마다 사이즈가 커져 불편할 때가 많음.   
전체 선택자를 이용해 `box-sizing: border-box`를 선언해주는 것이 좋음.


## 5. 단위
- `px`: 절대단위(항상 동일한 크기).
- `em`: 상대단위(기준에 따라 크기가 유동적으로 바뀜). 부모 요소가 기준. `font-size`, `margin`, `padding` 지정시 자주 사용. 반응형 웹 페이지 만들 때 유용.
- `rem`: 상대단위. “**r**oute **em**”. 최상위 태그(=`<html>`)가 기준. `font-size`, `margin`, `padding` 지정시 자주 사용. 반응형 웹 페이지 만들 때 유용.
- `%`: 상대단위. 부모 요소가 기준. `width` , `height` 지정시 자주 사용.
- `vh`: 'viewport height'의 약자. 사용자가 보는 화면 영역(=viewport)의 높이. `100vh`는 viewport 전체의 높이.
- `vw`: 'viewport width'. viewport의 가로 너비. `100vw`는 viewport 전체의 가로 너비.


## 6. Flexbox
CSS의 역할: 요소 스타일링, 레이아웃(전체적인 요소들의 배치) 짜기.

반응형 웹 페이지: 디바이스별 화면 크기에 맞게 페이지의 크기, 레이아웃이 변경되는 웹페이지.   
디바이스 크기 다양화 → 하나의 웹페이지가 화면의 크기에 반응하여 저절로 콘텐츠 크기가 커졌다 작아지거나, 레이아웃이 변경되는 것 중요해짐.
**flexbox**는 반응형 웹페이지 만들기에 최적화된 박스.

**flexbox**는 **flex-container**, **flex-item**으로 구성.

**main axis**와 **cross axis**가 존재함.

**main axis**: 메인 축. `flex-direction` 속성의 값에 따라 방향 정해짐.   
**cross axis**: **main axis**와 수직으로 만나는 축.

`display` 속성의 값을 `flex`로 줌으로써 **flexbox** 사용 가능.   
**block**이나 **inline** 등과 달리, `display` 값을 바꾸고 싶은 요소 자체가 아니라, 그 부모 요소에게 `display: flex`를 선언.


### 부모 요소(**flex-container**)에 작성하는 속성들
1. `flex-direction`
정렬 방향 선언할 때 사용. 4개의 값 존재.

- `row`: 기본값. 가로 방향(왼 → 오).
- `row-reverse`: 가로 방향으로 정렬하되, 아이템 순서를 거꾸로. (오 → 왼).
- `column`: 세로 방향(위 → 아래).
- `column-reverse`: 세로 방향으로 정렬하되, 아이템 순서를 거꾸로. (아래 → 위).


2. `justify-content`
**main axis**를 기준으로 해서 정렬하는 속성.
- `flex-start`: 기본값. **main axis**의 시작점에 붙어서 정렬.
- `flex-end`: **main axis**의 끝점에 붙어서 정렬.
- `center`: **main axis**의 중앙에 정렬.
- `space-between`: 시작과 끝 요소 고정, 그 사이에 일정한 공백을 주는 정렬 방식. **main axis** 방향의 여유 공간을 **flex-item**들 사이에 균등 배분.
- `space-evenly`: `space-between` 상태에서 시작과 끝 요소의 바깥에도 같은 크기의 공백을 주는 정렬 방식.
- `space-around`: `space-between` 상태에서 시작과 끝 요소의 바깥에는 **flex-item**들 사이 공백 크기의 1/2만큼 공백을 주는 정렬 방식.


3. `align-items`
**cross axis**를 기준으로 해서 정렬하는 속성.
- `flex-start`: **cross axis** 의 시작점에 붙어서 정렬.
- `flex-end`: **cross axis**의 끝점에 붙어서 정렬.
- `center`: **cross axis**의 중앙에 정렬.
- `stretch`: **기본값**. 부모의 높이 전체를 차지하는 정렬 방식. (다만, `align-items`값이 `stretch`여도 **flex-item**에 `height`가 정해져 있다면 부모(**flex-container**)의 높이만큼 차지하지 않음.)
- `baseline`: 텍스트 아래에 밑줄이 있다고 생각하고 그 밑줄을 기준으로 정렬됨.


4. `flex-warp`
- `no-wrap`: 기본값. **flex-container**의 `width`가 줄어들어도 줄 바꿈을 하지 않고, 줄어든 **flex-container**의 `width`에 맞게 **flex-item**의 `width`를 줄임.
- `wrap`: **flex-container**의 `width`가 줄어들어도 **flex-item**의 `width`는 줄어들지 않고 그 크기를 유지한 채 다음 줄로 내려가도록 함.
- `wrap-reverse`: `wrap`과 동일하나, **flex-item**이 **flex-container**의 끝점에서 시작함.


5. `align-content`

`flex-wrap` 값이 `wrap`이어서 **cross axis** 방향으로 여러 줄이 생겼을 때 그 여러 줄의 요소들을 정렬하는 속성.
- `flex-start`: **cross axis** 의 시작점에 붙어서 정렬.
- `flex-end`: **cross axis**의 끝점에 붙어서 정렬.
- `center`: **cross axis**의 중앙에 정렬.
- `stretch`: **기본값**. **flex-item**들이 **flex-container**의 공간을 **cross axis** 방향으로 동등하게 나눠가지며 가득 채움.
- `space-between`: **flex-item**들이 **cross axis**의 시작과 끝점에 붙고, 그 사이엔 동일한 크기의 공백이 생김.
- `space-between`: `space-between`과 같이 **flex-item**들 사이에 동일한 크기의 공백이 생기는데, 첫 요소와 마지막 요소는 그 공백 크기의 1/2만큼씩 **cross axis**의 시작과 끝점에서 떨어져 있음.
- 더 다양한 값은 mdn에서 확인: https://developer.mozilla.org/ko/docs/Web/CSS/align-content


### **flex-item** 에 작성하는 속성들
1. `flex-grow`

**flex-container**의 여백을 **flex-item**이 나눠가지는 방식을 정의함.   
기본값은 `0`.

```
<div class="flex-container">
	<div class="flex-item">1</div>
	<div class="flex-item">2</div>
	<div class="flex-item">3</div>
	<div class="flex-item">4</div>
	<div class="flex-item">5</div>
	<div class="flex-item">6</div>
	<div class="flex-item">7</div>
	<div class="flex-item">8</div>
	<div class="flex-item">9</div>
	<div class="flex-item">10</div>
</div>
```

```
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.flex-container {
  background-color: teal;
  display: flex;
  height: 100vh;
}

.flex-item {
  background-color: tomato;
  width: 100px;
  height: 100px;
  font-size: 30px;
  font-weight: bold;
  border: 2px solid black;
}

.flex-item:nth-child(3) {
  flex-grow: 2;
}

.flex-item:nth-child(4) {
  flex-grow: 3;
}
```

- `width`가 `100px`인 **flex-item** 10개는 `1000px`만큼의 `width`를 차지함.
- 이때 **flex-container**의 `width`가 `1200px`로 늘어난다면, `200px`의 여백 발생.
- `flex-grow` 속성을 사용했기에 `200px`의 여백을 `<div class="flex-item">3</div>`와 `<div class="flex-item">4</div>`가 2:3의 비율로 나눠가짐.

- `<div class="flex-item">3</div>`의 `width` = `100px`(원래 지정된 값) + `(200 * 2/5)px` = `180px`
- `<div class="flex-item">4</div>`의 `width` = `100px`(원래 지정된 값) + `(200 * 3/5)px` = `220px`


2. `flex-shrink`

화면의 `width`가 좁아졌을 때 콘텐츠 크기를 얼마나 줄일 것인지를 결정하는 속성.

`flex-shrink`의 기본값은 `1`.   
그래서 `flex` 를 선언하고 따로 `flex-shrink` 값을 지정해주지 않아도 화면의 `width`가 줄어들면 **flex-item**들의 `width` 가 그 줄어든 크기에 맞게 서로 같은 비율로 줄어듦.

```
<div class="flex-container">
	<div class="flex-item">1</div>
	<div class="flex-item">2</div>
	<div class="flex-item">3</div>
	<div class="flex-item">4</div>
	<div class="flex-item">5</div>
	<div class="flex-item">6</div>
	<div class="flex-item">7</div>
	<div class="flex-item">8</div>
	<div class="flex-item">9</div>
	<div class="flex-item">10</div>
</div>
```

```
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.flex-container {
  background-color: teal;
  display: flex;
  height: 100vh;
}

.flex-item {
  background-color: tomato;
  width: 100px;
  height: 100px;
  font-size: 30px;
  font-weight: bold;
  border: 2px solid black;
}

.flex-item:nth-child(3) {
  flex-shrink: 2;
}

.flex-item:nth-child(4) {
  flex-shrink: 3;
}
```

- **flex-container**의 `width`가 **flex-item**들의 `width` 총합인 `1000px`보다 작아졌을 때, 그 줄어든 크기만큼 **flex-item**들의 크기를 줄임.

- **flex-container**의 `width` 가 `870px`로 줄어들면, **flex-item**들은 원래의 `width`(각각 `100px`)를 유지할 수 없음.
- **flex-item**들의 `width` 총합이 `870px`이 되도록 각각의 **flex-item**들은 자신의 `width` 크기를 줄임.
- 현재 `<div class="flex-item">3</div>`의 `flex-shrink` 값은 2, `<div class="flex-item">4</div>`의 `flex-shrink` 값은 3, 나머지 `<div>`들의 `flex-shrink` 값은 1임.
- 2 + 3 + 1*8 = 13
- 따라서 없애야 하는 `130px`을 각각 2/13, 3/13, 1/13씩 분담.
- `flex-shrink` 값이 2인 `<div class="flex-item">3</div>`는 `130px` 의 2/13인 `20px`만큼 자신의 `width`를 줄여, `80px`을 차지.
- `flex-shrink` 값이 3인 `<div class="flex-item">4</div>`는 `130px` 의 3/13인 `30px`만큼 자신의 `width`를 줄여, `70px`을 차지.
- `flex-shrink` 값이 1인 나머지 `<div>`들은 `130px`의 1/13인 `10px`만큼 자신의 `width`를 줄여, `90px`씩 차지.


3. `flex-basis`
- **flex-item**에 특정한 `width` 값을 선언해주지 않았을 때, `flex-grow`와 `flex-shrink` 계산의 시작점(기준점)이 되어주는 값.
- 기본값은 `auto`.
- **flex-item**에 `width` 값이 선언되어 있지 않고, `flex-basis` 값이 `auto`일 경우, **flex-item**의 내용물 크기만큼 `width`를 차지.


4. 축약형 속성 `flex`

`flex-grow`, `flex-shrink`, `flex-basis`를 한 번에 지정할 때 사용.

- 값이 1개이고 단위가 없는 숫자로만 적혀있다면, `flex-grow` 또는 `flex-shrink`를 의미함.
- 값이 1개이고 단위가 있다면, `flex-basis`를 의미함.
- 값이 2개일 경우, 첫 번째 값은 `flex-grow`. 두 번째 값으로 `flex-shrink`나 `flex-basis`를 쓸 수 있음.
- 세 가지 속성을 모두 쓰려면, `flex-grow`, `flex-shrink`, `flex-basis` 순.

```
flex: 2;

flex: 10em;

flex: 2 2;
flex: 1 30px;

flex: 2 2 10%;
```



## 7. Position
요소를 배치하는 방법을 지정하는 속성.

`position` 속성의 값들
- `static`: 기본값. 현재 HTML 문맥 상 있어야 할 위치에 배치됨.
- `relative`: `static`을 기준으로 위치를 잡음. `top`, `bottom`, `left`, `right`를 이용해 현재 위치에서 움직임. 위치가 겹칠 경우, 다른 **item**에게 영향 끼치지 않고 덮어 써버림.
- `absolute`: `static`이 아닌 다른 `position` 값을 갖고 있는 부모를 기준으로 함. `top`, `bottom`, `left`, `right`를 이용해 위치 조정. 상위 태그들 중 `position` 값이 `static`이 아닌 것이 없을 시, **route element**인 `body`를 기준으로 함.   
원래 있던 HTML 문맥에서 빠져나와 다른 레이어에 들어감.   
부모 태그에 `relative`를, 자식 태그에 `absolute`를 주어 자식 태그의 위치를 조정하는 경우가 많음.
- `fixed`: 스크롤 기능과 관련. 사용자가 스크롤을 해도 계속 그 자리에 고정. `absolute`처럼 원래 문맥에서 나와서 다른 태그들보다 위에 위치함. 기준은 viewport.
- `sticky`: 스크롤 기능과 관련. `top`, `bottom`, `left`, `right` 이용해 원하는 위치를 지정. 사용자가 스크롤을 해서 요소가 지정된 위치에 달라붙고 나면, 아래로 스크롤 해도 요소가 그 위치에 고정됨. `relative`와 `fixed`가 합쳐진 느낌.

💡 `z-index`: 요소가 다른 요소를 덮어 쓰는 것이 싫을 때 사용.
- 모든 요소의 `z-index` 기본값은 `0`.
- `z-index` 값에 음수를 주면 모든 요소의 뒤에 위치하게 되고, 양수 값을 주면 다른 `z-index`를 고려해서 레이어가 바뀜. 값이 클수록 위에 위치함.
