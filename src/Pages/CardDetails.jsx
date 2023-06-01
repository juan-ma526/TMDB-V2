import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
  const [generos, setGeneros] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "aplication/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
    },
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.data)
      .then((response) => {
        setMovie(response);
        setGeneros(response.genres);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      )
      .then((response) => response.data)
      .then((response) => setMovieVideo(response.results[0].key));
  }, []);

  return (
    <div className="container-movie">
      <div className="container-movie-video">
        <iframe
          className="movie-video"
          id="ytplayer"
          type="text/html"
          width="760"
          height="360"
          src={`https://www.youtube.com/embed/${movieVideo}?playlist=${movieVideo}&loop=1&autoplay=1&origin=http://localhost:5173/`}
        ></iframe>
      </div>
      <div className="container-movie-details">
        <div className="title-movie">{movie.original_title}</div>
        <div className="container-generos">
          Generos:
          {generos.map((genero, index) => {
            return (
              <div className="item-genero" key={index}>
                {genero.name}
              </div>
            );
          })}
        </div>
        <div className="title-overview">{movie.overview}</div>
        <div className="title-vote">
          <span>{movie.vote_average}</span>
        </div>
        <button className="btn-addFavorites">Agregar a Favoritos</button>
      </div>
    </div>
  );
};

export default CardDetails;
