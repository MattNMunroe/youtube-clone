import React from "react";
import "./Search.css";

//FUNCTIONAL OR CLASS COMPONENT? WHere are we handing STATE?

const Search = (props) => {
  return (
    <div>
      <form>
        <input
          className="searchfield"
          // onChange={Function Here}
          type="text"
          // value={this.state.BLANK}
        />
        <input className="button" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
