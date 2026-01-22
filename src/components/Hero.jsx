import React, { useState, useEffect, useCallback } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            image: "/images/slide-1.jpg",
            title: "Enseigner avec exigence, accueillir avec bienveillance",
            desc: "Bienvenue au Groupe Scolaire Bilingue Le Diplomate, où rigueur académique et bienveillance éducative s’allient pour former les leaders de demain.",
            ctaText: "Découvrir nos programmes",
            ctaLink: "#programmes"
        },
        {
            image: "/images/slide-2.jpg",
            title: "Éveil et épanouissement dès le plus jeune âge",
            desc: "Un environnement ludique et sécurisé pour stimuler la curiosité, la créativité et les premiers apprentissages de votre enfant.",
            ctaText: "En savoir plus",
            ctaLink: "/apropos"
        },
        {
            image: "/images/slide-3.jpg",
            title: "Une base solide pour un avenir brillant",
            desc: "Un programme enrichi combinant le curriculum camerounais et international, dispensé par des enseignants passionnés et qualifiés.",
            ctaText: "Inscrivez votre enfant",
            ctaLink: "/admissions"
        }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <section className="hero-slider" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        <div className="slide-bg">
                            <img src={slide.image} alt={slide.title} />
                        </div>
                        <div className="slide-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.desc}</p>
                            <a href={slide.ctaLink} className="btn-yellow">{slide.ctaText}</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="slider-nav">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            <button className="slider-arrow prev" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
            <button className="slider-arrow next" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>

            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
