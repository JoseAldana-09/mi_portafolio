import React from 'react';
import '../styles/BaseDatos.css'; // Importa el archivo CSS
import db1 from '../images/db1.jpg';
import db2 from '../images/db2.jpg';
import db3 from '../images/db3.jpg';
import db4 from '../images/db4.jpg';
import db5 from '../images/db5.jpg';
import db6 from '../images/db6.jpg';

const BaseDatos = () => {
  return (
    <div className="database-page database-background">
      <div className="database-container">
        <h1>Uso de Base de Datos</h1>
        <div className="database-gallery">
          <div className="database-card">
            <img src={db1} alt="Java" className="database-img" />
            <div className="database-description">
              <h2>MySQL</h2>
              <p>5 años de experiencia trabajando con MySQL, desarrollando y optimizando consultas complejas para aplicaciones empresariales.</p>
            </div>
          </div>
          <div className="database-card">
            <img src={db2} alt="C++" className="database-img" />
            <div className="database-description">
              <h2>PostreSQL</h2>
              <p>2 años de experiencia en PostgreSQL, implementando estructuras de datos eficientes y gestionando bases de datos escalables.</p>
            </div>
          </div>
          <div className="database-card">
            <img src={db3} alt="Python" className="database-img" />
            <div className="database-description">
              <h2>MongoDB</h2>
              <p>4 años de experiencia en MongoDB, diseñando esquemas flexibles para aplicaciones basadas en NoSQL.</p>
            </div>
          </div>
          <div className="database-card">
            <img src={db4} alt="Node.js" className="database-img" />
            <div className="database-description">
              <h2>SQLite</h2>
              <p>4 años de experiencia con SQLite, integrando bases de datos ligeras en aplicaciones móviles y de escritorio.</p>
            </div>
          </div>
          <div className="database-card">
            <img src={db5} alt="Elixir" className="database-img" />
            <div className="database-description">
              <h2>Oracle</h2>
              <p>5 años de experiencia en Oracle, administrando bases de datos empresariales y asegurando la integridad de los datos.</p>
            </div>
          </div>
          <div className="database-card">
            <img src={db6} alt="Flutter" className="database-img" />
            <div className="database-description">
              <h2>SQL Server</h2>
              <p>6 años de experiencia en SQL Server, desarrollando procedimientos almacenados y mejorando el rendimiento de consultas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseDatos;
