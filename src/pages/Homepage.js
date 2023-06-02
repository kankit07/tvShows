import React from 'react'
import Shows from '../components/shows'
import { useState } from 'react'

const Homepage = ({bodyPart,setbodyPart}) => {
  const [shows,setShows] = useState([])
  return (
    <div>
      <Shows setShows={setShows} bodyPart={bodyPart} shows={shows}/>
    </div>
  )
}

export default Homepage