import React from 'react';
import { Link } from 'react-router-dom';

const Campus = () => {
    return (
        <div className="campus-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-bg">
                    <img src="/images/image-principale-campus.png" alt="Campus" />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <h1>Notre Campus</h1>
                    <p className="breadcrumb"><Link to="/">Accueil</Link> / Campus</p>
                </div>
            </section>

            {/* Campus Section */}
            <section className="campus-section">
                <div className="container">
                    {/* Les Salles De Classe */}
                    <div className="campus-item">
                        <div className="campus-item-image">
                            <div className="campus-frame left">
                                <img src="/images/salle-de-classe.png" alt="Salles de classe" />
                            </div>
                        </div>
                        <div className="campus-item-text">
                            <h3>Les Salles De Classe</h3>
                            <p>Spacieuses, lumineuses et équipées d’outils pédagogiques modernes, nos salles de classe offrent un cadre propice à l’apprentissage et à l’épanouissement. Pensées pour le confort, la sécurité et la concentration, elles encouragent la participation active des élèves et s’adaptent aux méthodes éducatives les plus actuelles. </p>
                            <Link to="/galerie?filter=campus" className="btn-purple">Voir plus</Link>
                        </div>
                    </div>

                    {/* La Piscine */}
                    <div className="campus-item reverse">
                        <div className="campus-item-image">
                            <div className="campus-frame right">
                                <img src="/images/piscine.png" alt="La Piscine" />
                            </div>
                        </div>
                        <div className="campus-item-text">
                            <h3>La Piscine</h3>
                            <p>offre un espace ludique et sécurisé où les enfants découvrent les joies de l’eau. Parfaitement adaptée aux plus jeunes, elle favorise la détente, le développement moteur et la confiance en soi dans un cadre encadré, propre et amusant, idéal pour l’éveil aquatique. </p>
                            <Link to="/galerie?filter=campus" className="btn-purple">Voir plus</Link>
                        </div>
                    </div>

                    {/* Aires De Jeu */}
                    <div className="campus-item">
                        <div className="campus-item-image">
                            <div className="campus-frame left">
                                <img src="/images/aires-de-jeu.png" alt="Aires de jeu" />
                            </div>
                        </div>
                        <div className="campus-item-text">
                            <h3>Aires De Jeu</h3>
                            <p>Les aires de jeu de l’école primaire Le Diplomate,  offrent un espace sécurisé où les enfants s’amusent, explorent et socialisent. Conçues pour favoriser l’éveil, la motricité et le plaisir, elles permettent aux élèves de se détendre tout en développant leur créativité et leur coordination. </p>
                            <Link to="/galerie?filter=campus" className="btn-purple">Voir plus</Link>
                        </div>
                    </div>

                    {/* Le Terrain De Football */}
                    <div className="campus-item reverse">
                        <div className="campus-item-image">
                            <div className="campus-frame right">
                                <img src="/images/terrain-football.png" alt="Terrain de football" />
                            </div>
                        </div>
                        <div className="campus-item-text">
                            <h3>Le Terrain De Football</h3>
                            <p>est un espace dynamique où les élèves développent esprit d’équipe, discipline et fair-play. Sécurisé et bien entretenu, il offre un cadre idéal pour le sport, la détente et l’épanouissement des enfants à travers des activités physiques stimulantes et formatrices. </p>
                            <Link to="/galerie?filter=campus" className="btn-purple">Voir plus</Link>
                        </div>
                    </div>

                    {/* La Bibliothèque */}
                    <div className="campus-item">
                        <div className="campus-item-image">
                            <div className="campus-frame left">
                                <img src="/images/bibliotheque.png" alt="Bibliothèque" />
                            </div>
                        </div>
                        <div className="campus-item-text">
                            <h3>La Bibliothèque</h3>
                            <p>est un espace calme et inspirant, conçu pour éveiller l’amour de la lecture dès le plus jeune âge. Riche en ouvrages adaptés, elle stimule la curiosité, l’imagination et la recherche, tout un cadre propice à la concentration et à l’apprentissage autonome. </p>
                            <Link to="/galerie?filter=campus" className="btn-purple">Voir plus</Link>
                        </div>
                    </div>

                    {/* La Salle Informatique */}
                    <div className="campus-item reverse">
                        <div className="campus-item-image">
                            <div className="campus-frame right">
                                <img src="/images/salle-informatique.png" alt="Salle informatique" />
                            </div>
                        </div>
                        <div className="campus-item-text">
                            <h3>La Salle Informatique</h3>
                            <p>Le Diplomate initie les élèves au numérique dans un cadre moderne, sécurisé et stimulant. Équipée d’ordinateurs performants et de logiciels éducatifs, elle développe la maîtrise des outils technologiques, favorise l’autonomie et prépare vos petits explorateurs  aux défis du monde digital avec enthousiasme et rigueur. </p>
                            <Link to="/galerie?filter=campus" className="btn-purple">Voir plus</Link>
                        </div>
                    </div>

                    {/* Les Sanitaires */}
                    <div className="campus-item">
                        <div className="campus-item-image">
                            <div className="campus-frame left">
                                <img src="/images/sanitaire.png" alt="Sanitaires" />
                            </div>
                        </div>
                        <div className="campus-item-text">
                            <h3>Les Sanitaires</h3>
                            <p>Nos sanitaires, spécialement conçus pour les enfants, offrent un environnement hygiénique, sécurisé et confortable pour leur épanouissement au quotidien.</p>
                            <Link to="/galerie?filter=campus" className="btn-purple">Voir plus</Link>
                        </div>
                    </div>

                    {/* Le Service De Transport */}
                    <div className="campus-item reverse">
                        <div className="campus-item-image">
                            <div className="campus-frame right">
                                <img src="/images/service-transport.png" alt="Transport scolaire" />
                            </div>
                        </div>
                        <div className="campus-item-text">
                            <h3>Le Service De Transport</h3>
                            <p>Le Diplomate assure le transport de vos enfants avec une priorité absolue : leur sécurité et leur sérénité. Notre véhicule dédié, confortable et régulièrement entretenu, est conduits par des chauffeurs expérimentés et bienveillants. Chaque trajet, ponctuel et encadré, devient un prolongement tranquille de la journée d'école, offrant aux familles une tranquillité d'esprit précieuse.</p>
                            <Link to="/galerie?filter=campus" className="btn-purple">Voir plus</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Campus;
