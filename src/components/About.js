import React from 'react';

function About() {
  return (
    <section
      id="about"
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '60px auto 20px auto', // 👈 top margin added here
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}
    >
      <h2>About Us</h2>
      <p>
        M&M Pool Renovations is a Cape Town–based company specializing in high-quality fibreglass and epoxy solutions. 
        With years of hands-on experience, we focus on durable pool restorations, structural upgrades, and custom solutions 
        for residential and commercial water features.
      </p>
    </section>
  );
}

export default About;
