import React from 'react';
import '../styles/ProjectLinux.css'; // Importa el archivo CSS
import linux1 from '../images/linux1.jpg';
import linux2 from '../images/linux2.jpg';

const ProjectLinux = () => {
  return (
    <div className="project-page project-background">
      <div className="project-container">
        <h1>Creación de un nuevo sistema operativo basado en Linux</h1>
        <p>Este proyecto está enfocado en el desarrollo de un nuevo sistema operativo basado en Linux, diseñado para ser robusto, seguro y eficiente. El objetivo es crear una plataforma que ofrezca una excelente experiencia de usuario tanto para desarrolladores como para usuarios finales.</p>
        <div className="galeria">
          <div className="galeria-item" style={{ backgroundImage: `url(${linux1})` }}></div>
        </div>
        <ul>
          <li>Sistema operativo ligero y rápido</li>
          <li>Seguridad mejorada con tecnologías avanzadas</li>
          <li>Interfaz de usuario intuitiva y personalizable</li>
          <li>Compatibilidad con una amplia gama de hardware</li>
          <li>Soporte para aplicaciones modernas y legado</li>
        </ul>
        <p>El sistema operativo está diseñado para ser altamente configurable, permitiendo a los usuarios adaptar el entorno a sus necesidades específicas. Además, se han implementado medidas de seguridad avanzadas para proteger los datos y la privacidad de los usuarios.</p>
        <div className="galeria">
          <div className="galeria-item" style={{ backgroundImage: `url(${linux2})`}}></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLinux;
