import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  let videoId = useParams().id;

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentArray([
      ...commentArray,
      { [videoId]: { name: name, comment: comment } },
    ]);
    setName("");
    setComment("");
  };

  return (
    <div className="video-wrapper">
      <YouTube className="video" videoId={videoId} />
      <div className="leave-comment"> </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name..."
          required
        ></input>

        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          placeholder="Comment..."
          required
        ></input>
        <br />
        <button className="comment-button" type="submit">
          Submit
        </button>
      </form>
      <div className="comment-box">
        {commentArray.map((completeComment, index) => {
          return (
            <blockquote key={index}>
              {completeComment[videoId].comment}
              <span>-{completeComment[videoId].name}</span>
            </blockquote>
          );
        })}
      </div>
    </div>
  );
};

export default VideoPlayer;
