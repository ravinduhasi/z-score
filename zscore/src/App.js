// App.js
import './component/styles/navbar.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mnavbar from './component/pages/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Mnavbar /> {/* Navbar will be present on all pages */}
      <Routes>
        <Route path="/" element={<Home />} exact /> {/* Exact match for Home */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
