import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { useState } from "react";

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
  };

  return (
    <div>
      <YouTube videoId={videoId} />
      <form onSubmit={handleSubmit}>
        <label type="text" name="name">
          <h1>Name</h1>
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name..."
        ></input>
        <label type="text" name="name">
          <h1>Comment</h1>
        </label>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          label="Comment"
          placeholder="..."
        ></input>
        <button type="submit">Submit</button>
      </form>
      {console.log(commentArray)}
      {commentArray.map((completeComment, index) => {
        return (
          <div key={index}>
            <h2>{completeComment[videoId].name}</h2>
            <p>{completeComment[videoId].comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VideoPlayer;
