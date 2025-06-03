import React from 'react';
import pool2 from '../assets/Pool 2.jpg';
import pool3 from '../assets/pool 3.jpg';
import pool4 from '../assets/Pool 4.PNG';
import pool5 from '../assets/pool.PNG';
function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '20px auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <h2>Gallery</h2>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <img
          src={pool2}
          alt="Pool 2"
          style={{ width: '100%', maxWidth: '350px', borderRadius: '8px' }}
        />
        <img
          src={pool3}
          alt="Pool 3"
          style={{ width: '100%', maxWidth: '350px', borderRadius: '8px' }}
        />
         <img
          src={pool4}
          alt="Pool 4"
          style={{ width: '100%', maxWidth: '350px', borderRadius: '8px' }}
        />
          <img
          src={pool5}
          alt="pool 5"
          style={{ width: '100%', maxWidth: '350px', borderRadius: '8px' }}
        />
      </div>
    </section>
  );
}

export default Gallery;
