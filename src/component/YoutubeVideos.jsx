 import React,{useState, useEffect} from 'react'
import style  from "../component/YoutubeVideos.module.css"

function YoutubeVideos() {
const [YoutubeVideos, setVideos] = useState([]);

 useEffect(() => {
   fetch(
     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyDSdz3s8gTgfqGZH5HdmzeW8C_nAXee-5Y`
   )
     .then((res) => res.json()) // code to handle the response data
     .then((data) => setVideos(data.items)) // to get data
     .catch((err) => console.log(err)); // code to handle request errors
 }, []);
  // console.log(YoutubeVideos)
  return (
    <div className={style.youtubeVideosContainer}>
      <div className='text-center'>
        <h2>Latest Videos</h2>
      </div>
      <div className="container">
        <div className="row">
          {YoutubeVideos?.map((video) => {
            let vidId = video.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let linkWrapper = (
              <div key={vidId} className="col-sm-12 col-lg-4">
                <div className={style.singleVideoWrapaper}>
                  <div className={style.videoThumbnail}>
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                      />
                    </a>
                  </div>
                  <div className={style.videoInfoWrapper}>
                    <div className={style.videoTitle}>
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {video.snippet.title}
                      </a>
                    </div>
                    <div className={style.videoDisc}>
                      {video.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return linkWrapper;
          })}
        </div>
      </div>
          
    </div>
  );
  
}

export default YoutubeVideos;
