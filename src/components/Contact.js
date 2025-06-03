import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '20px' }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}>
        <h2>Name</h2>
        <p><strong>Martin Benzien</strong></p>
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> 069 921 7426</p>
        <p><strong>Email:</strong> <a href="mailto:waterbladders@outlook.com">waterbladders@outlook.com</a></p>
        <p><strong>Location:</strong> Cape Town, Western Cape, South Africa</p>

        <h3>Business Hours</h3>
        <p>🕘 Monday to Friday: 09:00 – 18:00</p>
        <p>🕘 Saturday: 09:00 – 16:00</p>

        <h3>Follow Us</h3>
        <p>
          <a href="https://www.facebook.com/61556724244242" target="_blank" rel="noopener noreferrer">Facebook</a><br />
          Instagram: (link coming soon)
        </p>
      </div>
    </section>
  );
}

export default Contact;
