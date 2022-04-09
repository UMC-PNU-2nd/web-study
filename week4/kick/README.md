# Javascript DOM

## Node 선택

---

```jsx
const $body = document.getElementsByTagName('body');
const $container = document.getElementsByClassName('container');
const $container = document.getElementById('title');
const $container = document.getElementById('title');
const $citie = document.querySelector('li')
const $cities1 = document.querySelectorALL('li')
const $cities2 = document.getElementsByTagName('li')
```

- html 요소를 선택한 변수는 `$` 를 붙여주면 좋음
- html collection → getElementsby~
- node list → querySelectorAll~
    - html collection 과 다르게 `foreach` 문 지원

```jsx
$cities1.forEach(city => console.log(city.innerText));

const newCities = [...cities2]; // 배열로 변환
const newCities = Array.from($cities2);

newCities.map(city => console.log(city.innerText));
```

## CSS 조작

---

```jsx
$body[0].style.backgroundColor = 'teal'
```

## Node 생성

---

```jsx
const worstCity = document.creatElement('ul');
worstCity.innerText = "London"

const worstCityList = 
`
<ul>
	<li>Cairo</li>
	<li>Risbon</li>
	<li>Sydney</li>
	<li>Newyork</li>
</ul>
`

$cityDiv.innerAdjacent('beforeend', worstCityList);
```

## Class 조작
```jsx
worstCityDiv.classList.add('city')

worstCityDiv.classList.remove('city');

worstCityDiv.setAttribute('name', 'worstCity');
```