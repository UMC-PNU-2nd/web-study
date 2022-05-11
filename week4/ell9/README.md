# 4. DOM

- 예제 코드
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div class="container">
          <h1 id="title">Bucket List</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique modi
            eius sed nesciunt veritatis deleniti aperiam. Vero veritatis fugiat eos,
            deserunt, neque repudiandae impedit eius odio ex, voluptatem harum
            magni!
          </p>
          <p></p>
    
          <div class="city">
            <h2>< BEST 5 ></h2>
            <ul id="cityList">
              <li>Bangkok</li>
              <li>London</li>
              <li>New York</li>
              <li>Paris</li>
              <li>Toronto</li>
              <li>Barcelona</li>
            </ul>
          </div>
        </div>
        <script src="index.js"></script>
      </body>
    </html>
    ```
    

---

- DOM 요소 선택
    - `document` : HTML을 뜻함
    - 보통 DOM을 선택한 변수는 다른 변수들과 구분해주기 위해 $ 표시를 해주기도 하지만, 생략해도 무방하다.
    
    - 태그로 선택 ⇒ `getElementsByTagName()`
        
        ```jsx
        const $body = document.getElementsByTagName('body');
        ```
        
        - HTMLCollection을 반환한다.
    
    - class로 선택 ⇒ `getElementsByClassName()`
        
        ```jsx
        const $container = document.getElementsByClassName('container');
        ```
        
        - HTMLCollection을 반환한다.
    
    - id로 선택 ⇒ `getElementById()`
        
        ```jsx
        const $title = document.getElementById('title');
        ```
        
        - 태그와 class를 선택할 때와 달리, Element에 s를 붙이지 않고, 콘솔 출력값 또한 유사 배열이 아닌 바로 element가 출력된다.
    
    - 이미 선택된 DOM 요소 안에서 선택을 해줄 수도 있다.
        
        ```jsx
        const $cityList = document.getElementById('cityList');
        const $cities = $cityList.getElementsByTagName('li');
        ```
        
    - CSS 선택자로 선택 ⇒ `querySelector()`, `querySelectorAll()`
        
        ```jsx
        const $cities = $cityList.querySelector('li');
        // <li>Bangkok</li>
        
        const $cities = $cityList.querySelectorAll('li');
        /* // [object NodeList] (6)
        	 ["<li/>","<li/>","<li/>","<li/>","<li/>","<li/>"] */
        ```
        
        - `querySelector()`는 조건을 만족하는 첫번째 element만 선택하고, `querySelectorAll()`은 조건을 만족하는 모든 element를 선택한다.
        - `querySelectorAll()`은 NodeList를 반환한다.
    
- 유사 배열 : HTMLCollection, NodeList
    - HTMLCollection은 `for each`가 지원되지 않고, NodeList는 지원된다.
    - 유사 배열을 배열로 변환 하기 : `...`(spread operator), `Array.from`
        
        ```jsx
        // 1. spread operater
        const newCities = [...$cities]
        
        // 2. Array.from
        const newCities = conArray.from($cities)
        ```
        
    
- DOM 요소 활용
    - 요소 안의 text 가져오기
        
        ```jsx
        console.log($body[0].innerText);
        console.log($body[0].innerHTML);
        ```
        
        - `innerText` : 태그를 제외한 모든 텍스트들
        - `innerHTML` : 태그가 포함됨
    
    - 요소의 style 바꾸기
        
        ```jsx
        $body[0].style.backgroundColor = 'teal';
        
        const $cityDiv = document.querySelector('.city');
        $cityDiv.style.color = 'grey';
        ```
        
    
    - element 추가
        - 방법 1 ( `createElement()` 사용 )
            
            ```jsx
            const worstCity = document.createElement('ul');
            const worstCityArr = ['Cairo', 'London', 'Risbon', 'Sydney'];
            
            worstCityArr.map(city => {
            	const worstCityItem = document.createElement('li');
            	worstCityItem.innerText = city;
            	console.log(worstCityItem);
            	worstCity.appendChild(worstCityItem);
            })
            
            $cityDiv.appendChild(worstCity);
            ```
            
        - 방법2 ( `insertAdjacentHTML()` 사용 )
            
            ```jsx
            const worstCityList = `
            	<ul>
            		<li>Cairo</li>
            		<li>London</li>
            		<li>Risbon</li>
            		<li>Sydney</li>
            	</ul>`
            
            $cityDiv.insertAdjacentHTML('beforeend', worstCityList);
            ```
            
            - 위치 ⇒  `beforebegin`(여는 태그 앞), `afterbegin`(여는 태그 뒤), `beforeend`(닫는 태그 앞), `afterend`(닫는 태그 뒤)
        - 방법 1 develop (새로운 div를 만들어 그 안에 리스트 넣기)
            
            ```jsx
            const worstCity = document.createElement('ul');
            const worstCityDiv = document.createElement('div');
            const worstCitySubTitle = document.createElement('h2');
            const worstCityArr = ['Cairo', 'London', 'Risbon', 'Sydney'];
            
            worstCitySubTitle.innerText = '< Worst 5 >';
            worstCityDiv.appendChild(worstCitySubTitle);
            
            worstCityArr.map(city => {
            	const worstCityItem = document.createElement('li');
            	worstCityItem.innerText = city;
            	console.log(worstCityItem);
            	worstCity.appendChild(worstCityItem);
            })
            
            $cityDiv.appendChild(worstCity);
            $container[0].appendChild(worstCityDiv);
            ```
            
    - class 추가 / 삭제
        
        ```jsx
        // 추가
        worstCityDiv.classList.add('city');
        
        // 삭제
        worstCityDiv.classList.remove('city');
        ```
        
    - 속성 추가
        
        ```jsx
        worstCity.setAttribute('name', 'worstCity');
        // <ul name="worstCity"> ... <ul/>
        ```