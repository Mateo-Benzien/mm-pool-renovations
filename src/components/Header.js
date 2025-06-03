import React from 'react';
import headerBg from '../assets/pool.PNG'; // Add your header image here

function Header() {
  const headerStyle = {
    backgroundImage: `url(${headerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: 0,
    marginTop: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <h1>M&M Pool Renovations</h1>
      <p>Your Fibreglass And Epoxy Specialists</p>

      <nav>
        <ul style={navStyle}>
          <li><a href="#home" style={linkStyle}>Home</a></li>
          <li><a href="#about" style={linkStyle}>About Us</a></li>
          <li><a href="#services" style={linkStyle}>Services</a></li>
          <li><a href="#gallery" style={linkStyle}>Gallery</a></li>
          <li><a href="#contact" style={linkStyle}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
