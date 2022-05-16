# 8. 데이터 통신

- HTTP, HTTPS
    - HTTP = HyperText Transfer Protocol
    - HTTPS = HyperText Transfer Protocol Secure
    - HTTP 데이터 통신의 특징
        - request와 response로 이루어져있다.
        - 요청을 보낼 때 주로 데이터의 url address와 HTTP Request Method가 포함된다.
    - HTTP Request
        - GET : 기존의 데이터에 접근해서 사용 → 추가 정보가 필요없음
        - POST : 기존 데이터에 새로운 데이터를 추가 → 새로운 정보가 필요함
        - PUT : 기존의 데이터를 수정 → 새로운 정보가 필요함
        - DELETE : 데이터를 삭제 → 추가 정보가 필요없음
    - Response
        - XML : 태그로 이루어져 있다.
            
             [https://www.w3schools.com/xml/simple.xml](https://www.w3schools.com/xml/simple.xml)
            
        - JSON : 배열 안에 객체와 같은 형식으로 이루어져 있다.
            
            [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
            
        - 현업에서는 JSON이 XML보다 훨씬 많이 쓰인다
        
- fetch : fetch(url, options)
    - options는 추가 정보가 필요해서 body가 있는 경우 써준다.
    - 예제1 : Promise 사용
        
        ```jsx
        const result = [];
        
        //fetch는 기본적으로 Promise 형태
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then (data => data.map(item => result.push(item.name)))
        .catch(error => console.log(error))
        
        console.log(result)
        
        /*
        0: "Leanne Graham"
        1: "Ervin Howell"
        2: "Clementine Bauch"
        3: "Patricia Lebsack"
        4: "Chelsey Dietrich"
        5: "Mrs. Dennis Schulist"
        6: "Kurtis Weissnat"
        7: "Nicholas Runolfsdottir V"
        8: "Glenna Reichert"
        9: "Clementina DuBuque"
        */
        ```
        
    
    - 예제2 : async, await 사용
        
        ```jsx
        const dataFetch = async() => {
        	const response = await fetch("https://jsonplaceholder.typicode.com/users");
        	const data = await response.json();
        
        	return data
        }
        
        const dataResult = dataFetch();
        ```
        
- axios (별도의 설치 과정 필요)
    - axios cdn
        
        ```html
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        ```
        
    - 사용하기
        
        ```jsx
        axios.get("https://jsonplaceholder.typicode.com/users");
        .then(response => console.log(response.data))
        ```
        
    - 변수에 저장하기
        
        ```jsx
        const dataFetch = async() => {
        	const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;
        
        	return response
        }
        
        const dataResult = dataFetch();
        ```