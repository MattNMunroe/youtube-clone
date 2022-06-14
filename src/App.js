import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      `https://www.googleapis.com/youtube/v3/search?q=${this.state.input}&key=AIzaSyDJj8w5jL8QAg_FDqsDZoUWg8YfqbzZpRk`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    this.setState({ isPlaying: "RETURN OF OUR FETCH CALL" });
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
