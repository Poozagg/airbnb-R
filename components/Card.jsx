import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots ===0) {
        badgeText = "SOLD OUT"
      } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
        }

    return (
        <div className="card">
            {badgeText && <div className="card--badge"> {badgeText} </div>}
            {/* src: inside jsx {} --> backticks `help us to use javascrpit & interpolate javascript object`  */}
            <img className="card--photo" src={`../images/${props.item.coverImg}`} alt="Main card photo"/>
            <div className="card--stats">
                <img className="card--rating" src="../images/star.png" alt="Star icon"/>
                <span className="card--gray">{props.item.stats.rating}</span>
                <span className="card--gray">{props.item.stats.reviewCount} • </span>
                <span>{props.item.location}</span>
            </div>
            <h2>{props.item.title}</h2>
            <p><span className="card--bold"> From ${props.item.price}</span> / person</p>
        </div>
    )
}
