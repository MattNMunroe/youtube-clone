import React from "react";
import "./Search.css";

class Search extends React.Component {
  
  render() {
    const { handleOnChange, search, handleSearch } = this.props

    return(
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
    )
  }
}

export default Search;
