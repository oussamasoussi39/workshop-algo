

import './App.css';
import MovieList from './Components/MovieList'
import { DataMovie } from './data';
import Filter from './Components/Filter';
import { useState } from 'react';


function App() {
const [FilterMovie,setFilterMovie]=useState("")
const [value,setValue]=useState(0)
const[ movies,setMovies]=useState(DataMovie)
  return (
    <div className="App">

     <Filter setFilterMovie={setFilterMovie} value={value} setValue={setValue} style={{backgroundColor:'black'}} />  
     
    <MovieList movies= {movies} FilterMovie= {FilterMovie}  value={value} setMovies={setMovies} />
      
    </div>
  );
}

export default App;
