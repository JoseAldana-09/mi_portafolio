import React from 'react';
import '../styles/Frontend.css'; // Importa el archivo CSS
import front1 from '../images/front1.jpg';
import front2 from '../images/front2.jpg';
import front3 from '../images/front3.jpg';
import front4 from '../images/front4.jpg';
import front5 from '../images/front5.jpg'; // Importa la nueva imagen

const Frontend = () => {
  return (
    <div className="frontend-page frontend-background">
      <div className="frontend-container">
        <h1>Desarrollo Frontend</h1>
        <div className="frontend-gallery">
          <div className="frontend-card">
            <div className="frontend-dual-img">
              <img src={front1} alt="HTML" className="frontend-img" />
              <img src={front2} alt="CSS" className="frontend-img" />
            </div>
            <div className="frontend-description">
              <h2>HTML & CSS</h2>
              <p>Más de 5 años de experiencia en la creación de estructuras web robustas y estéticas.</p>
            </div>
          </div>
          <div className="frontend-card">
            <img src={front3} alt="React" className="frontend-img" />
            <div className="frontend-description"> 
              <h2>React</h2> 
              <p>3 años de experiencia en el desarrollo de interfaces dinámicas 
                y componentes reutilizables. He trabajado extensamente con React 
                para construir aplicaciones web interactivas y de alto rendimiento.
                Mi experiencia incluye el uso de Redux para la gestión del estado, 
                la implementación de rutas dinámicas con React Router, y el desarrollo 
                de componentes personalizados para mejorar la experiencia del usuario. 
              </p>
            </div>
          </div>
          <div className="frontend-card">
            <img src={front4} alt="Angular" className="frontend-img" />
            <div className="frontend-description">
              <h2>Angular</h2>
              <p>2 años de experiencia en la construcción de aplicaciones web escalables y mantenibles.</p>
            </div>
          </div>
          <div className="frontend-card">
            <img src={front5} alt="JavaScript" className="frontend-img" />
            <div className="frontend-description">
              <h2>JavaScript</h2>
              <p>Más de 4 años de experiencia en la creación de aplicaciones web interactivas y eficientes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
