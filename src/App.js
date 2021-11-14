
import "./App.css";
import { useState , useEffect } from "react";
import Filter from "./components/Filter/Filter";
import Movielist from "./components/MoviesList/Movieslist";
import NavBar from "./components/NavBar/NavBar";
import { data } from "./data.js";
import {Container} from "react-bootstrap"
function App() {
  
const [textFilter, setTextFilter] = useState("")
const [starsRate, setStarsRate] = useState(0)


   useEffect(() => {
   alert("Welcome to my Movies App")
   }, [])

  const [movies, setMovies] = useState(data);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  

  return (
    <div className="app">
      
      <NavBar addMovie={addMovie}/>
      <Container>
      <Filter setTextFilter={setTextFilter} setStarsRate={setStarsRate}/>
      <Movielist movies={movies} textFilter={textFilter} starsRate={starsRate}/>
      </Container>
    </div>
  );
}

export default App;
