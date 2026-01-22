import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Campus from './pages/Campus';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="apropos" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="campus" element={<Campus />} />
          <Route path="actualites" element={<News />} />
          <Route path="actualites/:id" element={<NewsDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="galerie" element={<Gallery />} />
          <Route path="*" element={<div className="container" style={{ padding: '100px 0', textAlign: 'center' }}><h2>Page non trouvée</h2><Home /></div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
