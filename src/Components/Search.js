import React from "react";
import "./Search.css";

//FUNCTIONAL OR CLASS COMPONENT? WHere are we handing STATE?

const Search = (props) => {
  return (
    <div>
      <form>
        <input
          className="searchfield"
          handleOnChange = {this.handleOnChange}
          type="text"
          value = {this.state.input}
        />
        <input className="button" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
