# 1주차 내용 정리

## 1. HTML

* HTML=Hyper Text Markup Language  
* Hyper Text=링크. 그림 등의 멀티미디어 정보나 다른 문서로 이 링크를 통해 이동.  
* Markup Language=mark로 둘러싸인 언어. mark=tag. 태그는 원고의 교정 부호처럼 자신이 감싼 부분이 어떤 역할을 하는지(제목, 문단 등), 그 의미를 부여하기 위해 사용.

```html
<p>My cat is very grumpy</p>
```

위와 같은 예시에서,  
* `<p>`는 여는 태그, `</p>`는 닫는 태그.  
* 태그로 감싼, 태그 사이에 있는 부분은 content.  
* 여는 태그와 닫는 태그, 콘텐츠까지 합친 부분은 element.

원하는 태그를 검색할 때는 ‘html 제목 태그 mdn’과 같이 검색할 것을 추천. (mdn은 mozilla, 공식문서는 아니지만 공식문서처럼 사용되는 사이트.)


## 2. Heading Tag

* 제목, 부제목을 나타낼 때 사용하는 태그.

```html
<h1>콘텐츠</h1>
<h2>콘텐츠</h2>
<h3>콘텐츠</h3>
<h4>콘텐츠</h4>
<h5>콘텐츠</h5>
<h6>콘텐츠</h6>
```

* h1에서 h6로 갈수록 폰트의 크기, 굵기가 작아짐.
* h1은 주로 전체 html 파일에서의 제목을 나타낼 때 사용, 따라서 페이지 당 한 번만 사용할 것을 권장. 나머지는 부제, 가제 등을 표현할 때 사용함.
* h1부터 차례대로 사용할 것을 권장.
* 글씨 크기를 위해서 헤딩 태그를 쓰는 것이 아님! 그런 크기 스타일링은 CSS로. HTML에서는 태그의 의미를 고려해 적절히 사용해야 함.


## 3. Division Tag, Semantic Tag

### `<div>`
* div=division. 주로 레이아웃을 구성할 때 사용하는 태그.
* 남용되지 않도록 주의. 아무 의미 없이 막 쓴 걸로 보일 수 있음.

### `<div>`의 남발을 막고자 등장한 Semantic tag
* 영역별 역할에 맞게 콘텐츠를 감싸주는 `<div>`라고 생각하면 됨. (사이트의 헤더 부분을 `<div>`로 감싸는 대신, 그 의미를 고려해 `<header>`로 감싸는 식.)
* 페이지를 만들 때 아래의 시멘틱 태그들을 다 써야 하는 것은 아님. 필요한 것만 쓰면 됨.

```html
<header>헤더</header>
<footer>푸터</footer>
<nav>네비게이션</nav>
<aside>어사이드</aside>
<section>섹션</section>
```


## 4. List Tag, Image Tag, Video Tag

### `<ul>`, `<ol>`
* 리스트를 만들 때 사용하는 태그
* ul=unordered list. 순서가 없는 리스트를 만들 때. 불렛으로 표현됨.
* ol=ordered list. 순서가 있는 리스트를 만들 때. 숫자(1, 2, 3, ...)로 표시됨.
* 리스트 안에는 반드시 내용, list item이 있어야 함. `<li>` 태그로 표현.

```html
<ul>
  <li>영국</li>
  <li>미국</li>
  <li>프랑스</li>
</ul>
```

### `<video>`  
* 위와 같이 콘텐츠가 텍스트 형태인 경우, 그냥 태그 사이에 콘텐츠를 작성해주면 됨.  
* 이와 달리 비디오를 삽입하기 위한 `<video>`에는 비디오의 주소/소스, 비디오의 형식 등의 추가 정보를 알려줘야 함.  
* 이처럼 태그로 모든 정보를 전달하기 어려울 경우 사용하는 것이 ‘속성’. 속성은 여는 태그 뒤에 써줌.

```html
<video controls width="250">
    <source src="/media/cc0-videos/flower.webm"
            type="video/webm" />
    <source src="/media/cc0-videos/flower.mp4"
            type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
</video>
```

* src 속성: 비디오의 주소를 넣어줄 때 사용.
* type 속성: 비디오의 타입을 지정해줄 때 사용.
* width, height 속성: 비디오의 가로, 세로 길이를 지정해줄 때 사용.
* controls 속성: value 값 없이 ‘controls’라고만 써주면 됨. 재생, 정지, 음량 조절 등의 버튼을 사용자가 사용할 수 있게 해줄 때 사용.
* autoplay 속성: 얘도 값 없이 ‘autoplay’라고만 써주면 됨. 비디오가 로드되자마자 자동으로 재생되게 할 때 사용.
* video 태그 안에 텍스트를 넣으면, 비디오가 로딩될 수 없는 환경일 때 사용자들에게 그 텍스트를 보여줌. (대체 텍스트) 텍스트 리더를 사용하는 경우, 텍스트 리더가 여기에 적힌 텍스트를 사용자에게 읽어줄 수 있기 때문에, 대체 텍스트를 적어주는 것이 좋음.

* src와 type은 `<video>` 안에 바로 써도 되지만, 따로 `<source />` 태그를 써서 두 속성을 적을 수도 있음.
* `<source />`는 여는 태그만 있고 닫는 태그는 없는 셀프클로징 태그.

### `<img />`
* 이미지를 삽입하기 위한 셀프클로징 태그.

```html
<img src="/media/cc0-images/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices" />
```

* src 속성: 이미지의 소스를 담음.
* alt 속성: 비디오의 대체 텍스트와 유사. 이미지가 로드되지 않거나 사용자가 이미지를 볼 수 없는 상황일 때 그 이미지를 설명할 텍스트를 쓰기 위한 속성.
* width, height 속성: 이미지의 가로·세로 크기를 지정하는 속성.

* 무료 이미지, 동영상 사이트 추천: unsplash, pixabay.


## 5. html 문서의 구조

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

html 문서는 위와 같은 구조로 구성됨.
* `<!DOCTYPE html>`: 이 문서가 html 5 버전을 사용하고 있음을 알려줌. 버전 명시 역할.
* `<html>`: 이 문서가 html임을 나타내주는 태그. lang 속성을 여기 안에 써줌.
* `<head>`: 우리가 확인하지 못하는 정보들을 담고 있는 태그. 홈페이지에 대한 설명, 검색 결과에 노출될 키워드 등이 들어감.
* `<title>`: 해당 웹 페이지의 제목을 씀. `<head>` 안에는 사용자 눈에 보이지 않는 정보들이 들어가지만, `<title>` 속 콘텐츠는 사용자도 볼 수 있음. url 바에 표시됨.
* `<meta>`: 타이틀 이외에 헤드에 필요한 모든 정보를 담을 때 사용하는 태그.
  * charset 반드시 사용. charset=character set. html 문서의 문자 인코딩을 설정하는 방식.
  * UTF-8은 페이지에 사용하는 이모티콘과 거의 모든 나라의 언어를 지원해 많이 사용하는 인코딩 형식.
* `<body>`: 눈에 보이는 모든 정보를 담고 있는 태그. `<h1>`, `<p>` 등은 모두 여기에 들어감.


## 6. 유튜브 헤더 작성해보기 실습

* `<a>` 태그 안에 넣는 href 속성에는 콘텐츠를 누르면 이동할 최종 목적지의 주소(링크)를 넣어주면 됨.
* `<svg>` 태그: `<img />`와 비슷한 태그. `<img />`는 확대하면 픽셀 때문에 깨지기도 하는데, svg는 아무리 확대해도 깨지지 않는 파일 형식.
  * 클론 코딩 시, 개발자 도구 이용해서 사용된 이미지 링크 복사해와서 사용하기.
* `<form>` 태그로 감싸주면, 사용자가 무언가를 입력하고 엔터를 누르거나 제출 버튼을 눌렀을 때 입력한 내용이 제출되는 기능을 부여할 수 있음. 제출하고 싶은 영역을 `<form>` 태그로 감싸주면 됨.
