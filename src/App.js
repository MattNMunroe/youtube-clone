import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  const apiUrl = ""
  handleOnChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
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
        />
      </div>
    );
  }
}

export default App;
