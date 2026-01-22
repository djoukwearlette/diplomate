import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className="actualites-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-bg">
                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600" alt="Students celebrating" />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <h1>Actualités</h1>
                    <p className="breadcrumb"><Link to="/">Accueil</Link> / Actualités</p>
                </div>
            </section>

            {/* Actualités Section */}
            <section className="actualites-section">
                <div className="container">
                    <div className="actualites-grid">
                        <div className="actualite-card">
                            <div className="actualite-image video-card-image">
                                <div className="actualite-frame">
                                    <img src="/images/actualite-01.png" alt="Fête de fin d'année - Vidéo" />
                                </div>
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                                <span className="video-label">Vidéo</span>
                            </div>
                            <div className="actualite-content">
                                <h3>Reportage : Fête de fin d'année</h3>
                                <div className="actualite-meta">
                                    <span><i className="far fa-clock"></i> 2 Hours Ago</span>
                                    <span>Le Diplomate TV</span>
                                </div>
                                <Link to="/actualites/fete-fin-annee" className="btn-yellow">Voir plus</Link>
                            </div>
                        </div>

                        <div className="actualite-card">
                            <div className="actualite-image">
                                <div className="actualite-frame">
                                    <img src="/images/actualite-02.png" alt="Fête nationale de l'unité" />
                                </div>
                            </div>
                            <div className="actualite-content">
                                <h3>Fête nationale de l'unité</h3>
                                <div className="actualite-meta">
                                    <span><i className="far fa-clock"></i> 1 Hour Ago</span>
                                    <span>CNN Indonesia</span>
                                </div>
                                <Link to="/actualites/fete-unite" className="btn-yellow">Voir plus</Link>
                            </div>
                        </div>

                        <div className="actualite-card">
                            <div className="actualite-image video-card-image">
                                <div className="actualite-frame">
                                    <img src="/images/actualite-03.png" alt="Fête du travail - Vidéo" />
                                </div>
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                                <span className="video-label">Vidéo</span>
                            </div>
                            <div className="actualite-content">
                                <h3>Événement : Fête du travail</h3>
                                <div className="actualite-meta">
                                    <span><i className="far fa-clock"></i> 5 Hours Ago</span>
                                    <span>Le Diplomate TV</span>
                                </div>
                                <Link to="/actualites/fete-travail" className="btn-yellow">Voir plus</Link>
                            </div>
                        </div>

                        <div className="actualite-card">
                            <div className="actualite-image">
                                <div className="actualite-frame">
                                    <img src="/images/actualite-04.png" alt="Fête de la Jeunesse" />
                                </div>
                            </div>
                            <div className="actualite-content">
                                <h3>Fête de la Jeunesse</h3>
                                <div className="actualite-meta">
                                    <span><i className="far fa-clock"></i> 1 Hour Ago</span>
                                    <span>CNN Indonesia</span>
                                </div>
                                <Link to="/actualites/fete-jeunesse" className="btn-yellow">Voir plus</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
