import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import VideoCards from "./Components/VideoCards";
import VideoPlayer from "./Components/VideoPlayer";
import About from "./About";
import ModalNotFound from "./Components/ModalNotFound";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: [],
    };
  }

  handleSearch = (search) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&type=video&q=${search}&key=${process.env.REACT_APP_API_KEY}&part=snippet`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ isPlaying: data.items }))
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    console.log(this.state.isPlaying);

    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search handleSearch={this.handleSearch} />
                <VideoCards thisIsPlaying={this.state.isPlaying} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<VideoPlayer />} />
          <Route path="*" element={<ModalNotFound onClick={() => {}} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
