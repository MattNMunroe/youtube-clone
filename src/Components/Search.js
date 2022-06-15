import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      input: ""
    }
  }
  
  handleOnChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    const { handleSearch } = this.props

    return(
      <div className="search">
      <input
        className="searchfield"
        onChange={this.handleOnChange}
        type="text"
        value={this.state.input}
      />
      <input
        onClick={() => {
          handleSearch(this.state.input);
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
