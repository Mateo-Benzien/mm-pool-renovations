import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <div className="water-background">
        <About />
        <Services />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
