import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-bg">
                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600" alt="Students" />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <h1>Contact</h1>
                    <p className="breadcrumb"><Link to="/">Accueil</Link> / Contact</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Contactez <span>Nous</span></h2>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="text" placeholder="NOM" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="EMAIL" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message *"></textarea>
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                        </div>

                        {/* Map and Contact Info */}
                        <div className="contact-map-wrapper">
                            <h3>Trouvez nous ici</h3>
                            <div className="map-placeholder">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.194829493378!2d10.0531!3d3.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDgnMDAuMCJOIDEwwrAwMycxMS4yIkU!5e0!3m2!1sfr!2scm!4v1600000000000!5m2!1sfr!2scm"
                                    width="100%" height="100%" style={{ border: 0, borderRadius: '12px' }} allowFullScreen=""
                                    loading="lazy"
                                >
                                </iframe>
                            </div>
                            <div className="contact-details">
                                <p><i className="fas fa-map-marker-alt"></i> PK32 Le Dibamba</p>
                                <p><i className="fas fa-phone"></i> +237 696 13 01 06</p>
                                <p><i className="fas fa-envelope"></i> info@le.diplomate.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
