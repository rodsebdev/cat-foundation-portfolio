import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import CatDetail from './pages/CatDetail';
import Contact from './pages/Contact';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <h1>🐾 CAT Foundation</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/adopt">Adopt</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <LanguageSelector />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adopt/:id" element={<CatDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
