import React from 'react';

function ExpertComp(props) {
    const { nomComplet, theme, date_debut, date_fin, description, coutJounalier, Durée, CoutTotal } = props;

    return (
        <div className="expert-container">
            <h3>{nomComplet}</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Thème</th>
                        <th>Date de début</th>
                        <th>Date de fin</th>
                        <th>Description</th>
                        <th>Coût journalier</th>
                        <th>Durée</th>
                        <th>Coût total de l'événement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{theme}</td>
                        <td>{date_debut}</td>
                        <td>{date_fin}</td>
                        <td>{description}</td>
                        <td>{coutJounalier}</td>
                        <td>{Durée}</td>
                        <td>{CoutTotal} dh</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ExpertComp;
