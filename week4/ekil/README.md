# 4주차

## DOM 조작하기

### DOM: Document Object Model

JavaScript가 HTML 문서에 접근할 수 있게 도움.

HTML 문서를 node와 object로 구성된 트리로 전달해, JS가 문서 구조, 스타일, 내용 등을 변경할 수 있게 함.

즉, DOM은 HTML 문서와 JavaScript를 연결해주는 역할.

이름에서도 추측 가능
- document=문서=HTML 문서
- object=객체

### HTML 문서의 요소에 접근하는 방법

1. `getElementsByTagName()` 메소드: 태그 이름으로 요소를 찾아 접근
    
    엘리먼트의 `HTMLCollection`과 주어진 태그명을 반환
    
    ```jsx
    document.getElementsByTagName('body');
    
    // 접근하고자 하는 태그 이름을 () 안에 문자열 형태로 넣어주면 됨.
    
    // document 즉 문서 전체에서 <body> 태그를 가진 엘리먼트를 찾음.
    // 탐색할 범위를 document 말고 다른 객체로 쓰는 것도 가능함.
    ```
    
    ```jsx
    const $body = document.getElementsByTagName('body');
    console.log($body);
    
    /* HTMLCollection(1)
         0: body
         length: 1
       ...
    */
    
    // HTMLCollection 형태로, 요소의 인덱스(0)와 태그명(body)이 반환됨.
    // length는 반환된 HTMLCollection의 길이를 알려줌.
    
    // HTMLCollection은 유사 배열로, 배열은 아니나 배열과 유사한 형태를 띰.
    // 0: body는 키는 0, 값은 body인 걸로 볼 수 있음.
    // 인덱스를 가져 인덱스로 접근할 수 있음.
    
    // 같은 이름의 태그로 감싸진 요소들이 HTMLCollection이란 유사 배열의 요소들로 담김.
    
    // DOM을 조작하는 변수는, 다른 일반적인 변수와 구별되도록 $를 붙여주면 좋음.
    ```
    
    ```jsx
    const $body = document.getElementsByTagName('body');
    console.log($body[0]);
    
    // HTML 문서에서 <body> 태그로 감싼 모든 부분(태그 포함)이 콘솔에 찍힘.
    ```
    
    ```jsx
    const $body = document.getElementsByTagName('body');
    console.log($body[0].innerHTML);
    
    // HTML 문서에서 <body> 태그로 감싼 모든 부분(태그 포함)이 문자열 형태로 콘솔에 찍힘.
    
    // $body[0]일 땐 문서 그 자체의 형태였다면,
    // $body[0].innerHTML일 땐 ""로 감싸진 형태임.
    ```
    
    ```jsx
    const $body = document.getElementsByTagName('body');
    console.log($body[0].innerText);
    
    // HTML 문서에서 <body> 태그로 감싼 모든 부분을, 태그 부분(<p></p> 등)만 제외하고, 콘솔에 찍어줌.
    // 태그를 제외한 텍스트만을.
    // 문자열 형태로 찍어줌. (" "로 감싸진 형태)
    ```
    
2. `getElementsByClassName()` 메소드: 클래스 이름으로 요소를 찾아 접근
    
    해당 클래스를 가진 모든 자식 엘리먼트의 `HTMLCollection` 반환
    
    ```jsx
    document.getElementsByClassName('container');
    
    // getElementsByTagName과 사용법은 같음.
    ```
    
3. `getElementById()` 메소드: 아이디로 요소를 찾아 접근
    
    ```jsx
    document.getElementById('title');
    
    /* 한 문서에서 하나의 아이디는 하나의 요소에만 부여될 수 있으므로,
    태그명, 클래스명으로 찾을 때와 달리 정확히 그 요소 하나에 접근 가능 */
    
    const $title = document.getElementById('title');
    console.log($title);
    
    // <h1 id="title">Bucket List</h1>
    ```
    
4. `querySelector()` 메소드: CSS 선택자와 같은 문법으로 요소 찾아 접근
    
    `()` 안에 적어준 CSS 선택자를 만족하는 **첫 번째** 요소 객체를 반환.
    
    결과 없다면 null 반환.
    
    ```jsx
    document.querySelector('li');
    // <li> 태그로 감싸진 요소 찾기
    
    document.querySelector('.container');
    // container라는 클래스 가진 요소 찾기
    
    document.querySelector('#title');
    // title이라는 아이디 가진 요소 찾기
    ```
    
    CSS에서 요소 선택하듯이 더 구체적으로도 쓸 수 있음.
    
    ```jsx
    document.querySelector('.container div');
    // container 클래스 가진 요소의 자식 중 <div> 태그로 감싼 첫 번째 요소
    ```
    
5. `querySelectorAll()` 메소드: CSS 선택자와 같은 문법으로 요소 찾아 접근
    
    선택자를 만족하는 **모든** 요소의 목록을 얻기 위해 사용.
    
    ```jsx
    document.querySelectorAll('li');
    // <li> 태그로 감싸진 모든 요소의 목록 찾기
    
    const $cities = document.querySelectorAll('li');
    console.log($cities);
    
    /* NodeList(6)
        0: li
    	1: li
        2: li
    	3: li
        4: li
    	5: li
        length: 6
       ...
    */
    
    // getElementsByTagName, getElementsByClassName -> HTMLCollection이라는 유사 배열 형태 반환
    // querySelectorAll -> NodeList라는 유사 배열 형태 반환
    ```
    

### 유사 배열의 요소 하나하나 출력하는 방법

1. cf. **배열**의 각 요소들을 출력하려면: `map()` 메소드 이용
    
    `map()` 메소드: 주어진 함수를 배열 내 모든 요소 각각에게 호출한 결과를 모아 새로운 배열을 반환. **타깃이 배열일 때만 사용 가능**.
    
    ```jsx
    const array1 = [1, 3, 5, 8];
    
    console.log(array1.map(x => x * 2));
    
    // [Array] (4)
    // [2,6,10,16]
    ```
    
    ```jsx
    const array1 = [1, 3, 5, 8];
    array1.map(x => console.log(x));
    
    // 1
    // 3
    // 5
    // 8
    ```
    
2. 유사 배열 **NodeList**의 각 요소들을 출력하려면: `forEach()` 메소드 이용
    
    `forEach()` 메소드: 주어진 함수를 배열 요소 각각에 실행
    
    ```jsx
    const array2 = [3, 6, 8, 9];
    array2.forEach(x => console.log(x));
    
    // 3
    // 6
    // 8
    // 9
    ```
    
    ```jsx
    $cities.forEach(city => console.log(city.innerText));
    
    // "Bangkok"
    // "London"
    // "New York"
    // "Paris"
    // "Toronto"
    // "Barcelona"
    ```
    
3. 유사 배열 **HTMLCollection**의 각 요소들을 출력하려면: 일단 유사 배열을 배열로 바꿔줘야 함.
    
    
    **유사 배열 → 배열** 변환 방법
    
    1. `...`(**spread 연산자**) 이용
        
        ```jsx
        const $cities = document.getElementsByTagName('li');
        
        const newCities = [...$cities];
        console.log(newCities);
        
        // [Array] (6)
        // [<li>Bangkok</li>,<li>London</li>,<li>New York</li>,<li>Paris</li>,<li>Toronto</li>,<li>Barcelona</li>]
        
        // [] 안에 spread 연산자(...)를 써주고, 배열로 바꾸고 싶은 유사 배열인 변수 이름을 적어줌.
        // spread 연산자가 유사 배열 $cities를 돌며 각 요소들을 새로운 배열에 넣어줌.
        ```
        
    2. `Array.from()` 메소드 이용
        
        ```jsx
        const $cities = document.getElementsByTagName('li');
        
        const newCities = Array.from($cities);
        console.log(newCities);
        
        // [Array] (6)
        // [<li>Bangkok</li>,<li>London</li>,<li>New York</li>,<li>Paris</li>,<li>Toronto</li>,<li>Barcelona</li>]
        
        // Array.from의 매개 변수로(() 안에), 배열로 바꾸고 싶은 유사 배열인 변수 이름을 적어줌.
        // 메소드가 유사 배열을 배열로 바꿔줌.
        ```
        
    
    배열로 변환했으니, `map()` 메소드 사용 가능.
    
    ```jsx
    newCities.map(city => console.log(city.innerText));
    
    // "Bangkok"
    // "London"
    // "New York"
    // "Paris"
    // "Toronto"
    // "Barcelona"
    ```
    

### DOM 이용해 요소의 스타일 변경하는 방법

`style` 속성 사용.

```jsx
const $body = document.getElementsByTagName('body');
const $cityDiv = document.querySelector('.city');

$body[0].style.backgroundColor = 'teal'; // getElementsByTagName으로 접근해, 유사 배열인 HTMLCollection 형태로 반환되었기에 인덱스([0])까지 써줘야 제대로 적용됨.
$cityDiv.style.color = 'grey'; // 글자 색이 회색으로 변경됨.
```

### DOM 이용해 HTML 요소를 생성하는 방법

1. `createElement()` 메소드 사용. `()` 안에 만들고자 하는 요소의 태그명을 문자열 형태로 작성.
    
    ```jsx
    // Worst City 리스트 만들기 예시
    
    const worstCity = document.createElement('ul'); // <ul>을 만들어, worstCity라는 변수에 할당.
    const worstCityArr = ['Cairo', 'London', 'Risbon', 'Sydney']; // 비추천 여행지 목록 배열 생성.
    
    worstCityArr.map(city => { // map() 메소드 이용해 worstCityArr 배열의 인자 하나하나에 접근.
    	const worstCityItem = document.createElement('li'); // <li>를 만들어, worstCityItem이라는 변수에 할당.
    	worstCityItem.innerText = city; // 만들어진 <li> 안에 도시 이름을 넣어줌. city는 map()으로 돌고 있는 배열의 각 인자들임.
    	worstCity.appendChild(worstCityItem); // 잘 만들어진 요소들(<li>Cairo</li>와 같은 형태임)을 <ul>에 넣어줌.
    }); // <ul> 안에 <li> 넣기 완료.
    
    $cityDiv.appendChild(worstCity); // 리스트 만들었으니, 문서에 넣어주자. 위치는 $cityDiv의 안.
    ```
    
2. `insertAdjacentHTML()` 메소드 사용. `()`에는 요소를 넣을 위치(position)와, 넣을 요소를 문자열 형태로 써줌.
    
    위치는, 1`<span>`2`안녕하세요`3`</span>`4
    
    1. `'beforebegin'`: 요소 앞에(=여는 태그 앞에)
    2. `'afterbegin'`: 요소 안, 제일 앞에(=여는 태그 뒤에)
    3. `'beforeend'`: 요소 안, 제일 끝에(=닫는 태그 앞에)
    4. `'afterend'`: 요소 뒤에(=닫는 태그 뒤에)
    
    ```jsx
    // Worst City 리스트 만들기 예시
    
    const worstCityList = `
    <ul>
    	<li>Cairo</li>
    	<li>London</li>
    	<li>Risbon</li>
    	<li>Sydney</li>
    </ul>
    `
    
    $cityDiv.insertAdjacentHTML('beforeend', worstCityList); // <div> 안에서, 제일 뒤에 놓으려 하므로 beforeend. worstCityList 변수에 문자열 형태로 값을 할당했으므로 변수 이름을 써줌.
    ```
    

### DOM 이용해 요소의 클래스 수정하는 방법

`classList` 속성 사용 → 요소의 클래스 목록에 접근 가능.

1. 클래스 추가하기: `add()` 메소드 사용.
    
    ```jsx
    worstCityDiv.classList.add('city'); // worstCityDiv라는 변수(<div> 요소가 할당되어 있음)의 클래스 목록에 city라는 클래스를 추가.
    ```
    
2. 클래스 제거하기: `remove()` 메소드 사용.
    
    ```jsx
    worstCityDiv.classList.remove('city'); // worstCityDiv라는 변수(<div> 요소가 할당되어 있음)의 클래스 목록에서 city라는 클래스를 제거.
    ```
    

### DOM 이용해 요소에 속성 추가하는 방법

`setAttribute()` 메소드 사용.

```jsx
worstCity.setAttribute('name', 'worstCity');

console.log(worstCity);

// <ul name="worstCity"><li>Cairo</li><li>London</li><li>Risbon</li><li>Sydney</li></ul>
// name이라는 속성이 추가됨.
// name 속성의 값은 'worstCity'
```