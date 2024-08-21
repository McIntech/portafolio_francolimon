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
import WhatsAppButton from './components/WhatsAppButton';  // Importa el componente del botón de WhatsApp

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Welcome />
        <Journey />
        <Experience />
        <Project />
        <Testimonies />
        <Skills />
        <Correo />
        <Footer />
        <WhatsAppButton />  {/* Agrega el botón de WhatsApp */}
      </div>
    </Router>
  );
}

export default App;