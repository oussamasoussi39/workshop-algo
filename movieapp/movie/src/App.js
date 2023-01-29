
import Trailer from './Components/trailer';
import './App.css';
import MovieList from './Components/MovieList'
import { DataMovie } from './data';
import Filter from './Components/Filter';
import { useState } from 'react';
import  {Routes,Route,BrowserRouter} from 'react-router-dom';


function App() {
const [FilterMovie,setFilterMovie]=useState("")
const [value,setValue]=useState(0)
const[ movies,setMovies]=useState(DataMovie)
  return (
    
   <BrowserRouter>
     <div className="App">
    
      <Filter setFilterMovie={setFilterMovie} value={value} setValue={setValue} style={{backgroundColor:'black'}} />  
      <Routes>
     
      <Route path="/:title" exact element={ <Trailer movies= {movies} /> } />
      <Route path="/"  element={ <MovieList movies= {movies} FilterMovie= {FilterMovie}  value={value} setMovies={setMovies} /> } />  
     </Routes>
     </div>
   </BrowserRouter>
  );
}

export default App;
