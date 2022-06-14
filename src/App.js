import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
     <NavBar/>
      </Router>
    </div>
  );
}

export default App;
