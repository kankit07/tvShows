import React, {useEffect, useState} from "react"
import "./shows.css"
import { useParams } from "react-router-dom"

const ShowDetails = () => {
  const [currentshowsDetail, setshows] = useState('')
    const { id } = useParams()

    useEffect(() => {

        const fetchExcercisesData= async() =>{
            let data=[]
              const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
              data = await response.json()
      
            setshows(data)
        }
        fetchExcercisesData()

        window.scrollTo(0,0)
    }, [])

    
  return (
    <div className="shows">
    <div className="shows__intro">
        <img className="shows__backdrop" src={currentshowsDetail ? currentshowsDetail.image.original : ""} alt={currentshowsDetail.name}/>
    </div>
    <div className="shows__detail">
        <div className="shows__detailLeft">
            <div className="shows__posterBox">
                <img className="shows__poster" src={currentshowsDetail ? currentshowsDetail.image.medium : ""} alt={currentshowsDetail.name} />
            </div>
        </div>
        <div className="shows__detailRight">
            <div className="shows__detailRightTop">
                <div className="shows__name">{currentshowsDetail ? currentshowsDetail.name : ""}</div>
                <div className="shows__rating">
                    {currentshowsDetail ? currentshowsDetail.rating.average: ""}
                </div>  
                <div className="shows__runtime">{currentshowsDetail ? currentshowsDetail.runtime + " mins" : ""}</div>
                <div className="shows__releaseDate">{currentshowsDetail ? "Release date: " + currentshowsDetail.premiered : ""}</div>
                <div className="shows__genres">
                    {
                        currentshowsDetail && currentshowsDetail.genres
                        ? 
                        currentshowsDetail.genres.map(genre => (
                            <><span className="shows__genre" id={genre.id}>{genre}</span></>
                        )) 
                        : 
                        ""
                    }
                </div>
            </div>
            <div className="shows__detailRightBottom">
                <div className="synopsisText">Synopsis</div>
                <div>{currentshowsDetail ? currentshowsDetail.summary : ""}</div>
            </div>
            
        </div>
    </div>
    
</div>
  )
}

export default ShowDetails