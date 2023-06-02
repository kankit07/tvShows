import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({setbodyPart}) => {
    const [searchTerm,setSearchTerm] = useState('')
    const onSearchHandler = (e) => {
        e.preventDefault()
        setbodyPart(searchTerm)
        // console.log('searching for term ' + searchTerm)
    }

  return (
    <div>
        <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to='/'>TVshows</Link>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <button class="btn btn-outline-success" type="submit" onClick={onSearchHandler}>Search</button>
            </form>
          </div>
        </nav>
    </div>
  )
}

export default Navbar