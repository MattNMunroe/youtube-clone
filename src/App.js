
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar'
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<NavBar/>}/>
     </Routes>
      <Search />
    </div>
  );
}

export default App;