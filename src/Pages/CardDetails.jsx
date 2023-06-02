import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";
import { UserContext } from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [movieVideo, setMovieVideo] = useState([]);
  const [generos, setGeneros] = useState([]);
  const { user } = useContext(UserContext);
  const movieData = {
    movieId: movie.id,
    nameMovie: movie.title,
    overview: movie.overview,
    frontImage: movie.poster_path,
  };
  const [prueba, setPrueba] = useState([]);
  const notify = () =>
    toast.success("🚀 Pelicula Agregada a Favoritos", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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

  const handleSubmit = (e) => {
    axios
      .post(
        "https://tmdb-v2-app-backend.onrender.com/api/user/addMovie",
        { userId: user.id, movie: movieData },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => notify())
      .catch((error) => console.log(error));
  };

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
        <button onClick={handleSubmit} className="btn-addFavorites">
          Agregar a Favoritos
        </button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CardDetails;
