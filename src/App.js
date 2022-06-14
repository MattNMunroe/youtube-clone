
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from './Components/NavBar'
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Router>
     <NavBar/>
      <Router/>
    <Search />;
    </div>
  );
}

export default App;
