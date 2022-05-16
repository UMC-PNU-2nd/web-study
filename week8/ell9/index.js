const $contentBox = document.querySelector('#contentBox');

const API_KEY = "AIzaSyCKCp_Ti25MhrFiWaRp_6VWxS64tV4st5o";

function fetchVedio(){
  fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=100&regionCode=kr&key=${API_KEY}`
  ).then(response => response.json())
  .then(result => result.items.map(video => videoCardTemplate(video)))
  .catch(error => console.log(error))
}

fetchVedio();

function videoCardTemplate(data){
  console.log(data)
  const videoItem = `
  <div class="videoItemContainer">
    <a href=${`https://www.youtube.com/watch?v=${data.id}`}>
        <div class="videoThumbnailContainer">
            <img class="thumbnailImg" src="https://i.ytimg.com/vi/${data.id}/hqdefault.jpg"/>
        </div>
    </a>
    <div class="videoDetailsContainer">
        <a class="videoChannelLink" href="https://www.youtube.com/channel/${data.snippet.channelId}">
            <img class="channelImg" src="https://yt3.ggpht.com/8T1OF6XdiT2t5fjitlxh5KzcrqSsTbrEUxCF0JOM_fCKgWCenl0X8lvmv6NGmLVDSVsP4wZvwQ=s68-c-k-c0x00ffffff-no-rj" />
        </a>
        <a href="https://www.youtube.com/watch?v=${data.id}">
            <div class="videoMetaDetails">
                <div class="videoTitle">
                    <h3>${data.snippet.title}</h3>
                </div>
                <div class="videoMetaData">
                    <p class="metaText">${data.snippet.channelTitle}</p>
                    <p class="extraMeta">
                        <span class="metaText viewCount">${ Number(data.statistics.viewCount) > 1000 
                          ? (Number(data.statistics.viewCount)/1000 > 1000 
                            ? (Number(data.statistics.viewCount)/1000000).toFixed(1) + 'M' 
                            : Math.floor(Number(data.statistics.viewCount)/1000) + 'K')
                          : Number(data.statistics.viewCount)} views</span>
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