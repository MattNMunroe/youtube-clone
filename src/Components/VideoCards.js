import "./VideoCards.css";
import { Link } from "react-router-dom";

const VideoCards = (props) => {
  const sortedVideos = props.thisIsPlaying.map((video, index) => {
    return (
      <Link to={`/videos/${video.id.videoId}`} key={index}>
        <div className="videocard">
          <img className="image" src={video.snippet.thumbnails.high.url} alt="" />
          <div className="title">{video.snippet.title}</div>
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
