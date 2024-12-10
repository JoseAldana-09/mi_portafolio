import React, { useState } from 'react';
import '../styles/ProjectMedico.css'; // Importa el archivo CSS
import cita1 from '../images/cita1.jpg';
import cita2 from '../images/cita2.jpg';
import cita3 from '../images/cita3.jpg';
import cita4 from '../images/cita4.jpg';
import cita5 from '../images/cita5.jpg';
import cita6 from '../images/cita6.jpg';
import cita7 from '../images/cita7.jpg';
import cita8 from '../images/cita8.jpg';
import cita9 from '../images/cita9.jpg';
import cita10 from '../images/cita10.jpg';
import cita11 from '../images/cita11.jpg';
import cita12 from '../images/cita12.jpg';
import cita13 from '../images/cita13.jpg';
import cita14 from '../images/cita14.jpg';
import cita15 from '../images/cita15.jpg';
import cita16 from '../images/cita16.jpg';
import cita17 from '../images/cita17.jpg';

const ProjectMedico = () => {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const images = [
        { src: cita1, desc: "Pantalla de registro de usuarios." },
        { src: cita2, desc: "Formulario de registro de nuevos usuarios." },
        { src: cita3, desc: "Proceso de verificación de cuenta." },
        { src: cita4, desc: "Confirmación de registro exitoso." },
        { src: cita5, desc: "Vista general de citas para los clientes." },
        { src: cita6, desc: "Lista de citas programadas." },
        { src: cita7, desc: "Interfaz para reservar una cita." },
        { src: cita8, desc: "Pantalla de inicio del cliente." },
        { src: cita9, desc: "Pantalla para ver reservaciones realizadas." },
        { src: cita10, desc: "Pantalla de disponibilidad de horarios del médico." },
        { src: cita11, desc: "Pantalla de gestión de administradores." },
        { src: cita12, desc: "Vista para eliminar médicos." },
        { src: cita13, desc: "Pantalla de actualización de información médica." },
        { src: cita14, desc: "Agregar nuevo médico al sistema." },
        { src: cita15, desc: "Descripción para la imagen 15." },
        { src: cita16, desc: "Pantalla de inicio para el médico." },
        { src: cita17, desc: "Agregar una nueva fecha de reserva." },
    ];

    return (
        <div className="project-page project-background">
            <div className="project-container">
                <div className="project-intro">
                    <h1>Sistematización de Citas Médicas</h1>
                    <p>Este proyecto consiste en el desarrollo de una aplicación móvil en Flutter para gestionar citas médicas. El sistema permite a los pacientes programar, modificar y cancelar citas fácilmente, mientras los médicos pueden organizar su agenda de manera eficiente.</p>
                    <a href="https://github.com/JoseAldana-09/reservar_cita_medicos.git" className="cta-button" target="_blank" rel="noopener noreferrer">Descargar App</a> {/* Botón de CTA */}
                </div>
                <div className="project-images">
                    {images.map((image, index) => (
                        <div key={index} onClick={() => openModal(image.src)}>
                            <img src={image.src} alt={image.desc} />
                            <div className="descripcion">{image.desc}</div>
                        </div>
                    ))}
                </div>
                {modalImage && (
                    <div className="modal" onClick={closeModal}>
                        <span className="close">&times;</span>
                        <img className="modal-content" src={modalImage} alt="" />
                    </div>
                )}
                <div className="testimonials">
                    <h2>Testimonios</h2>
                    <p>"Esta aplicación ha mejorado mi gestión de citas médicas significativamente. ¡Altamente recomendada!" - Dr. Juan Pérez</p>
                    <p>"Muy fácil de usar y eficiente. Nunca había tenido una experiencia tan fluida con una app médica." - María Gómez</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectMedico;
