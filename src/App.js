import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/journey" component={Journey} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Project} />
          <Route path="/testimonies" component={Testimonies} />
          <Route path="/skills" component={Skills} />
          <Route path="/correo" component={Correo} />
          {/* Otras rutas de tu aplicación */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;