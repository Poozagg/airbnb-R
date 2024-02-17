import React from "react"

export default function Card({img, rating, reviews, location, title, price}) {
    return (
        <div className="card">
            {/* src: inside jsx {} --> backticks `help us to use javascrpit & interpolate javascript object`  */}
            <img className="card--photo" src={`../images/${img}`} alt="Main card photo"/>
            <div className="card--stats">
                <img className="card--rating" src="../images/star.png" alt="Star icon"/>
                <span className="card--gray">{rating}</span>
                <span className="card--gray">{reviews} • </span>
                <span>{location}</span>
            </div>
            <h2>{title}</h2>
            <p><span className="card--bold"> From ${price}</span> / person</p>
        </div>
    )
}
