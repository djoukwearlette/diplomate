import React from 'react';
import { useParams, Link } from 'react-router-dom';

const newsData = {
    'fete-fin-annee': {
        title: "Fête de fin d'année",
        date: "29 mai 2025",
        image: "/images/actualite-01.png",
        content: `La fête de fin d'année a été un moment magique au Groupe Scolaire Bilingue Le Diplomate. Nos élèves ont brillé sur scène, témoignant de leur talent et de leur travail acharné tout au long de l'année scolaire.`
    },
    'fete-unite': {
        title: "Fête nationale de l'unité",
        date: "20 mai 2025",
        image: "/images/actualite-02.png",
        content: `Célébration vibrante de l'unité nationale à l'école. Nos élèves ont arboré fièrement les couleurs nationales et participé à des activités culturelles riches en enseignements.`
    },
    'fete-travail': {
        title: "Fête du travail",
        date: "01 mai 2025",
        image: "/images/actualite-03.png",
        content: `La fête du Travail a été l'occasion pour nous de rendre hommage à notre personnel dévoué qui œuvre chaque jour pour l'excellence éducative.`
    },
    'fete-jeunesse': {
        title: "Fête de la Jeunesse",
        date: "11 février 2025",
        image: "/images/actualite-04.png",
        content: `Une journée dédiée à la jeunesse camerounaise, célébrée avec enthousiasme par nos élèves à travers des défilés et des jeux éducatifs.`
    }
};

const NewsDetail = () => {
    const { id } = useParams();
    const article = newsData[id] || newsData['fete-fin-annee'];

    const recentNews = Object.entries(newsData)
        .filter(([key]) => key !== id)
        .slice(0, 3);

    return (
        <div className="news-detail-page">
            <section className="page-header news-header">
                <div className="container">
                    <h1>Actualités</h1>
                    <p className="breadcrumb">Accueil / Actualités / {article.title}</p>
                </div>
            </section>

            <section className="article-section">
                <div className="container">
                    <div className="article-container">
                        <main className="article-content">
                            <div className="article-featured-image">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <div className="article-meta">
                                <span><i className="far fa-calendar-alt"></i> {article.date}</span>
                                <span><i className="far fa-user"></i> Administration</span>
                            </div>
                            <h2 className="article-title">{article.title}</h2>
                            <div className="article-text">
                                <p>{article.content}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="article-footer">
                                <Link to="/actualites" className="btn-purple">Retour aux actualités</Link>
                            </div>
                        </main>

                        <aside className="article-sidebar">
                            <div className="sidebar-widget">
                                <h4>Articles Récents</h4>
                                <ul className="recent-posts">
                                    {recentNews.map(([key, item]) => (
                                        <li key={key}>
                                            <Link to={`/actualites/${key}`}>
                                                <div className="recent-news-item">
                                                    <img src={item.image} alt={item.title} />
                                                    <div>
                                                        <h5>{item.title}</h5>
                                                        <span>{item.date}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewsDetail;
