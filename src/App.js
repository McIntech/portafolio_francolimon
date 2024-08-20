
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Welcome from './components/welcome';
import Journey from './components/journey';
import Experience from './components/experience';
import Project from './components/projects';
import Testimonies from './components/testimonios';
import Skills from './components/skills';
import Correo from './components/correo';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/correo" element={<Correo />} />
          {/* Otras rutas de tu aplicación */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;