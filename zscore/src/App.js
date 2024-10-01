// App.js
import './component/styles/navbar.css';
import Mnavbar from './component/pages/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
