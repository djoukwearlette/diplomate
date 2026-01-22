import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">
                            <img src="/logo/logo.png" alt="Le Diplomate" className="logo-img" />
                        </div>
                        <p className="tagline">Enseigner avec exigence, accueillir avec bienveillance</p>
                        <div className="contact-info">
                            <p><i className="fas fa-phone"></i> +237 696 13 01 06</p>
                            <p><i className="fas fa-phone"></i> +237 678 12 61 20</p>
                            <p><i className="fas fa-map-marker-alt"></i> Dibamba, Missolé II (PK 32)</p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h4>Naviguer</h4>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/admissions">Admission</Link></li>
                            <li><Link to="/galerie">Galerie</Link></li>
                            <li><Link to="/campus">Campus</Link></li>
                            <li><Link to="/actualites">Actualités</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Programmes</h4>
                        <ul>
                            <li><a href="#">Maternelle</a></li>
                            <li><a href="#">Primaire</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Suivez nous</h4>
                        <p>pour avoir nos actualités en temps réel</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>Copyright ©Le Diplomate | All Right Reserved</p>
                    <p><a href="#">Terms & Conditions / Privacy & Policy</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
