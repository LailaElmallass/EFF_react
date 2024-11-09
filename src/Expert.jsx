import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ExpertComp from './ExpertComp';

function Expert() {
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
        <div>

            <tbody>
                {dataExp.map((donnée) => (
                    donnée.événements.map((evenement, index) => (
                        <ExpertComp 
                            key={index} 
                            nomComplet={donnée.nom_complet}
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
            </tbody>

        <div className="total-cost">
            <h3>Total des coûts des événements assurés : {total} DH</h3>
        </div>
    </div>
  );
}

export default Expert;
