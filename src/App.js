import React from 'react';
import Header from './components/header';
import Welcome from './components/welcome'
import Journey from './components/journey'
import Experience from './components/experience'
import Project from './components/projects'
import Testimonies from './components/testimonios'
import Skills from './components/skills'
import Correo from './components/correo'
import Footer from './components/footer'

function App() {
  return (
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
      {/* Otros componentes de tu aplicación */}
    </div>
  );
}

export default App;