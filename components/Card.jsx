import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card({img, rating, reviews, location, title, price}) {
    return (
        <div className="card">
            <img className="card--photo" src={img} alt="Main card photo"/>
            <div className="card--stats">
                <img className="card--rating" src="../images/star.png" alt="Star icon"/>
                <span className="card--gray">{rating}</span>
                <span className="card--gray">{reviews} • </span>
                <span>{location}</span>
            </div>
            <h2>{title}</h2>
            <p><span className="card--bold"> {price}</span> / person</p>
        </div>
    )
}
