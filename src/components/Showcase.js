import React, { useEffect, useState } from 'react'
import axios from './Axios'
import requests from './Request'
import './Showcase.css'

const base_url = `https://image.tmdb.org/t/p/original/`

const Showcase = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchMovie()
  }, [])
  console.log(movie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className="showcase"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="showcase__contents">
        <h1 className="showcase__title">{movie?.name}</h1>
        <div className="showcase__buttons">
          <button className="showcase__playbutton">► Play</button>
          <button className="showcase__mylistbutton">+ My List</button>
        </div>
        <h1 className="showcase__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="showcase__fadedBottom"></div>
    </header>
  )
}

export default Showcase
