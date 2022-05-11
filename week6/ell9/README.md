# 6. Local Storage

- Local Storage
    - 새로고침을 해도 데이터가 계속 유지될 수 있도록 함
    - 나의 로컬 환경의 저장공간에 정보를 저장한다

- Local Storage 확인
    - 개발자도구 > Application > Local Storage에서 원하는 사이트 클릭
    - key와 value 형태로 저장함
    
- Local Storage에 정보 저장하기
    - `setItem` : localStorage 정보를 저장할 때 사용하는 메소드
        
        ```jsx
        localStorage.setItem('name','ellgu');
        localStorage.setItem('age','1000');
        ```
        
    - local strorage에 저장되는 값들은 모두 문자열 형태
    
- Local Storage에서 정보 가져오기
    - `getItem` : localStorage에서 정보를 가져올 때 사용하는 메소드
        
        ```jsx
        const result = localStorage.getItem('age');
        console.log(typeof result) // "string"
        ```
        
    - `JSON.stringify` : 값을 문자열로 변환한다.
        
        ```jsx
        const travel = {
        	destinations: ['paris', 'sydney', 'taipei'],
        	days: 100,
        	mate: undefined,
        	isAvailable: true
        }
        
        localStorage.setItem('travel', JSON.stringify(travel));
        ```
        
        - 위 상태에서는 travel이 문자열로 저장되었기 때문에 객체처럼 접근할 수 없다
            
            ```jsx
            const data = localStorage.getItem('travel');
            console.log(data.desinations); // undefined
            ```
            
        - `JSON.parse`를 사용하면 객체 형식으로 받아올 수 있다.
            
            ```jsx
            const data = localStorage.getItem('travel');
            console.log(data.desinations); // ['paris', 'sydney', 'taipei'
            ```
            

- Local Storage에서 정보 삭제하기
    - `removeItem` : 특정 데이터 삭제
        
        ```jsx
        localStorage.removeItem('name');
        ```
        
    - `clear` : localStorage에 저장된 모든 데이터 삭제
        
        ```jsx
        localStorage.clear();
        ```