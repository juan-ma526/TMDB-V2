import "./ProfileUser.css";
import image1 from "../assets/groot.jpg";
import image2 from "../assets/racoon.jpg";
import image3 from "../assets/drax.jpg";
import image4 from "../assets/gamorra.jpg";
import image5 from "../assets/star lord.jpg";
import { useState } from "react";

function ProfileUser() {
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(image1);

  const handleImageSelection = (image) => {
    setSelectedAvatar(image);
    setShowImagePicker(false);
  };

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
            value="email@jasdja.com"
          />
          <input className="item-profile" type="text" value="nombre usuario" />
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
            <div className="col col-3">Puntaje</div>
            <div className="col col-4"></div>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Job Id">
              42235
            </div>
            <div className="col col-2" data-label="Customer Name">
              John Wick 4
            </div>
            <div className="col col-3" data-label="Amount">
              7.45
            </div>
            <button
              className="col col-4 btn-delete"
              data-label="Payment Status"
            >
              Eliminar
            </button>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Job Id">
              42442
            </div>
            <div className="col col-2" data-label="Customer Name">
              X-Men
            </div>
            <div className="col col-3" data-label="Amount">
              8.35
            </div>
            <button
              className="col col-4 btn-delete"
              data-label="Payment Status"
            >
              Eliminar
            </button>
          </li>
        </ul>

        {/*  <table className="table-favorites-Movies">
          <caption>Películas Favoritas</caption>
          <thead>
            <tr className="table-fila">
              <th>Nombre</th>
              <th>Puntaje</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-fila">
              <td className="table-item">Nombre de la película 1</td>
              <td className="table-item">8.5</td>
              <td className="table-item">
                <button>Eliminar</button>
              </td>
            </tr>
            <tr className="table-fila">
              <td className="table-item">Nombre de la película 2</td>
              <td className="table-item">7.9</td>
              <td className="table-item">
                <button>Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
}

export default ProfileUser;
