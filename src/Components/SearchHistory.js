import React from "react";
import { useState } from "react";

const SearchHistory = (props) => {
  const [isShowing, setShowing] = useState(true);

  return (
    <div className="sidebar">
      <button onClick={() => setShowing(!isShowing)}>
        {isShowing ? "Hide History" : "Show History"}
      </button>
      {isShowing &&
        props.searchHistory.map((history, idx) => {
          return (
            <div key={idx} onClick={() => props.handleSearch(history)}>
              {history}
            </div>
          );
        })}
    </div>
  );
};

export default SearchHistory;
