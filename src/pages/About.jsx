import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-bg">
                    <img src="/images/image-principale-apropos.jpg" alt="Campus" />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <h1>À propos de nous</h1>
                    <p className="breadcrumb"><Link to="/">Accueil</Link> / À propos</p>
                </div>
            </section>

            {/* Director Section */}
            <section className="about-director">
                <div className="container">
                    <div className="director-content">
                        <div className="director-text">
                            <h2>Le mot de la Directrice</h2>
                            <p className="quote">"Bienvenue au Groupe Scolaire Bilingue LE DIPLOMATE.

                                Autorisé en mai 2024, notre ambition est de devenir un établissement de référence en Sanaga Maritime.

                                Nous offrons un environnement d'apprentissage sûr et stimulant, alliant excellence académique et riche programme parascolaire pour l'épanouissement de chaque élève.

                                Notre campus moderne est conçu pour répondre à cette ambition.

                                Je vous invite à nous rencontrer et à découvrir notre école pour envisager ensemble le parcours éducatif de votre enfant"</p>
                            <p className="signature">Marie Pascal Dongmo Épouse TIEFAN</p>
                        </div>
                        <div className="director-image">
                            <img src="/images/mot-presidence.png" alt="Mme TIEFANG - Directrice" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="video-section">
                <div className="container">
                    <h2 className="section-title">Découvrir Le Diplomate en Vidéo</h2>
                    <div className="video-container">
                        {/* Local video */}
                        <video width="100%" controls>
                            <source src="/images/video-apropos.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    {/* Notre Vision */}
                    <div className="value-card yellow">
                        <div className="value-text">
                            <h3>Notre Vision</h3>
                            <p>Être parmi les 3 meilleurs Établissements d'enseignement maternel et primaire du Département de la Sanaga Maritime, reconnu pour son environnement éducatif sûr, épanouissant et stimulant.</p>
                        </div>
                        <div className="value-icon">
                            <i className="fas fa-eye"></i>
                        </div>
                    </div>

                    {/* Notre Mission */}
                    <div className="value-card purple">
                        <div className="value-text">
                            <h3>Notre Mission</h3>
                            <p>Offrir une éducation de qualité dans les systèmes anglophone et francophone qui associe l'excellence académique pour développer le potentiel des enfants, avec les activités périscolaires pour leur plein épanouissement.</p>
                        </div>
                        <div className="value-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                    </div>

                    {/* Nos Valeurs */}
                    <div className="value-card purple-dark reverse">
                        <div className="value-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="value-text">
                            <h3>Nos Valeurs</h3>
                            <ul className="values-list">
                                <li><strong>- DISCIPLINE :</strong> Le cadre de conduite commune pour faire comprendre et respecter les consignes de travail et les règles de vie collective pour la communauté éducative et les élèves.</li>
                                <li><strong>- EXCELLENCE :</strong> Nous offrons un environnement et un enseignement de haute qualité, favorisant le développement optimal de chaque élève, dans une optique de réussite globale.</li>
                                <li><strong>- RESPECT :</strong> Le respect est essentiel pour créer un environnement d'apprentissage positif et sécurisant pour tous. Il favorise la collaboration, la communication saine, et la prévention de la violence et du harcèlement.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="testimonials-title">Ce que disent <span>les parents</span>...</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="quote">"Arrivés du Gabon sans savoir lire ni écrire, mes deux enfants ont progressé de façon remarquable à l'École le Diplomate. Aujourd'hui, ils lisent, écrivent et s'expriment avec aisance. Une belle réussite !"</p>
                            <p className="author">Mme Oumala Ndoulé</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="quote">"Ma fille, timide à son arrivée en maternelle, est devenue joyeuse et s'exprime bien en français et en anglais. Je suis impressionnée par son progrès."</p>
                            <p className="author">Mme Ngenkam </p>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="quote">"This school is the best. My three-year-old, who didn't speak, can now count. We are overjoyed. Thank you to the teachers."</p>
                            <p className="author">Mme Amwe Thorne Nicoline</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
