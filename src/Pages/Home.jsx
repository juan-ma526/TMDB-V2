import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import Slider from "../Components/Slider";

const Home = () => {
  //import.meta.env.VITE_MOVIE_API_KEY
  const [upcoming, setUpcoming] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);
  const [music, setMusic] = useState([]);

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

  return (
    <div className="container-home">
      Home
      <h1 className="text-slider">Peliculas Recomendadas</h1>
      <Slider images={upcoming} />
      <h1 className="text-slider">Accion</h1>
      <Slider images={action} />
      <h1 className="text-slider">Terror</h1>
      <Slider images={horror} />
      <h1 className="text-slider">Musica</h1>
      <Slider images={music} />
    </div>
  );
};

export default Home;
