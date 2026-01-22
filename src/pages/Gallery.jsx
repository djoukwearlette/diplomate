import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Gallery = () => {
    const [searchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        const filter = searchParams.get('filter');
        if (filter) {
            setActiveFilter(filter);
        }
    }, [searchParams]);

    const galleryItems = [
        { category: 'campus', src: '/images/salle-de-classe.png', alt: 'Salle de classe' },
        { category: 'campus', src: '/images/bibliotheque.png', alt: 'Bibliothèque' },
        { category: 'campus', src: '/images/piscine.png', alt: 'Piscine' },
        { category: 'campus', src: '/images/terrain-football.png', alt: 'Terrain de football' },
        { category: 'campus', src: '/images/aires-de-jeu.png', alt: 'Aires de jeu' },
        { category: 'campus', src: '/images/salle-informatique.png', alt: 'Salle informatique' },
        { category: 'events', src: '/images/actualite-01.png', alt: 'Fête de fin d\'année' },
        { category: 'events', src: '/images/actualite-02.png', alt: 'Fête de l\'unité' },
        { category: 'events', src: '/images/actualite-03.png', alt: 'Fête du travail' },
        { category: 'events', src: '/images/actualite-04.png', alt: 'Fête de la Jeunesse' },
        { category: 'life', src: '/images/service-transport.png', alt: 'Transport scolaire' },
        { category: 'life', src: '/images/mot-presidence.png', alt: 'Vie scolaire' },
        { category: 'life', src: '/images/sanitaire.png', alt: 'Installations' },
    ];

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <div className="gallery-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-bg">
                    <img src="/images/image-principale-campus.png" alt="Galerie Photos" />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <h1>Notre Galerie</h1>
                    <p className="breadcrumb"><Link to="/">Accueil</Link> / Galerie</p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="container">
                    <div className="gallery-filters">
                        <button
                            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >Tous</button>
                        <button
                            className={`filter-btn ${activeFilter === 'campus' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('campus')}
                        >Campus</button>
                        <button
                            className={`filter-btn ${activeFilter === 'events' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('events')}
                        >Événements</button>
                        <button
                            className={`filter-btn ${activeFilter === 'life' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('life')}
                        >Vie Scolaire</button>
                    </div>

                    <div className="gallery-grid">
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                className={`gallery-item ${item.category}`}
                                onClick={() => setLightboxImage(item.src)}
                            >
                                <img src={item.src} alt={item.alt} />
                                <div className="gallery-overlay"><i className="fas fa-search-plus"></i></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImage && (
                <div className="lightbox active" onClick={() => setLightboxImage(null)}>
                    <span className="lightbox-close" onClick={() => setLightboxImage(null)}>&times;</span>
                    <img src={lightboxImage} alt="Lightbox Content" className="lightbox-content" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default Gallery;
