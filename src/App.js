import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";

const apiURL = ''

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

  handleSearch = (e) => {
    e.preventDefault();
    fetch(apiURL)
    .then((res) => res.json())
    .then((data) => console.log(data))
    this.setState({ isPlaying: 'RETURN OF OUR FETCH CALL'})
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
