import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots ===0) {
        badgeText = "SOLD OUT"
      } else if (props.location === "Online") {
        badgeText = "ONLINE"
        }

    return (
        <div className="card">
            {badgeText && <div className="card--badge"> {badgeText} </div>}
            {/* src: inside jsx {} --> backticks `help us to use javascrpit & interpolate javascript object`  */}
            <img className="card--photo" src={`/${props.coverImg}`} alt="Main card photo"/>
            <div className="card--stats">
                <img className="card--rating" src="/images/star.png" alt="Star icon"/>
                <span className="card--gray">{props.rating}</span>
                <span className="card--gray">{props.reviewCount} • </span>
                <span>{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="card--bold"> From ${props.price}</span> / person</p>
        </div>
    )
}
