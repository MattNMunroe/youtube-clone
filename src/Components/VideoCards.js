//metadata for video
//map videocards in homepage (app)
//img, title, view count (stats; mapped isPlaying)
//search result
//title
//onClick when eventual video player exists

import "./VideoCards.css";
import { Link } from "react-router-dom";

const VideoCards = (props) => {
  const sortedVideos = props.thisIsPlaying.map((video, index) => {
    return (
      <Link to={`/videos/${video.id.videoId}`} key={index}>
        <div className="videocard">
          <img src={video.snippet.thumbnails.high.url} alt="" />
          <h1>{video.snippet.title}</h1>
        </div>
      </Link>
    );
  });
  return <div className="container">{sortedVideos}</div>;
};

export default VideoCards;
