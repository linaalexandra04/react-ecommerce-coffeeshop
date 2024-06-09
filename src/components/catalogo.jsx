import React from 'react';
import '../styles/catalogo.css'

const Catalogo = () => {
    const images = [
    '/img/cafe1.png',
    '/img/cafe2.png',
    '/img/cafe3.png',
    '/img/cafe4.png',
    '/img/cafe5.png',
    '/img/cover2.png',
    '/img/cover3.png',
    '/img/cover4.png',
    '/img/cover5.png',
    ];

    return (
        <div className="catalogo">
          <h2 className="catalogo-title">Catálogo</h2>
          <p className="catalogo-description">Café Gourmet.</p>
          <div className="gallery">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery item ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Catalogo;
