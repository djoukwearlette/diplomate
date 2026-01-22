import React from 'react';
import { Link } from 'react-router-dom';

const Admissions = () => {
    return (
        <div className="admissions-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-bg">
                    <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600" alt="Classroom" />
                </div>
                <div className="page-header-overlay"></div>
                <div className="page-header-content">
                    <h1>Admissions</h1>
                    <p className="breadcrumb"><Link to="/">Accueil</Link> / Admissions</p>
                </div>
            </section>

            {/* Fees Section */}
            <section className="fees-section">
                <div className="container">
                    <h2 className="fees-title">Frais d'inscription et de <span>Scolarité</span></h2>

                    <div className="table-responsive">
                        <table className="fees-table">
                            <thead>
                                <tr>
                                    <th>Classes</th>
                                    <th>Inscription</th>
                                    <th>Premiere tranche à l’inscription au plus tard le 31 aout 2025</th>
                                    <th>Deuxieme tranche payable au plus tard le 09 octobre 2025</th>
                                    <th>Troisième tranche payable au plus tard le 20 novembre 2025</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="section-name">Section maternelle</td>
                                    <td className="highlight-cell">
                                        <strong>20.000 FCFA</strong><br />
                                        <small>+ 1 rame de papier A4 (80g) et 1 boîte de craie exigibles</small>
                                    </td>
                                    <td><strong>50.000 FCFA</strong></td>
                                    <td>30.000 FCFA</td>
                                    <td>20.00 FCFA</td>
                                    <td><strong>120.000 FCFA</strong></td>
                                </tr>
                                <tr>
                                    <td className="section-name">SIL - CM2</td>
                                    <td className="highlight-cell">
                                        <strong>20.000 FCFA</strong><br />
                                        <small>+ 1 rame de papier A4 (80g) et 1 boîte de craie exigibles</small>
                                    </td>
                                    <td><strong>50.000 FCFA</strong></td>
                                    <td>25.000 FCFA</td>
                                    <td>15.000 FCFA</td>
                                    <td><strong>110.000 FCFA</strong></td>
                                </tr>
                                <tr>
                                    <td className="section-name">Prise en charge section Maternelle de 13h à 16h</td>
                                    <td className="highlight-cell"><strong>20.000 FCFA</strong> <br /> Gouters, repas quotidiens sont à la charge des parents</td>
                                    <td><strong>20.000 FCFA</strong></td>
                                    <td>20.000 FCFA</td>
                                    <td>10.000 FCFA</td>
                                    <td><strong>60.000 FCFA</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Admission Form Section */}
            <section className="admission-form-section">
                <div className="container">
                    <h2 className="form-title">Formulaire <span>d'admission</span></h2>
                    <p className="form-subtitle">Remplissez le formulaire ci-dessous pour initier la procédure d'admission de votre enfant au sein de notre établissement.</p>

                    <form className="admission-form">
                        {/* Informations sur l'enfant */}
                        <div className="form-section">
                            <h3 className="form-section-title">Information sur L’enfant</h3>
                            <div className="form-row two-col">
                                <div className="form-group">
                                    <label>Selectionné le cycle souhaité</label>
                                    <select defaultValue="Maternelle">
                                        <option>Maternelle</option>
                                        <option>Primaire</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Numero d’Inscription</label>
                                    <input type="text" placeholder="123456" />
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Noms</label>
                                    <input type="text" placeholder="Nagendra" />
                                </div>
                                <div className="form-group">
                                    <label>Prénoms</label>
                                    <input type="text" placeholder="Yadav" />
                                </div>
                                <div className="form-group">
                                    <label>Photo de l’élève</label>
                                    <div className="upload-capsule">
                                        <input type="file" id="photo-eleve" hidden />
                                        <label htmlFor="photo-eleve">Upload PDF/Doc</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Sexe</label>
                                    <select defaultValue="Masculin">
                                        <option>Masculin</option>
                                        <option>Féminin</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Date de naissance</label>
                                    <input type="text" placeholder="JJ/MM/AAAA" />
                                </div>
                                <div className="form-group">
                                    <label>Classe souhaitée</label>
                                    <select defaultValue="SIL">
                                        <option>SIL</option>
                                        <option>CP</option>
                                        <option>CE1</option>
                                        <option>CE2</option>
                                        <option>CM1</option>
                                        <option>CM2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Informations du parent principal */}
                        <div className="form-section">
                            <h3 className="form-section-title">Information du parent principal</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Relation avec l’élève</label>
                                    <select defaultValue="Father">
                                        <option>Father</option>
                                        <option>Mother</option>
                                        <option>Guardian</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Noms</label>
                                    <input type="text" placeholder="Ashok" />
                                </div>
                                <div className="form-group">
                                    <label>Prénoms</label>
                                    <input type="text" placeholder="Babu" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Adresse mail</label>
                                    <input type="email" placeholder="Example@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label>Numero de téléphone</label>
                                    <input type="text" placeholder="+91 123 456 7890" />
                                </div>
                                <div className="form-group">
                                    <label>Profession</label>
                                    <input type="text" placeholder="B.Tech" />
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Adresse du parent</label>
                                <textarea placeholder="Please type your address here..."></textarea>
                            </div>
                        </div>

                        {/* Pièces à fournir */}
                        <div className="form-section">
                            <h3 className="form-section-title">Piece à fournir</h3>
                            <div className="upload-grid-row">
                                <div className="form-group">
                                    <label>Acte de naissance</label>
                                    <div className="upload-capsule">
                                        <input type="file" id="acte-naissance" hidden />
                                        <label htmlFor="acte-naissance">Upload PDF/Doc</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Bulletin trimestre 1 année dernière</label>
                                    <div className="upload-capsule">
                                        <input type="file" id="bulletin-t1" hidden />
                                        <label htmlFor="bulletin-t1">Upload PDF/Doc</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Bulletin trimestre 2 année dernière</label>
                                    <div className="upload-capsule">
                                        <input type="file" id="bulletin-t2" hidden />
                                        <label htmlFor="bulletin-t2">Upload PDF/Doc</label>
                                    </div>
                                </div>
                            </div>
                            <div className="upload-grid-row centered">
                                <div className="form-group">
                                    <label>Bulletin trimestre 3 année dernière</label>
                                    <div className="upload-capsule">
                                        <input type="file" id="bulletin-t3" hidden />
                                        <label htmlFor="bulletin-t3">Upload PDF/Doc</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Carnet de vaccination</label>
                                    <div className="upload-capsule">
                                        <input type="file" id="carnet-vac" hidden />
                                        <label htmlFor="carnet-vac">Upload PDF/Doc</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-submit">
                            <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>Soumettre la demande</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Admissions;
