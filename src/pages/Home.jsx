import React, { useEffect, useState, useRef } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const StatsCounter = ({ target }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds animation
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Easing function (easeOutExpo)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentCount = Math.floor(easeProgress * target);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(updateCounter);
    }, [isVisible, target]);

    return (
        <span ref={elementRef} className="stat-number" data-target={target}>
            {count}
        </span>
    );
};

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            {/* Pourquoi Choisir Section */}
            <section className="why-choose">
                <div className="container">
                    <h2 className="section-title" style={{ color: 'blueviolet' }}>Pourquoi choisir Le Diplomate?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-medal"></i>
                            </div>
                            <h3>Maîtrise pédagogique</h3>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-book-open"></i>
                            </div>
                            <h3>Rigueur et organisation</h3>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-user-check"></i>
                            </div>
                            <h3>Sens des responsabilités</h3>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Travail en équipe</h3>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3>Créativité</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="statistics">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-value">
                                <StatsCounter target={100} /><span className="stat-symbol">%</span>
                            </div>
                            <p>Concours d’entrée en 6ème et Common Entrance</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">
                                <StatsCounter target={100} /><span className="stat-symbol">%</span>
                            </div>
                            <p>CEP et FSLC</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">
                                <StatsCounter target={15} />
                            </div>
                            <p>Enseignants</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">
                                <StatsCounter target={100} /><span className="stat-symbol">+</span>
                            </div>
                            <p>Elèvess</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-image">
                            <div className="image-frame yellow-frame">
                                <img src="/images/mission-images.jpg" alt="Students" />
                            </div>
                        </div>
                        <div className="mission-text">
                            <span className="section-label">À PROPOS DE NOUS</span>
                            <h2>Une vision, une mission : <span className="highlight">Éduquer, Inspirer, Épanouir</span></h2>
                            <p>Fondé en 2021 sous l'égide du ministère de l'Éducation de Base, le Groupe Scolaire International Le Diplomate se positionne comme un établissement d'excellence accueillant les enfants de 3 à 11 ans. Notre école bilingue (français-anglais) allie avec harmonie les programmes camerounais et internationaux pour former des apprenants éclairés, audacieux et résolument tournés vers le monde.</p>
                            <h3>Notre ADN pédagogique :</h3>
                            <ul className="mission-list">
                                <li><i className="fas fa-check"></i> Exigence académique</li>
                                <li><i className="fas fa-check"></i> Accompagnement personnalisé</li>
                            </ul>
                            <Link to="/apropos" className="btn-purple">En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programmes" className="programs-section">
                <div className="container">
                    <h2 className="section-title">Programmes Académiques</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-image">
                                <div className="image-frame yellow-frame-top">
                                    <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400" alt="Maternelle" />
                                </div>
                            </div>
                            <div className="program-content">
                                <span className="cycle-badge">20 élèves par classe 3 - 5 ans</span>
                                <h3>Programme de Maternelle</h3>
                                <p>Un programme d'éveil bilingue (français/anglais) par le jeu, développant autonomie, motricité et curiosité dans un environnement bienveillant.</p>
                            </div>
                        </div>
                        <div className="program-card">
                            <div className="program-image">
                                <div className="image-frame yellow-frame-top">
                                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400" alt="Primaire" />
                                </div>
                            </div>
                            <div className="program-content">
                                <span className="cycle-badge">20 élèves par classe A partir de 6ans</span>
                                <h3>Programme du Primaire</h3>
                                <p>Cursus bilingue complet combinant programmes camerounais et internationaux, axé sur les fondamentaux académiques et le développement de l'esprit critique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Process Section */}
            <section className="admission-section">
                <div className="admission-bg"></div>
                <div className="container">
                    <h2 className="section-title light">Processus d'Admission</h2>
                    <div className="admission-steps">
                        <div className="step-card">
                            <div className="step-icon">
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h3>Demande en ligne</h3>
                            <p>Remplissez le formulaire</p>
                        </div>
                        <div className="step-connector">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">
                                <i className="fas fa-folder-open"></i>
                            </div>
                            <h3>Transmission du dossier complet</h3>
                            <p>Documents requis</p>
                        </div>
                        <div className="step-connector">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="step-card">
                            <div className="step-icon">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <h3>Confirmation</h3>
                            <p>Inscription validée</p>
                        </div>
                    </div>
                    <div className="admission-cta">
                        <p><i className="fas fa-star"></i> Faites le premier pas vers l'excellence éducative</p>
                    </div>
                </div>
            </section>

            {/* Campus Preview Section */}
            <section className="campus-preview">
                <div className="container">
                    <div className="campus-content">
                        <div className="campus-image">
                            <div className="image-frame purple-frame-left">
                                <img src="/images/campus.jpg" alt="Campus" />
                            </div>
                        </div>
                        <div className="campus-text">
                            <h2 style={{ color: 'blueviolet' }}>Découvrez notre campus lors d'une visite</h2>
                            <p>VSitué à Dibamba, notre campus offre un cadre calme et adapté, propice à l’apprentissage et à l’épanouissement des enfants.</p>
                            <Link to="/campus" className="btn-yellow">Voir plus</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="news-section">
                <div className="container">
                    <span className="section-label center">RESTEZ INFORMÉS</span>
                    <h2 className="section-title">Actualités & Événements</h2>
                    <div className="news-grid">
                        <div className="news-card">
                            <div className="news-image">
                                <div className="image-frame yellow-frame-top small">
                                    <img src="/images/actualite-01.png" alt="Fête" />
                                </div>
                            </div>
                            <div className="news-content">
                                <h3>Fête de fin d'année</h3>
                                <p style={{ fontSize: '12px' }}>Notre fête a illuminé l'école. Bravo aux élèves pour leurs talents et merci aux familles pour votre présence chaleureuse.</p>
                                <div className="news-meta">
                                    <span><i className="far fa-clock"></i>29 mai 2025</span>
                                </div>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-image">
                                <div className="image-frame yellow-frame-top small">
                                    <img src="/images/actualite-02.png" alt="Sport" />
                                </div>
                            </div>
                            <div className="news-content">
                                <h3>Fête nationale de l’unité</h3>
                                <p style={{ fontSize: '12px' }}>La Fête nationale de l'unité a rassemblé l'école dans la joie et la fierté. Un bel hommage à notre pays, porté par tous nos élèves.</p>
                                <div className="news-meta">
                                    <span><i className="far fa-clock"></i>20 mai 2025</span>
                                </div>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-image">
                                <div className="image-frame yellow-frame-top small">
                                    <img src="/images/actualite-03.png" alt="Portes ouvertes" />
                                </div>
                            </div>
                            <div className="news-content">
                                <h3>Fête du travail</h3>
                                <p style={{ fontSize: '12px' }}>La fête du Travail a honoré le dévouement de nos enseignants. Merci pour leur engagement quotidien exceptionnel.</p>
                                <div className="news-meta">
                                    <span><i className="far fa-clock"></i> 01 mai 2025 </span>
                                </div>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-image">
                                <div className="image-frame yellow-frame-top small">
                                    <img src="/images/actualite-04.png" alt="Jeunesse" />
                                </div>
                            </div>
                            <div className="news-content">
                                <h3>Fête de la Jeunesse</h3>
                                <p style={{ fontSize: '12px' }}>La Fête de la Jeunesse a brillé grâce à l'énergie et aux talents de nos élèves. Une belle journée de fierté partagée.</p>
                                <div className="news-meta">
                                    <span><i className="far fa-clock"></i> 11 février 2025 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
