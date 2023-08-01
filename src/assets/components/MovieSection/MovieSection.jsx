import React from 'react'
import {movies} from '../data/data'
import MovieItem from '../MovieItem/MovieItem'
import './MovieSection.scss'

function MovieSection() {
  return (
    <div>
      <section className="movie_section">
      {movies.map((movie, index) => <MovieItem key={index} title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genres={movie.genre} rate={movie.rate}/>) }
      </section>
    </div>
  )
}


export default MovieSection
