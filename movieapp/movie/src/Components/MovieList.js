import React from 'react'

import MovieCard from './MovieCard'
import AddMovie from './add';
import './MovieList.css';
import { Link } from 'react-router-dom';


const MovieList = ({setMovies,FilterMovie,value,movies}) => {
  
  return (
    <div >
       <AddMovie setMovies={setMovies} movies={movies} />
       <div className='grid'>
   { movies.filter((movie)=>(movie.title.toUpperCase().split(" ").join("").includes(FilterMovie.toUpperCase().split(" ").join("") ) && movie.rating >= value ) )
   .map( movie =>{return <div key={movie.id}> <Link to={`${movie.title}`}style={{textDecoration:'none'}}   >
    <MovieCard  key={movie.id} movie={movie} />
   </Link></div>}
    )

}
</div>
</div>
  )
}
export default MovieList;
