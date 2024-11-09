import React, { useState } from 'react';

function Formulaire() {
    // Use state for form data and form submission status
    const [formData, setFormData] = useState({
        theme: '', dateD: '', dateF: '', cout: '', expert: ''
    });
    
    const [isSubmit, setIsSubmit] = useState(false); // State for form submission

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true); // Set the form as submitted
    }

    // Calculate the duration in days
    const dateDebut = new Date(formData.dateD);
    const dateFin = new Date(formData.dateF);
    const difference = dateFin - dateDebut;
    const durée = difference >= 0 ? (difference / (1000 * 60 * 60 * 24)) : 0;

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit} style={{ border: 'solid black 1px' , padding : '10px', marging : '10px' }}>
                <div className="mb-3">
                    <label className="form-label">Thème :</label>
                    <input
                        type="text"
                        name="theme"
                        className="form-control"
                        value={formData.theme}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date de début :</label>
                    <input
                        type="date"
                        name="dateD"
                        className="form-control"
                        value={formData.dateD}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date de fin :</label>
                    <input
                        type="date"
                        name="dateF"
                        className="form-control"
                        value={formData.dateF}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Coût :</label>
                    <input
                        type="number"
                        name="cout"
                        className="form-control"
                        value={formData.cout}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Expert :</label>
                    <input
                        type="text"
                        name="expert"
                        className="form-control"
                        value={formData.expert}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-success" type="submit">Soumettre</button>
            </form>

            {isSubmit && (
                <p>
                    L'expert : {formData.expert} assurera le thème : {formData.theme}, 
                    avec un coût journalier de : {formData.cout} DH, 
                    pour une durée de : {durée} jours, soit un coût total de {formData.cout * durée} DH.
                </p>
            )}
        </>
    );
}

export default Formulaire;
