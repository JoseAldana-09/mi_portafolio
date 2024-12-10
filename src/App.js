import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/App.css';
import './styles/responsive.css'; 
import perfil from './images/foto.jpg'; 
import frontend from './images/frontend.jpg';
import backend from './images/backend.jpg';
import basedatos from './images/BaseDatos.jpg';
import ai from './images/ia.jpg';  
import linux from './images/linux.jpg'; 
import medico from './images/medico.jpg'; 
import boliviaFlag from './images/bolivia.png'; 
import usaFlag from './images/usa.png'; 
import brazilFlag from './images/brazil.png'; 
import italyFlag from './images/italy.png'; 
import chileFlag from './images/chile.png'; 
import { FaFacebook, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import SobreMi from './components/SobreMi';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import BaseDatos from './components/BaseDatos';
import ProjectAI from './components/ProjectAI'; 
import ProjectLinux from './components/ProjectLinux'; 
import ProjectMedico from './components/ProjectMedico';

const skills = ["Python", "Java", "C++", "JavaScript", "Elixir", "Flutter", "PHP", "C#", "HTML", "CSS", "React", "Angular"];

function App() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill(prevSkill => (prevSkill + 1) % skills.length);
    }, 2000); // Cambia cada 2 segundos
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className="background-filter"></div>
            <header className="App-header">
              <nav className="navbar">
                <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
                <ul className={`nav-links ${menuOpen ? 'nav-links-active' : ''}`}>
                  <li><Link smooth to="/#home">INICIO</Link></li>
                  <li><Link smooth to="/#skills">HABILIDADES</Link></li>
                  <li><Link smooth to="/#projects">PROYECTOS</Link></li>
                  <li><Link smooth to="/#languages">IDIOMAS</Link></li> 
                  <li><Link smooth to="/#contact">CONTACTOS</Link></li>
                </ul>
              </nav>
            </header>
            <section className="introduction" id="home">
              <div className="intro-content">
                <img src={perfil} alt="Perfil" className="perfil-img" />
                <div className="intro-text">
                  <h1 className="static-text">Soy Jose Aldana</h1>
                  <p className="dynamic-text">TENGO CONOCIMIENTOS EN {skills[currentSkill]}</p>
                  <p>Desarrollador de software y entusiasta de la programación, con un enfoque en soluciones eficientes y proyectos innovadores. Me apasiona el desarrollo web y la creación de aplicaciones funcionales y atractivas.</p>
                  <button className="contact-button"><Link to="/about">Más sobre mí</Link></button>
                </div>
              </div>
            </section>
            
            <section id="skills" className="skills-section">
              <h1>HABILIDADES</h1>
              <div className="skills-content">
                <div className="skill-card">
                  <Link to="/frontend">
                    <div className="skill-background" style={{ backgroundImage: `url(${frontend})` }}></div>
                    <h3 className="skill-title">FRONT-END</h3>
                  </Link>
                </div>
                <div className="skill-card">
                  <Link to="/backend">
                    <div className="skill-background" style={{ backgroundImage: `url(${backend})` }}></div>
                    <h3 className="skill-title">BACK-END</h3>
                  </Link>
                </div>
                <div className="skill-card">
                  <Link to="/basedatos">
                    <div className="skill-background" style={{ backgroundImage: `url(${basedatos})` }}></div>
                    <h3 className="skill-title">BASE DE DATOS</h3>
                  </Link>
                </div>
              </div>
            </section>
            <section id="projects" className="projects-section">
            <h1>PROYECTOS</h1>
              <div className="projects-content">
                
                <div className="project-card">
                  <img src={ai} alt="Inteligencia Artificial" className="project-img" />
                  <h3 className="project-title">Desarrollo de herramientas y aplicaciones para IA</h3>
                  <p className="project-description">Proyecto enfocado en la creación de herramientas y aplicaciones inteligentes.</p>
                  <button className="project-button"><Link to="/projectAI">LEER</Link></button>
                </div>
                <div className="project-card">
                  <img src={medico} alt="Citas Medicas" className="project-img" />
                  <h3 className="project-title">Sistematización de citas médicas</h3>
                  <p className="project-description">Proyecto enfocado en la atención médica para una comodidad entre el cliente y doctor</p>
                  <button className="project-button"><Link to="/projectMedico">LEER</Link></button>
                </div>
                <div className="project-card">
                  <img src={linux} alt="Linux" className="project-img" />
                  <h3 className="project-title">Creación de un nuevo sistema operativo basado en Linux</h3>
                  <p className="project-description">Proyecto dedicado al desarrollo de un sistema operativo robusto y eficiente.</p>
                  <button className="project-button"><Link to="/projectLinux">LEER</Link></button>
                </div>
              </div>
            </section>
            <section id="languages" className="languages-section languages-background">
              <div className="idiomas-container">
                <h1>Idiomas</h1>
                {[
                  { name: 'Español', flag: boliviaFlag, level: '100%' },
                  { name: 'Quechua', flag: boliviaFlag, level: '60%' },
                  { name: 'Inglés Americano', flag: usaFlag, level: '50%' },
                  { name: 'Portugués', flag: brazilFlag, level: '40%' },
                  { name: 'Italiano', flag: italyFlag, level: '35%' },
                  { name: 'Chileno', flag: chileFlag, level: '10%' },
                ].map((language, index) => (
                  <div key={index} className="idioma-bar idioma-card">
                    <img src={language.flag} alt={language.name} className="idioma-flag" />
                    <span className="idioma-name">{language.name}</span>
                    <div className="idioma-level" style={{ width: language.level }}>{language.level}</div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="contact-section">
              <div className="contact-bar">
                <div className="contact-item">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="contact-icon" />
                    <span>FACEBOOK</span>
                  </a>
                </div>
                <div className="contact-item">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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
              <div className="contact-map">
                <h3>Ubicación</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25288.25690297134!2d-65.77374205049172!3d-19.57927845850179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f94e7684a6bd81%3A0xf43fb87c62d9cb18!2sAutonomous%20University%20Tomas%20Frias%20(Potosi)!5e0!3m2!1sen!2sus!4v1733624371874!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Ubicación"
                ></iframe>
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
              <p className="copyright">© 2024 José Aldana. Todos los derechos reservados.</p>
            </section>
          </div>
        } />
        <Route path="/about" element={<SobreMi />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/basedatos" element={<BaseDatos />} />
        <Route path="/projectAI" element={<ProjectAI />} />
        <Route path="/projectLinux" element={<ProjectLinux />} />
        <Route path="/projectMedico" element={<ProjectMedico />} />
      </Routes>
    </Router>
  );
}

export default App;
