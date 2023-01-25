import React from 'react'

import MovieCard from './MovieCard'
import AddMovie from './add';
import './MovieList.css'


const MovieList = ({setMovies,FilterMovie,value,movies}) => {
  
  return (
    <div >
       <AddMovie setMovies={setMovies} movies={movies} />
       <div className='grid'>
   { movies.filter((movie)=>(movie.title.toUpperCase().split(" ").join("").includes(FilterMovie.toUpperCase().split(" ").join("") ) && movie.rating >= value ) )
   .map( movie =>{return <MovieCard key={movie.id} movie={movie} />} )
}
</div>
</div>
  )
}
export default MovieList;