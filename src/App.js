import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      isPlaying: [],
    };
  }
  handleOnChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSearch = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${this.state.search}&key=AIzaSyDJj8w5jL8QAg_FDqsDZoUWg8YfqbzZpRk&part=snippet`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    this.setState({ isPlaying: "RETURN OF FETCH CALL" });
  };

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
        <Search
          search={this.state.input}
          handleOnChange={this.handleOnChange}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
