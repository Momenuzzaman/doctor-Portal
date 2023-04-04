import React from 'react'

const InfoCardDetail = ({ card }) => {
    const { name, description, icon, bgClass, } = card
    return (
        <div className={`text-white card md:card-side p-6 shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default InfoCardDetail;