# 7. 비동기

1. 콜백 & 콜백 지옥
    - 동기 (synchronous) : 순서대로 일을 처리하는 방식
    - 비동기 (asynchronous) : 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 것들을 먼저 처리하는 방식
    - `setTimeout()` : 비동기 함수의 대표적인 함수
        
        ```jsx
        console.log('1')
        setTimeout(function(){
        	console.log('2')
        },10)
        console.log('3')
        console.log('4')
        setTimeout(function(){
        	console.log('5')
        },10)
        console.log('6')
        setTimeout(function(){
        	console.log('7')
        },10)
        console.log('8')
        setTimeout(function(){
        	console.log('9')
        },10)
        console.log('10')
        
        // 1, 3, 4, 6, 8, 10, 5, 2, 9, 7의 순서로 출력된다.
        ```
        
        ```jsx
        setTimeout(콜백함수, 얼마나 딜레이 시킬것인지를 정하는 ms단위의 )
        ```
        
        - 딜레이시간이 10ms라면, 함수가 호출되자마자 10ms 후에 실행되는 것이 아니라, 먼저 동기적으로 실행이 다 끝난 후 10ms 후에 실행됨. 즉, 정확한 시작 시간은 알 수 없음.
        
    - 콜백함수
        - 함수를 바로 실행하는 것이 아니라, 특정 시간 뒤에 다시 콜을 해서 실행하는 함수
        - 함수 안에 인자로 들어가는 함수
        - 비동기적으로 쓰일 수도 있고, 동기적으로 쓰일 수도 있음
        - 콜백함수 비동기 vs 동기
            
            ```jsx
            function syncFunc(suncCallback) {
            	syncCallback();
            }
            
            function asyncFunc(asyncCallback) {
            	setTimeout(asyncCallback, 3000);
            }
            
            syncFunc(() => console.log('sync'));
            asyncFunc(() => console.log('async'));
            
            //sync, async 순서로 출력됨
            //sync는 콜백함수이지만 동기적으로 처리
            //async는 콜백함수를 비동기적으로 처리
            ```
            
    - 콜백지옥
        
        ```jsx
        const posts = [
        	{ post_id: 1, post_title: '첫번째 글' },
        	{ post_id: 2, post_title: '두번째 글' },
        	{ post_id: 3, post_title: '세번째 글' },
        ];
        
        const posts = [
        	{ post_id: 1, comment_id: 1, comment: '첫번째 글 첫번째 코멘트' },
        	{ post_id: 2, comment_id: 1, comment: '두번째 글 첫번째 코멘트' },
        	{ post_id: 2, comment_id: 2, comment: '두번째 글 두번째 코멘트' },
        	{ post_id: 2, comment_id: 3, comment: '두번째 글 세번째 코멘트' },
        	{ post_id: 3, comment_id: 1, comment: '세번째 글 첫번째 코멘트' },
        	{ post_id: 3, comment_id: 2, comment: '세번째 글 두번째 코멘트' },
        ];
        
        const postNum = 2;
        
        const getPost = (id, onSuccess, onError) => {
        	setTimeout(() => {
        		const post = posts.find(post => post.post_id === id);
        		if(post) {
        			onSuccess(post.post_id);
        		} else {
        			onError('찾는 포스트 없다');
        		}
        	},3000)
        }
        
        const getComments = (post_id, onSuccess, onError) => {
        	setTimeout(() => {
        		const result = comments.filter(comment => comment.post_id === post_id);
        		if(result.length > 0) { //filter는 찾는 요소가 없으면 빈배열을 반환하기 때문에 length로 결과값 유무를 판단
        			onSuccess(result);
        		} else {
        			onError('찾는 포스트에 코멘트가 없다');
        		}
        	},4000)
        }
        
        getPost(
        	postNum,
        	(postId) => {
        		console.log('Post:', postId);
        		getComments(
        			postId,
        			(result) => {
        				console.log('Comments:' , result);
        			},
        			(message) => {
        				console.log(message);
        			},
        		)
        	},
        	(message) => {
        		console.log(message);
        	}
        )
        ```
        
2. promise & async/await
    - promise 선언
        
        ```jsx
        new Promise(resolve, reject)
        ```
        
        - resolve: 성공했을때 실행할 함수, reject: 실패했을때 실행할 함수
        - promise의 state
            - pending(비동기 작업이 진행중)
            - fulfilled (성공적으로 끝낸 상태)
            - rejected (실패로 끝난 상태)
    - promise로 콜백지옥 고쳐보기
        
        ```jsx
        const getPost = (id) => {
        	return new Promise ((resolve, reject) => {
        		setTimeout(() => {
        			const post = posts.find(post => post.post_id === id);
        			if(post) {
        				resolve(post.post_id);
        			} else {
        				reject('찾는 포스트 없다');
        			}
        		},3000)
        	});
        }
        
        const getComments = (post_id) => {
        	return new Promise (() => {
        		setTimeout(() => {
        			const result = comments.filter(comment => comment.post_id === post_id);
        			if(result.length > 0) { //filter는 찾는 요소가 없으면 빈배열을 반환하기 때문에 length로 결과값 유무를 판단
        				resolve(result);
        			} else {
        				reject('찾는 포스트에 코멘트가 없다');
        			}
        		},4000)
        	});
        }
        
        getPost(postNum)
        .then(postId => {
        	console.log('Post:', postId)
        	return getComments(postId) //두 줄 이상일 때는 반드시 return을 써야한다
        })
        .then(result => console.log('Comments:' , result));
        .catch(message => console.log(message));
        ```
        
        - `.then` : 성공했을 때, 즉 resolve가 실행됐을 때 promise를 반환
        - `.catch` : 실패했을 때, 즉 reject가 실행됐을 때 promise를 반환
        
    - async/await : 비동기적인 것들을 동기적으로 느끼게끔 해주는 것
        
        ```jsx
        async function getResult() {
        	const postId_result = await getPost(postNum); //getPost라는 비동기적인 함수를 실행한 후에 변수에 담는다.
        	const comments_result = await getComments(postId_result);
        	console.log('Post:', postId_result, 'Comments', comments_result);
        }
        
        getResult();
        ```