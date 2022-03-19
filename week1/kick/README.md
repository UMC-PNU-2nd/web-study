# 1주차 HTML

## HTML 이란?

<aside>
💡 **Hyper Text MarkUp Language**

</aside>

`Hyper Text` → 링크

`Markup` → 교정 부호, 의미 부여


[https://developer.mozilla.org/ko/](https://developer.mozilla.org/ko/) 에서 많은 정보를 얻을 수 있다.

MDN 은 공식 레퍼런스는 아니지만 공식처럼 사용되므로 잘 참고하도록 한다.

다 외울 필요가 없고 상황에 따라 필요한 태그를 검색하여 찾을 수 있으면 된다.

## Header 태그

```html
<!-- 헤더 태그 : h1, h2, ... h6 -->
<h1>헤더 태그 1</h1>
<h2>헤더 태그 2</h2>
<h3>헤더 태그 3</h3>
****<h4>헤더 태그 4</h4>
<h5>헤더 태그 5</h5>
<h6>헤더 태그 6</h6>
```


- `<h1>` 태그는 제목을 뜻하는 태그이므로 mdn에서 권장하는 대로 페이지에 한 번만 사용하도록 하자
- h1 다음은 h2.. h2 다음은 h3 와 같이 순서를 지켜 사용한다

## Divider 태그

```html
<div>안녕하세요</div>
```

- 주로 레이아웃을 나누기 위해 사용하는 태그
- 무지성으로 남발하게 되면  좋지 않은으로 Sementic 태그를 활용한다.

<aside>
💡 **Semantic 태그란?**

기존의 div 태그에 의미를 부여해준다. 각 영역별로 의미를 부여해준다. (기능은 동일)


페이지마다 필요한 레이아웃이 다르므로 적절히 활용하도록 한다.

</aside>

## List 태그

```html
<ul>
	<li>1번</li>
	<li>2번</li>
	<li>3번</li>
</ul>

<ol>
	<li>1번</li>
	<li>2번</li>
	<li>3번</li>
</ol>
```


- ul (unordered) 태그는 순서가 없는 리스트를 나타낸다.
- ol (ordered) 태그는 순서가 없는 리스트를 나타낸다.
- 리스트 안에 아이템들은 <li> 태그를 이용하여 표현한다.

## Video 태그

```html
<video controls width="250">
    <source src="/media/cc0-videos/flower.webm" type="video/webm">
    <source src="/media/cc0-videos/flower.mp4" type="video/mp4">
		Sorry, your browser doesn't support embedded videos.
</video>
```

**HTML `<video>` 요소** 는 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입한다. 

- 오디오 콘텐츠에도 사용할 수 있으나, `[<audio>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio)` 요소가 사용자 경험에 좀 더 적합하다.
- HTML 태그에서 여러가지 attribute를 사용할 수 있다.
- video 태그 안에는 브라우저가 지원하지 않을 때 표시된다.

<aside>
💡 **Self Closing Tag**
<img src=”~~” /> 와 같이 closing 태그가 없는 경우 self closing 태그이다.

</aside>

## Image 태그

```html
<img class="fit-picture"
     src="/media/cc0-images/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices">
```

**HTML `<img>` 요소**는 문서에 이미지를 넣는다.

- `src` 특성은 **필수**이며, 포함하고자 하는 이미지로의 경로를 지정한다.
- `alt` 특성은 이미지의 텍스트 설명이며 필수는 아니지만, 스크린 리더가 `alt`의 값을 읽어 사용자에게 이미지를 설명하므로, 접근성 차원에서 **매우 유용**하다. 또한 네트워크 오류, 콘텐츠 차단, 죽은 링크 등 이미지를 표시할 수 없는 경우에도 이 속성의 값을 대신 보여준다.

<aside>
💡 unsplash, pixabay

</aside>

## HTML 문서의 구조

html 문서를 올바르게 쓰기 위해서는 구조를 파악할 필요가 있다.

너무 당연한 내용...

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>new webpage</title>
	</head>
	<body>
		<h1>My new web page</h1>
		<h6>hello, world</h6>
	</body>
</html>
```

dom tree

vsc ! 누르면 템플릿