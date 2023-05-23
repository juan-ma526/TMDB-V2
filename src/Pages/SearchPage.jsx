import { useState } from "react";
import "./SearchPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${term}&include_adult=false&language=en-US&page=1`,
        options
      )
      .then((response) => response.data)
      .then((response) => setMovies(response.results));
    setTerm("");
  };

  const handleClickMovie = (data) => {
    navigate(`/movieDetails/${data.id}`);
  };

  return (
    <div className="container-search">
      <div className="container-input-search">
        <form onSubmit={handleSubmit}>
          <input
            value={term}
            className="input-search"
            type="search"
            placeholder="Escriba el nombre de la pelicula...."
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="btn-enviar">
            <p>Enviar</p>
          </button>
        </form>
      </div>
      <div className="container-movies">
        {movies.map((movie, index) => {
          return (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="imagen"
              onClick={(e) => handleClickMovie(movie)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
