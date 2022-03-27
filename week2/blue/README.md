## 1. CSS 개념

---

HTML 파일(=뼈대)에 스타일(=살)을 입히는 것을 말한다.

❗**HTML과 CSS 연결하는 방법**

`<link rel = “stylesheet” href = “style.css”>`

- 절대 경로
- 상대 경로
    
    `./` 해당 파일과 같은 레벨에 있음
    
    `../`  해당 파일보다 상위 폴더에 있음
    

## 2. CSS 문법

---

- **태그 선택자**

```css
div {
	width : 100px;
	height : 100px;
	margin : 10px;
	font-size : 30px;
	background-color : pink;
}
```

- **클래스 선택자**

```html
<div class = "orange"> </div>

.orange {
	background-color : orange;
}
```

- **id 선택자**

```html
<div id = "yellow"> </div>

#yellow {
	background-color : yellow;
}
```

`**!important**` 어떤 상황에서든 important를 쓴 속성값이 무조건적으로 적용된다.

## 3. CSS 속성

---

**display 종류**

`block` 콘텐츠의 크기와 상관없이 한 줄을 모두 차지 ex) span, a, img, button

`inline` 자신의 콘텐츠 크기만큼만 차지 ex) p, div, ul, li, h1-h6

**display 속성**

`none`

`inline`

`block`

`inline-block` : inline + block

## 4. FLEXBOX

---

flex-container와 flex-item으로 이루어짐

### flex-container에 사용하는 속성

- **flex-direction**

`row` 가로

`row-reverse`

`column` 세로

`column-reverse`

- **justify-content :** main-axis를 정렬

`flex-start` (기본값)

`flex-end`

`center` 가운데 정렬

`space-between` flex-item 사이에 공백을 일정하게 분배

`space-around` 

`space-evenly`

- **align-items** : cross-axix를 정렬

`flex-start`

`flex-end`

`center`

`stretch` (기본값)

`baseline` 텍스트를 기준으로 정렬

- **flex-wrap**

### flex-item에 사용하는 속성

- **flex-grow**
- **flex-shrink**
- **flex-basis**

## 5. POSITION

---

**position**

`static`

`relative` static을 기준으로 위치를 설정 + top, bottom, left, right

❗z-index : 어느 flex-item이 위에 오게 할 지 설정

`absolute` 

`sticky` 스크롤을 해도 해당 flex-item이 상단에 위치 ➡️ 상단에 닿을 때부터 위치 고정

`fixed` 스크롤을 해도 해당 flex-item이 상단에 위치 ➡️ 같이 내려감