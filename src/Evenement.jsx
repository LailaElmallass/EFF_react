import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventComp from './EventComp';

function Evenement() {
    const [dataExp, setData] = useState([]);

    const total = dataExp.reduce((tot, expert) => {
        const expertTotal = expert.événements.reduce((acc, evenement) => {
            return acc + (evenement.cout_journalier * evenement.durée);
        }, 0);
        return tot + expertTotal;
    }, 0);

    useEffect(() => {
        axios.get('http://localhost:3000/expertsData')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
        <table className='table table-striped'>
            <thead>
            <tr>
                <th>Theme</th>
                <th>Date de début</th>
                <th>Date de fin</th>
                <th>Description</th>
                <th>Cout journalier</th>
                <th>Durée</th>
                <th>Cout total event</th>
            </tr>
        </thead>
        
        <tbody>
            {dataExp.map((donnée) => (
                donnée.événements.map((evenement, index) => (
                    <EventComp 
                        key={index}  
                        theme={evenement.thème} 
                        date_debut={evenement.date_debut}
                        date_fin={evenement.date_fin}
                        description={evenement.description}
                        coutJounalier={evenement.cout_journalier}
                        Durée={evenement.durée}
                        CoutTotal={evenement.cout_journalier * evenement.durée}
                    />
                ))
            ))}
           
            <div className='colspan-7'>
                Total des coûts des événements assurés : {total} DH
            </div>
            </tbody>
        </table>
        </>
    );
}

export default Evenement;
