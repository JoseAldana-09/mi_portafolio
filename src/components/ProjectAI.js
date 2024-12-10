import React from 'react';
import '../styles/ProjectAI.css'; // Importa el archivo CSS
import ia1 from '../images/ia1.jpg';
import ia2 from '../images/ia2.jpg';
const ProjectAI = () => {
  return (
    <div className="project-page project-background">
      <div className="project-container">
        <h1>Desarrollo de herramientas y aplicaciones para IA</h1>
        <p>Este proyecto se centra en la creación de herramientas innovadoras 
          y aplicaciones basadas en Inteligencia Artificial. El objetivo es
          desarrollar soluciones que mejoren la eficiencia y efectividad en 
          diversas industrias, utilizando técnicas avanzadas de aprendizaje 
          automático, procesamiento de lenguaje natural y visión por computadora.
        </p>
        <div className="galeria">
          <div className="galeria-item" style={{ backgroundImage: `url(${ia1})`}}></div>
        </div>
        <ul>
          <li>Desarrollo de modelos predictivos</li>
          <li>Aplicaciones de procesamiento de lenguaje natural</li>
          <li>Sistemas de recomendación personalizados</li>
          <li>Implementación de visión por computadora</li>
          <li>Optimización de procesos industriales mediante IA</li>
        </ul>
        <p>Estas herramientas y aplicaciones están diseñadas para integrarse 
          fácilmente en diferentes entornos y plataformas, proporcionando a 
          los usuarios finales una experiencia fluida y mejorada. La implementación 
          de estos desarrollos ha mostrado resultados significativos en la mejora de 
          la toma de decisiones y la automatización de tareas complejas.
          </p>
          <div className="galeria">
          <div className="galeria-item" style={{ backgroundImage: `url(${ia2})` }}></div>
      </div>
      </div>
      
    </div>
  );
};

export default ProjectAI;
