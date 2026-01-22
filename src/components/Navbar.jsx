import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect to handle scroll state on route change
    useEffect(() => {
        // Some pages might always want the 'scrolled' class if they don't have a hero slider
        // But the legacy CSS handles this via the .header.scrolled class.
        // If the current page is not home, we might need a specific class or behavior
        // In legacy, many pages had 'header scrolled' hardcoded.
        if (location.pathname !== '/') {
            setIsScrolled(true);
        } else {
            setIsScrolled(window.scrollY > 50);
        }
    }, [location]);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'À propos', path: '/apropos' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Campus', path: '/campus' },
        { name: 'Actualités', path: '/actualites' },
        { name: 'Contacts', path: '/contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src="/logo/logo.png" alt="Le Diplomate" className="logo-img logo-white" />
                            <img src="/logo/logo-en-couleur.png" alt="Le Diplomate" className="logo-img logo-color" />
                        </Link>
                    </div>

                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ''}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link to="/admissions" className="btn-yellow">S'inscrire maintenant</Link>

                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
