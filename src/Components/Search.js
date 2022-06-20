import React from "react";
import "./Search.css";

//TODO: SUBMIT HANDLER
//Fixed: Deconstructed props w/ correct names for passed functions/state

const Search = (props) => {
  const { handleOnChange, search, handleSearch } = props;
  // console.log(search);
  return (
    <div>
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
