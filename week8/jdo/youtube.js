
const $contentBox = document.querySelector('#contentBox');

const API_KEY = "AIzaSyCtZOtdfynMKg0xvuWDvzPshCATFxuM6BU";

function fetchVideo() {
    fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=100&regionCode=kr&key=${API_KEY}`)
        .then(response => response.json())
        .then(result => result.items.map(video => videoCardTemplate(video)))
        .catch(error => console.log(error))

}
fetchVideo();

function videoCardTemplate(data) {
    console.log(data);
    const videoItem =
        `<div class="videoItemContainer">
            <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
                <div class="videoThumbnailContainer">
                    <img class="thumbnailImg" src=${data.snippet.thumbnails.high.url}/>
                </div>
            </a>
            <div class="videoDetailsContainer">
                <a class="videoChannelLink" href=${`https://www.youtube.com/channel/${data.channelId}`}>
                    <img class="channelImg"
                        src="https://yt3.ggpht.com/8T1OF6XdiT2t5fjitlxh5KzcrqSsTbrEUxCF0JOM_fCKgWCenl0X8lvmv6NGmLVDSVsP4wZvwQ=s68-c-k-c0x00ffffff-no-rj" />
                </a>
                <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
                    <div class="videoMetaDetails">
                        <div class="videoTitle">
                            <h3>${data.snippet.title}</h3>
                        </div>
                        <div class="videoMetaData">
                            <p class="metaText">Chilli Music</p>
                            <p class="extraMeta">
                                <span class="metaText viewCount">${data.statistics.viewCount} views</span>
                                <span class="metaText">${data.snippet.publishedAt}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>`
        ;
    $contentBox.insertAdjacentHTML('beforeend', videoItem);
}