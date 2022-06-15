import React from "react";
import "./Search.css";

const Search = (props) => {
  const { handleOnChange, search, handleSearch } = props;
  // console.log(search);
  return (
    <div className="search">
      <input
        className="searchfield"
        onChange={handleOnChange}
        type="text"
        value={search}
      />
      <input
        onClick={() => {
          handleSearch();
        }}
        className="button"
        type="submit"
        value="Search"
      />
    </div>
  );
};

export default Search;
