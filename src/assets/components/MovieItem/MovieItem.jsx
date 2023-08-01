import React from 'react'
import MovieGenre from '../MovieGenre/MovieGenre'
import './MovieItem.scss'

function MovieItem(props) {
  return (
    <>
      <div className="movie_item">
        <p>{props.title}</p>
        <p>{props.year}</p>
        <p>{props.director}</p>
        <p>{props.duration}</p>
        {props.genres.map((genre, index) => <MovieGenre key={index} genre={genre}/>)}
        <p>{props.rate}</p>
      </div>
    </>
  )
}

export default MovieItem
