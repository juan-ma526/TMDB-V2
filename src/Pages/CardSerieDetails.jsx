import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";

const CardSerieDetails = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState([]);
  const [serieVideo, setSerieVideo] = useState([]);
  const [generos, setGeneros] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "aplication/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
    },
  };
  //detalle serie
  `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
      .then((response) => response.data)
      .then((response) => {
        setSerie(response);
        setGeneros(response.genres);
      });
  }, []);

  // video serie

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
        options
      )
      .then((response) => response.data)
      .then((response) => setSerieVideo(response.results[0].key));
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
          src={`https://www.youtube.com/embed/${serieVideo}?playlist=${serieVideo}&loop=1&autoplay=1&origin=http://localhost:5173/`}
        ></iframe>
      </div>
      <div className="container-movie-details">
        <div className="title-movie">{serie.original_title}</div>
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
        <div className="title-overview">{serie.overview}</div>
        <div className="title-vote">
          <span>{serie.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default CardSerieDetails;
