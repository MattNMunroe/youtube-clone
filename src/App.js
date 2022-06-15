import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import VideoCards from "./Components/VideoCards"
import VideoPlayer from "./Components/VideoPlayer"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      isPlaying: [],
    };
  }

  handleSearch = (search) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${search}&key=AIzaSyDJj8w5jL8QAg_FDqsDZoUWg8YfqbzZpRk&part=snippet`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ isPlaying: data.items}));
  };

  render() {
    console.log(this.state.isPlaying)
    return (
      <div className="App">
        <NavBar />
        <Search
          handleSearch={this.handleSearch}
        />
        <Routes>
          <Route path='/videos/:id' element={<VideoPlayer/>}/>
       <Route path='/' element={<VideoCards thisIsPlaying={this.state.isPlaying}/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;