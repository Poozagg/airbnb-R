import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            {/* src: inside jsx {} --> backticks `help us to use javascrpit & interpolate javascript object`  */}
            <img className="card--photo" src={`../images/${props.img}`} alt="Main card photo"/>
            <div className="card--stats">
                <img className="card--rating" src="../images/star.png" alt="Star icon"/>
                <span className="card--gray">{props.rating}</span>
                <span className="card--gray">{props.reviewCount} • </span>
                <span>{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="card--bold"> From ${props.price}</span> / person</p>
        </div>
    )
}
