import React from 'react'

function EventComp(props) {
    const {keyExp,theme,date_debut, date_fin, description, coutJounalier, Durée, CoutTotal} = props;
  
    return (
        <>
            <tr key={keyExp}>
                <td>{theme}</td>
                <td>{date_debut}</td>
                <td>{date_fin}</td>
                <td>{description}</td>
                <td>{coutJounalier}</td>
                <td>{Durée}</td>
                <td>{CoutTotal} dh</td>
            </tr>
        </>
  )
}

export default EventComp