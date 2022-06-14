
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar'
import Search from "./Components/Search";

class App extends React.Component {
  constructor(){
    super()
      this.state = {
        input: ''
      }
    }
  render () {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<NavBar/>}/>
     </Routes>
      <Search />
    </div>
  );
  }
}

export default App;