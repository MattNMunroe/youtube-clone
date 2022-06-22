import React from "react";
import { useState } from "react";

const SearchHistory = (props) => {
  const [isShowing, setShowing] = useState(false);

  return (
    <div className="sidebar">
      {isShowing &&
        props.searchHistory.map((history) => {
          return <div>{history}</div>;
        })}
      <button onClick={() => setShowing(!isShowing)}>
        {isShowing ? "Close History" : "Show History"}
      </button>
    </div>
  );
};

export default SearchHistory;
