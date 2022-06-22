import "./VideoCards.css";
import { Link } from "react-router-dom";

const VideoCards = (props) => {
  const sortedVideos = props.thisIsPlaying.map((video, index) => {
    return (
      <Link to={`/videos/${video.id.videoId}`} key={index}>
        <div className="videocard">
          <img
            className="image"
            src={video.snippet.thumbnails.high.url}
            alt=""
          />
          <br />
          <div className="title">{video.snippet.title}</div>
        </div>
      </Link>
    );
  });
  return (
    <div className="gallery">
      {props.thisIsPlaying.length ? (
        <div className="container">{sortedVideos}</div>
      ) : (
        <div className="wrapper-results">
          <span className="no-results">
            No search results yet! Please submit a search above.
          </span>
        </div>
      )}
    </div>
  );
};
export default VideoCards;
