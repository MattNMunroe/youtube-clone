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
  return (
    <div>
      {props.thisIsPlaying.length ? (
        <div className="container">{sortedVideos}</div>
      ) : (
        "No Search Results yet! Please submit a search above!"
      )}
    </div>
  )};
export default VideoCards;
