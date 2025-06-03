import React from 'react';

function Services() {
  return (
    <section id="services" style={{ padding: '20px' }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}>
        <h2>What We Offer</h2>
        <ul>
          <li>💧 Water Storage Solutions</li>
          <li>🧽 Fibreglass Lining</li>
          <li>🎨 Epoxy Coating</li>
          <li>🪜 Custom Pool Step Construction</li>
          <li>⚙️ Pump & Filter Installation</li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
