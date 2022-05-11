# DOM 구조

DOM

document = html 이라는 뜻

```jsx
const $body = document.getElementsByTagName(’body’);

console.log($body[0]);

console.log($body[0].innerText);
```

⇒ html body영역을 찍어줌 

innerText ⇒ 태그를 제외한 텍스트들을 나열해준다.

innerHtml ⇒ 태그도 같이 포함해서 나열해준다.

```jsx
const $container= document.getElementsByClassName('container');
```

class명으로 엘레멘트를 불러오게 됌

```jsx
const $title = document.getElementById(’title’);
```

ID 명으로 엘레멘트를 불러오게 됌

변수를 통해서 영역을 제한하고 document를 사용해도 무관함

```jsx
const $cityList = document.getElementById('cityList');

const $cities = $cityList.getElementsByTagName('li');
```

## querySelector / querySelectorAll

여러개의 엘레멘트를 가져올 때

querySelector 사용하면 맨앞 한개만 가져오고

querySelectorAll 를 사용하면 배열의 형태로 가져오게 된다.

```jsx
const $cityList = document.querySelector(’#cityList’);

const $cities = $cityList.querySelectorAll('li');
```

다른것들은 HTMLCollection으로 되지만

querySelector는 NodeList로 되서 forEach문을 사용할 수 있게 된다.

```jsx
$cities.forEach(city => console.log(city.innerText));
```

## spread operator / Array.from

### spread operator

```jsx
const newCities = [...$cities];
newCities.map(city => console.log(city.innerText));
```

⇒ $cities 라는 유사배열을 newCities 라는 배열에 담아줌

### Array.from

```jsx
const newCities = Array.from($cities);
newCities.map(city => console.log(city.innerText));
```

## CSS속성 변경

적용방법

```jsx
$body[0].style.backgroundColor = 'teal';

const citydiv = document.querySelector('.city');
citydiv.style.color = 'gray';
```

## element 추가

```jsx
const worstCity = document.createElement('ul');
const worstCirtArr = ['Caior', 'London', 'Risbon', "Sydney"];

worstCityArr.map(city => {
	const worstCityItem = document.createElement('li');
	worstCityItem.innerText = city;
//li들이 생성 되었고 
//ul에 넣어주기
	worstCity.appendChild(worstCityItem);
})
```

이렇게 하면 

```jsx
<ul>
        <li>Caior</li>
        <li>London</li>
        <li>Risbon</li>
        <li>Sydney</li>
</ul>
```

이렇게 생성이 되고  원하는 class에 넣어주면 된다.

```jsx
const worstCityList = `
<ul>
        <li>Caior</li>
        <li>London</li>
        <li>Risbon</li>
        <li>Sydney</li>
</ul>
`
cityDiv.insertAdjacentHTTML('beforeend', worstCityList);
```

## 속성 바꾸기 setAttribute

```jsx
worstCity.setAttribute('name', 'worstCity');
```

⇒