import React from 'react';
import '../styles/Backend.css'; // Importa el archivo CSS
import back1 from '../images/back1.jpg';
import back2 from '../images/back2.jpg';
import back3 from '../images/back3.jpg';
import back4 from '../images/back4.jpg';
import back5 from '../images/back5.jpg';
import back6 from '../images/back6.jpg';
import back7 from '../images/back7.jpg';
import back8 from '../images/back8.jpg';

const Backend = () => {
  return (
    <div className="backend-page backend-background">
      <div className="backend-container">
        <h1>Desarrollo Backend</h1>
        <div className="backend-gallery">
          <div className="backend-card">
            <img src={back1} alt="Java" className="backend-img" />
            <div className="backend-description">
              <h2>Java</h2>
              <p>Más de 5 años de experiencia en la creación de aplicaciones empresariales robustas y escalables.</p>
            </div>
          </div>
          <div className="backend-card">
            <img src={back2} alt="C++" className="backend-img" />
            <div className="backend-description">
              <h2>C++</h2>
              <p>4 años de experiencia en el desarrollo de software de alto rendimiento y sistemas embebidos.</p>
            </div>
          </div>
          <div className="backend-card">
            <img src={back3} alt="Python" className="backend-img" />
            <div className="backend-description">
              <h2>Python</h2>
              <p>3 años de experiencia en la construcción de aplicaciones web, análisis de datos y automatización.</p>
            </div>
          </div>
          <div className="backend-card">
            <img src={back4} alt="Node.js" className="backend-img" />
            <div className="backend-description">
              <h2>Node.js</h2>
              <p>Más de 4 años de experiencia en el desarrollo de aplicaciones web interactivas y eficientes.</p>
            </div>
          </div>
          <div className="backend-card">
            <img src={back5} alt="Elixir" className="backend-img" />
            <div className="backend-description">
              <h2>Elixir</h2>
              <p>2 años de experiencia en la creación de sistemas concurrentes y aplicaciones distribuidas.</p>
            </div>
          </div>
          <div className="backend-card">
            <img src={back6} alt="Flutter" className="backend-img" />
            <div className="backend-description">
              <h2>Flutter</h2>
              <p>1 año de experiencia en el desarrollo de aplicaciones móviles nativas y multiplataforma.</p>
            </div>
          </div>
          <div className="backend-card">
            <img src={back7} alt="PHP" className="backend-img" />
            <div className="backend-description">
              <h2>PHP</h2>
              <p>4 años de experiencia en la construcción de sitios web dinámicos y aplicaciones de servidor.</p>
            </div>
          </div>
          <div className="backend-card">
            <img src={back8} alt="C#" className="backend-img" />
            <div className="backend-description">
              <h2>C#</h2>
              <p>3 años de experiencia en el desarrollo de aplicaciones de escritorio y backend con .NET.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
