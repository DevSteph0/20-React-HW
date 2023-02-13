import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as router, route, switch } from 'react-router-dom';

function App() {
  return (
    <div classname='App'>
      <Home/>
      <Contact />
      <About />
      <Projects />
    </div>

  );
}

export default App;
