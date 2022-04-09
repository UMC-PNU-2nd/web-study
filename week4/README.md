# 

# 04 DOM

HTML, XML 문서에 접근하기 위한 일종의 인터페이스

## Node

```jsx
const $body = document.getElementsByTagName('body');

const $contatiner = document.getElementsByClassName('container');

const $title = document.getElementById('title');

const $cityList = document.getElementById('cityList');

const $cities = $cityList.getElementsByTagName('li'); //cityList로 영역 제한하여 접근하는 것도 가능

console.log($body[0].innerText); //태그를 제외한 모든 text 를 나열

console.log($body[0].innerHTML); //모든 text(태그도 포함)를 나열
```

```jsx
const $cities = $cityList.querySelector('li'); //조건을 만족하는 가장 첫 번째 원소만 넣음
const $cities = $cityList.querySelectorAll('li'); //li 전체를 넣음
```

```jsx
//1. spread operator
const newCities = [...$cities]

//2. Array.from
const newCities = Array.from[$cities]
```

## DOM 조작

### CSS

```jsx
$body[0].style.backgroundColor = 'teal';

const $cityDiv = documnet.querySelector('.city');
$cityDiv.style.color = 'grey';

```

### HTML

```jsx
const worstCity = document.createElement('ul');
const worstCityArr = ['Cairo', 'London', 'Risbon', 'Sydney'];

worstCityArr.map(city => {
	const worstCityItem = document.createElement('li');
	worstCityItem.innerText = city;
	worstCity.appendChild(worstCityItem);
})
$cityDiv.appendChild(worstCity); //기존에 있던 박스에 추가
$container[0].appendChild(worstCity); //새로운 박스 추가

worstCityDiv.classList.add('city'); //같은 CSS 적용
worstCityDiv.classList.remove('city'); 
worstCity.setAttribute['name', 'worstCity'); //속성 추가
```