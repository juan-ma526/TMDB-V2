import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const renderImages = (data) => {
  return data.map((imagen, index) => {
    <img
      key={index} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
    />;
  });
};

const Home = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const [music, setMusic] = useState([]);
  const [seriePopular, setSeriePopular] = useState([]);
  const [serieAnimation, setSerieAnimation] = useState([]);
  const [serieDrama, setSerieDrama] = useState([]);
  const [serieComedia, setSerieComedia] = useState([]);
  const navigate = useNavigate();

  const handleClickMovie = (data) => {
    navigate(`/movieDetails/${data.id}`);
  };
  const handleClickSerie = (data) => {
    navigate(`/serieDetails/${data.id}`);
  };

  // Peliculas
  let upcomingMovies = upcoming.map((imagen) => (
    <img
      key={imagen.id} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
      onClick={(e) => handleClickMovie(imagen)}
    />
  ));

  let actionMovies = action.map((imagen, index) => (
    <img
      key={index} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
      onClick={(e) => handleClickMovie(imagen)}
    />
  ));
  let horrorMovies = horror.map((imagen, index) => (
    <img
      key={index} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
      onClick={(e) => handleClickMovie(imagen)}
    />
  ));
  let musicMovies = music.map((imagen, index) => (
    <img
      key={index} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
      onClick={(e) => handleClickMovie(imagen)}
    />
  ));
  //Series

  let popularSeries = seriePopular.map((imagen, index) => (
    <img
      key={index} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
      onClick={(e) => handleClickSerie(imagen)}
    />
  ));
  let animationSeries = serieAnimation.map((imagen, index) => (
    <img
      key={index} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
      onClick={(e) => handleClickSerie(imagen)}
    />
  ));

  let dramaSeries = serieDrama.map((imagen, index) => (
    <img
      key={index} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
      onClick={(e) => handleClickSerie(imagen)}
    />
  ));
  let comedySeries = serieComedia.map((imagen, index) => (
    <img
      key={index} // Agrega un atributo 'key' único para cada imagen en el mapeo
      src={`https://image.tmdb.org/t/p/original/${imagen.poster_path}`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Imagen"
      className="item"
      onClick={(e) => handleClickSerie(imagen)}
    />
  ));

  const responsive = {
    0: { items: 1 },
    832: { items: 3 },

    1080: { items: 5 },
    1260: { items: 6 },
    1500: { items: 7 },
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      )
      .then((response) => response.data)
      .then((response) => setUpcoming(response.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28",
        options
      )
      .then((response) => response.data)
      .then((response) => setAction(response.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27",
        options
      )
      .then((response) => response.data)
      .then((response) => setHorror(response.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10402",
        options
      )
      .then((response) => response.data)
      .then((response) => setMusic(response.results));
  }, []);

  // Series

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        options
      )
      .then((response) => response.data)
      .then((response) => setSeriePopular(response.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35",
        options
      )
      .then((response) => response.data)
      .then((response) => setSerieComedia(response.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18",
        options
      )
      .then((response) => response.data)
      .then((response) => setSerieDrama(response.results));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16",
        options
      )
      .then((response) => response.data)
      .then((response) => setSerieAnimation(response.results));
  }, []);

  return (
    <div className="container-home">
      {/* Home */}
      <h1 className="text-slider">Peliculas Recomendadas</h1>
      <AliceCarousel
        className="pruena"
        mouseTracking
        items={upcomingMovies}
        responsive={responsive}
        disableDotsControls={true}
      />
      <h1 className="text-slider">Accion</h1>
      <AliceCarousel
        className="pruena"
        mouseTracking
        items={actionMovies}
        responsive={responsive}
        disableDotsControls={true}
      />
      <h1 className="text-slider">Terror</h1>
      <AliceCarousel
        className="pruena"
        mouseTracking
        items={horrorMovies}
        responsive={responsive}
        disableDotsControls={true}
      />
      <h1 className="text-slider">Musica</h1>
      <AliceCarousel
        className="pruena"
        mouseTracking
        items={musicMovies}
        responsive={responsive}
        disableDotsControls={true}
      />
      <h1 className="text-slider">Series Populares</h1>
      <AliceCarousel
        className="pruena"
        mouseTracking
        items={popularSeries}
        responsive={responsive}
        disableDotsControls={true}
      />
      <h1 className="text-slider">Animacion</h1>
      <AliceCarousel
        className="pruena"
        mouseTracking
        items={animationSeries}
        responsive={responsive}
        disableDotsControls={true}
      />
      <h1 className="text-slider">Drama</h1>
      <AliceCarousel
        className="pruena"
        mouseTracking
        items={dramaSeries}
        responsive={responsive}
        disableDotsControls={true}
      />
      <h1 className="text-slider">Comedia</h1>
      <AliceCarousel
        className="pruena"
        mouseTracking
        items={comedySeries}
        responsive={responsive}
        disableDotsControls={true}
      />
    </div>
  );
};

export default Home;
