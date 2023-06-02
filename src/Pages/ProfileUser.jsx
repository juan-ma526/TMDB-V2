import "./ProfileUser.css";
import image1 from "../assets/groot.jpg";
import image2 from "../assets/racoon.jpg";
import image3 from "../assets/drax.jpg";
import image4 from "../assets/gamorra.jpg";
import image5 from "../assets/star lord.jpg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

function ProfileUser() {
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState(user ? user.email : "");
  const [name, setName] = useState(user ? user.name : "");
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(image1);
  const [movies, setMovies] = useState([]);

  const handleImageSelection = (image) => {
    setSelectedAvatar(image);
    setShowImagePicker(false);
  };

  const handleDelete = (id) => {
    axios
      .delete("https://tmdb-v2-app-backend.onrender.com/api/user/delete", {
        data: {
          idUser: user.id,
          movieId: id,
        },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.movieId !== id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(
        `https://tmdb-v2-app-backend.onrender.com/api/user/getMovie/${user.id}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
  }, [movies]);

  return (
    <div className="container-Profile">
      <div className="container-Profile-card">
        <div className="card">
          <img src={selectedAvatar} alt="Imagen de la tarjeta" />
        </div>
        <div className="profile-items">
          <input
            className="item-profile"
            type="text"
            defaultValue={email}
            disabled
          />
          <input
            className="item-profile"
            type="text"
            defaultValue={name}
            disabled
          />
        </div>
        <button className="btn-change" onClick={() => setShowImagePicker(true)}>
          Cambiar
        </button>
        {showImagePicker && (
          <div className="image-picker">
            <img
              src={image1}
              alt="Imagen 1"
              onClick={() => handleImageSelection(image1)}
            />
            <img
              src={image2}
              alt="Imagen 2"
              onClick={() => handleImageSelection(image2)}
            />
            <img
              src={image3}
              alt="Imagen 3"
              onClick={() => handleImageSelection(image3)}
            />
            <img
              src={image4}
              alt="Imagen 4"
              onClick={() => handleImageSelection(image4)}
            />
            <img
              src={image5}
              alt="Imagen 5"
              onClick={() => handleImageSelection(image5)}
            />
          </div>
        )}
      </div>
      <div className="container-Favorites-Movies">
        <h2 className="table-title">Peliculas Favoritas</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Id</div>
            <div className="col col-2">Nombre</div>

            <div className="col col-4"></div>
          </li>
          {movies.map((movie, index) => {
            return (
              <li key={index} className="table-row">
                <div className="col col-1" data-label="Job Id">
                  {movie.id}
                </div>
                <div className="col col-2" data-label="Customer Name">
                  {movie.nameMovie}
                </div>
                <button
                  onClick={() => handleDelete(movie.movieId)}
                  className="col col-4 btn-delete"
                  data-label="Payment Status"
                >
                  Eliminar
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProfileUser;
