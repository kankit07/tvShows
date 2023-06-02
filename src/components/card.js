import React from "react"

import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({shows}) => {


    return <>
    {
        <Link to={`/shows/${shows.show.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={shows? shows.show.image.medium : ""} alt={shows.show.name} />
                <div className="cards__overlay">
                    <div className="card__title">{shows?shows.show.name:""}</div>
                    <div className="card__runtime">
                        {shows?shows.show.premiered:""}
                        <span className="card__rating">{shows?shows.show.rating.average:""}⭐️</span>
                    </div>
                    <div className="card__description">{shows ? shows.show.summary.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}
export default Cards