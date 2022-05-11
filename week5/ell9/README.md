# 5. Event

- 예제 코드
    - index.html
        
        ```html
        <div class="container">click me</div>
        <form>
        	<input type="text">
        	<button>submit</button>
        </form>
        <script src="index.js"></script>
        ```
        
    - index.js
        
        ```jsx
        const $div = document.querySelector('.container');
        const $form = document.querySelector('form');
        const $input = document.querySelector('input');
        const $button = document.querySelector('button');
        ```
        

---

- event 추가하기
    1. 이벤트 핸들러 ⇒ `target.이벤트이름 = 콜백함수`
        
        ```jsx
        $div.onclick = hadleClick; // 호출 기호를 쓰지 않음에 유의
        
        function handleClick () {
         console.log('clicked');
        }
        ```
        
        - 가독성이나 유지보수를 위해 분리해서 작성해주는 것이 좋다.
        - 단점 : 동일한 이벤트에 서로 다른 콜백을 지정하면 뒤의 핸들러가 앞의 핸들러를 덮어 쓴다.
    2. `addEventListener`
        
        ```jsx
        $div.addEventListner('click', () => console.log('clicked'));
        $div.addEventListner('click', () => alert('clicked'));
        ```
        
    
- event 삭제하기
    - `removeEventListener`
        
        ```jsx
        $div.removeEventListener('click', handleClick);
        ```
        

- event 인자
    - event 함수들은 기본적으로 event에 대한 정보를 인자로 받을 수 있다.
        
        ```jsx
        $div.addEventListner('click', handleClick);
        function handleClick (e) { //변수명 상관없음. 여기서는 e가 event 인자
         console.log(event);
        }
        
        //pointerEvent 객체가 출력된다.
        ```
        
    - pointerEvent의 `target`은 이벤트가 일어난 대상이다.
        
        ```jsx
        $div.addEventListner('click', handleClick);
        function handleClick (e) {
         console.log(event.target.innerText); //클릭한 대상(target)의 innerText를 가져옴
        }
        ```
        

- form 활용
    - input에 입력된 값 가져오기
        - `console.dir()` ⇒ 객체에 대한 자세한 정보를 확인할 수 있다.
        
        ```jsx
        $input.addEventListener('change', handleChange);
        function handleChange(event) {
        	console.log(event.target.value); //form의 입력값을 출력
        }
        ```
        
    - form에서 submit 했을 때
        - 새로고침 막기
            
            ```jsx
            $form.addEventListener('submit', handleSubmit);
            function handleSubmit(e) {
            	e.preventDefault(); //event가 가진 기본적인 동작을 막아준다.
            }
            ```
            
        - 입력값 변수에 저장하고 비워주기
            
            ```jsx
            $form.addEventListener('submit', handleSubmit);
            function handleSubmit(e) {
            	e.preventDefault();
            	const inputValue = $input.value;
            	$input.value = '';
            }
            ```