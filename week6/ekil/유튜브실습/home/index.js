// youtube api 이용해 페이지에 동적으로 영상 가져오기
// fetch 이용
const $contentBox = document.querySelector('#contentBox');

const API_KEY = 'AIzaSyABgyuN29OLwEo6oOn2QcBSDxtcJg60ETg'; // google cloud platform에서 받은 api 키 저장

// function fetchVideo() {
//     fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=100&regionCode=kr&key=${API_KEY}`)
//     .then(response => response.json()) // 서버에서 받은 응답을 json 형태로 변환
//     .then(result => console.log(result.items)) // result로 찍힌 정보 중 items에 해당하는 정보 배열이 동영상 파일들임
//     .then(result => result.items.map(video => videoCardTemplate(video))) // 비디오 아이템 하나하나에 접근, 각 아이템(video)을 videoCardTemplate에 넣어줄 것
//     .catch(error => console.log("error", error)) // 혹시 모를 오류 캐치 위해
// }

// 아까는 잘 됐는데 이유 모르겠으나 갑자기 데이터 로드가 안 돼서 async await 방식으로 다시 해봄
const dataFetch = async() => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=100&regionCode=kr&key=${API_KEY}`);
    const data = await response.json();
    // console.log(data);
    const result = data.items.map(video => videoCardTemplate(video))
}

dataFetch();

// fetchVideo();

// fetch로 받아온 비디오 아이템들 하나하나에, 하드코딩할 때 작성했던 아이템 형식을 적용해줄 것 -> 템플릿 생성(위에서 videoCardTemplate에 넣어준 각 video들을 가지고 템플릿에서 정의한 대로 html 코드를 생성해줄 것)
function videoCardTemplate(data) {
    // console.log(data); // 각 비디오의 코드가 잘 받아와졌는지 확인
    const videoItem = `
        <div class="videoItemContainer">
            <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
                <div class="videoThumbnailContainer">
                    <img class="thumbnailImg" src=${data.snippet.thumbnails?.high.url} />
                </div>
            </a>
            <div class="videoDetailsContainer">
                <a class="videoChannelLink" href=${`https://www.youtube.com/channel/${data.snippet.channelId}`}>
                    <img class="channelImg" src="https://yt3.ggpht.com/8T1OF6XdiT2t5fjitlxh5KzcrqSsTbrEUxCF0JOM_fCKgWCenl0X8lvmv6NGmLVDSVsP4wZvwQ=s68-c-k-c0x00ffffff-no-rj" />
                </a>
                <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
                    <div class="videoMetaDetails">
                        <div class="videoTitle">
                            <h3>${data.snippet.title}</h3>
                        </div>
                        <div class="videoMetaData">
                            <p class="metaText">${data.snippet.channelTitle}</p>
                            <p class="extraMeta">
                                <span class="metaText viewCount">${Number(data.statistics.viewCount) >1000 ? (Number(data.statistics.viewCount)/1000).toFixed(0) + 'K' : Number(data.statistics.viewCount)} views</span>
                                <span class="metaText">${luxon.DateTime.fromISO(data.snippet.publishedAt).toRelative()}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `;

    $contentBox.insertAdjacentHTML('beforeend', videoItem);
}




// href: 유튜브 동영상의 링크는 모두 같은 형식, 'watch?v=' 이후에 적힌 값(=해당 영상의 id)만 다름 -> 서버에서 받아온 각 items(=비디오들)의 id를 적어주면 됨
// 링크 자체가 큰따옴표로 감싸져 있었는데, ${}와 백틱 이용해 위와 같이 바꿔주어야 제대로 작동

// console.log(data); 이용해 썸네일 저장된 위치 확인, .thumbnailImg의 src 값으로 적어줌
// thumbnails에서 high를 지원하지 않는 영상들이 존재해 에러가 날 수 있음 -> high 앞에 물음표를 붙여 thumbnails?.high.url이라고 써주면 high가 있는지 먼저 확인, 없으면 그냥 넘어가고, 있으면 high.url에 접근함

// 각 채널 홈 페이지의 링크도 모두 같은 형식인데, channel/ 뒤에 적히는 채널 아이디만 다름
// console.log(data); 이용해 채널 아이디 저장된 위치 확인, .videoChannelLink의 href 값에 적어줌

// .channelImg는 현재 가져온 api에서는 접근 불가, 다른 api를 더 가져와야 함

// 조회 수 정보 가져오기 위해 statistics api도 함께 다시 가져옴
// 콘솔 창에서 viewCount 저장 위치 확인, .viewCount에 적어줌

// 위에서부터 api의 정보로 쭉 바꿔준 뒤, html 문서의 하드코딩된 부분을 javaScript로 바꿔준 대로 변경해야 함
// #contentBox를 $contentBox로 돔 이용해 선택, insertAdjacentHTML로 마지막 자식 자리에 각 videoItem들을 추가해줌
// HTML에 하드코딩했던 부분(JavaScript에서 템플릿으로 만들어준 부분) 삭제

// 조회 수를 150632 같은 숫자 형태 말고, 실제 유튜브 페이지처럼 15K, 1.5M 이런 식으로 나타나게 바꾸기
// console.log(data); 이용해 콘솔 창에서 확인하면 statistics에서 viewCount가 문자열 형식임을 알 수 있음 -> Number() 이용해 숫자로 바꿔줌
// ? : 이용한 조건문으로 조회 수가 1000이 넘는 경우 K를 붙여주고, 아닐 경우는 그냥 그대로 보여주도록 함
// 실제 유튜브 페이지와 비교했을 때, 소숫점 아래 숫자는 나타내지 않아야 함 -> toFixed() 이용

    // 조회 수 1,000,000회 넘으면 K 말고 M 붙여주고 싶은데, 함수를 정의해서 쓰면 된다는데, 어떻게 해야 할까?
    // 스트링 리터럴 안에서 코드를 쓸 땐 ${}로 감싸주면 된댔는데, 그렇게 해도 그 안에서 새로 변수와 함수를 정의할 순 없는 것 같다.
    // 스티링 리터럴 아래에서 변수와 함수 정의하고, 스트링 리터럴 안에 함수 실행하라 했더니 정의되지 않은 함수여서 안 된다고 해서, 스트링 리터럴 위에서 정의했다. 그런데 그래도 undefined views라고 나옴.
    // 함수에 각 영상의 조회 수를 전달하고 그것에 대해 .. map사용? -> 배열 형태가 아님. 배열로 만들어준다? -> splice 사용해봤지만 조회 수들이 들어간 하나의 배열이 만들어지지 않음, 배열 먼저 만들고 넣는 방식으로 했는데도. -> map 사용 불가해보임

    // const viewCounts = [];
    // const viewCount = Number(data.statistics.viewCount);

    // viewCounts.splice(0, 0, viewCount);
    // console.log(viewCounts);
    // function viewCountShort() {
    //     if (viewCount > 1000000) {
    //         viewCount.toFixed(0) + 'M';
    //     } else if (viewCount > 1000) {
    //         viewCount.toFixed(0) + 'K';
    //     } else {
    //         viewCount
    //     }
    // };


// data.snippet.publishedAt 정보를 연월일 형태가 아니라 며칠 전, n days ago 형태로 나타내기 -> luxon이라는 라이브러리(의 DateTime.fromISO() 메서드) 이용 -> CDN 추가함으로써 이용할 수 있음, luxon 페이지에서 코드 찾아 html 파일에 script 태그 이용해 붙여넣기
// 1 day ago, 11 hours ago 등 상대 시간으로 표시되어야 함 -> toRelative() 메서드 이용