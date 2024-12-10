import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../styles/SobreMi.css'; 
import imagen1 from '../images/imagen1.jpg';
import imagen2 from '../images/imagen2.jpg';
import imagen3 from '../images/imagen3.jpg';
import imagen4 from '../images/imagen4.jpg';
import imagen5 from '../images/imagen5.jpg';
import imagen6 from '../images/imagen6.jpg';
import imagen7 from '../images/imagen7.jpg';
import imagen8 from '../images/imagen8.jpg';
import imagen9 from '../images/imagen9.jpg';
import imagen10 from '../images/imagen10.jpg';
import imagen11 from '../images/imagen11.jpg';
import imagen12 from '../images/imagen12.jpg';
import imagen13 from '../images/imagen13.jpg';
import imagen14 from '../images/imagen14.jpg';
import imagen15 from '../images/imagen15.jpg';
import imagen16 from '../images/imagen16.jpg';
import imagen17 from '../images/imagen17.jpg';

const SobreMi = () => {
  return (
    <div className="about-page">
      <div className="sobre-mi-background"></div> 
      <div className="sobre-mi-container">
        <h1>INFORMÁTICO</h1>
        <p>
          <strong>JUAN JOSE ALDANA RODRIGUEZ</strong>
        </p>
        <p>
          Hola, soy <strong>Jose Aldana</strong>, un desarrollador apasionado por la tecnología. Me especializo en desarrollo web, inteligencia artificial y gestión de bases de datos.
        </p>
        <p>
          Tengo <strong>21 años</strong> y nací en <strong>Potosí, Bolivia</strong> el <strong>16 de septiembre de 2001</strong>. Desde temprana edad, he mostrado un profundo interés por las tecnologías emergentes y la programación. Esto me llevó a estudiar ingeniería informática y a dedicarme de lleno al desarrollo de software.
        </p>
        <p>
          Soy una persona curiosa y autodidacta, siempre en busca de nuevos desafíos y conocimientos. Durante mi carrera, he trabajado en una variedad de proyectos que van desde aplicaciones web hasta sistemas complejos de inteligencia artificial. Estoy convencido de que la tecnología puede cambiar el mundo y estoy comprometido con el desarrollo de soluciones innovadoras que generen un impacto positivo en la sociedad.
        </p>
        <div className="galery">
          <div style={{ backgroundImage: `url(${imagen1})` }}></div>
          <div style={{ backgroundImage: `url(${imagen2})` }}></div>
          <div style={{ backgroundImage: `url(${imagen3})` }}></div>
          <div style={{ backgroundImage: `url(${imagen4})` }}></div>
        </div>
        <h2>Educación</h2>
        <p>
          - Licenciatura en Ingeniería Informática en la Universidad Autonoma Tomás Frias.<br/>
          - Diplomado en Inteligencia Artificial por la misma universidad.<br/>
          - Experiencia en ciber Seguridad
        </p>
        <div className="galery">
          <div style={{ backgroundImage: `url(${imagen5})` }}></div>
          <div style={{ backgroundImage: `url(${imagen6})` }}></div>
        </div>
        <h2>Habilidades y Conocimientos</h2>
        <p>
          - Lenguajes de Programación: Python, Java, C++, JavaScript, Elixir, Flutter, PHP, C#, HTML, CSS, React, Angular.<br/>
          - Frameworks y Herramientas: TensorFlow, PyTorch, Node.js, Express, Django, Flask.<br/>
          - Bases de Datos: MySQL, PostgreSQL, MongoDB.<br/>
          - Sistemas Operativos: Linux, Windows, macOS.<br/>
          - Lenguajes favoritos: FLUTTER, PYTHON <br/>
          - Base de datos favorita: SQL SERVER y FIREBASE
        </p>
        <div className="galery">
          <div style={{ backgroundImage: `url(${imagen7})` }}></div>
          <div style={{ backgroundImage: `url(${imagen8})` }}></div>
          <div style={{ backgroundImage: `url(${imagen9})` }}></div>
        </div>
        <h2>Experiencia Profesional</h2>
        <p>
          - Desarrollador Web en TechSolutions Ltda., donde lideré un equipo de desarrollo para crear plataformas web interactivas.<br/>
          - Ingeniero de Software en Innovatech, donde diseñé e implementé sistemas de inteligencia artificial para mejorar procesos empresariales.
        </p>
        <div className="galery">
          <div style={{ backgroundImage: `url(${imagen10})` }}></div>
          <div style={{ backgroundImage: `url(${imagen11})` }}></div>
        </div>
        <h2>Intereses Personales</h2>
        
        <p>
          Fuera del ámbito profesional, me apasiona la música y toco la guitarra en mis tiempos libres.
          También disfruto de la lectura, especialmente de libros de ciencia ficción y tecnología. Además,
          soy un entusiasta del deporte espcialmente del futsal, y practico ciclismo y senderismo en las 
          hermosas montañas de Bolivia.
        </p>
        <p>
          Mi objetivo es seguir aprendiendo y creciendo como profesional, mientras trabajo en proyectos 
          que desafíen mis habilidades y contribuyan al bienestar de la comunidad. Estoy siempre abierto 
          a nuevas oportunidades y colaboraciones en el campo de la tecnología.
        </p>
        <div className="galery">
          <div style={{ backgroundImage: `url(${imagen12})` }}></div>
          <div style={{ backgroundImage: `url(${imagen13})` }}></div>
          <div style={{ backgroundImage: `url(${imagen14})` }}></div>
          <div style={{ backgroundImage: `url(${imagen15})` }}></div>
          <div style={{ backgroundImage: `url(${imagen16})` }}></div>
          <div style={{ backgroundImage: `url(${imagen17})` }}></div>
        </div>
      </div>
      <section id="contact" className="contact-section">
        <div className="contact-bar">
          <div className="contact-item">
            <a href="https://www.facebook.com/tu-perfil" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="contact-icon" />
              <span>FACEBOOK</span>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://twitter.com/tu-perfil" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="contact-icon" />
              <span>TWITTER</span>
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:tu-email@dominio.com">
              <FaEnvelope className="contact-icon" />
              <span>CONTACTO DIRECTO</span>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="contact-icon" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h3>Envíame un mensaje</h3>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo Electrónico" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <p>Dirección: Calle laguna Colorada 123, Potosi, Bolivia</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Horario de Atención: Lunes a Viernes, 9am - 5pm</p>
        </div>
        <div className="contact-map">
          <h3>Ubicación</h3>
          <img src="mapa.jpg" alt="Mapa de Ubicación" />
        </div>
        <p className="copyright">© 2024 José Aldana. Todos los derechos reservados.</p>
      </section>
    </div>
  );
};

export default SobreMi;
