import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;
