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
            {/* Agrega las demás imágenes con eventos de selección */}
          </div>
        )}
      </div>
      <div className="container-Favorites-Movies"></div>
    </div>
  );
}

export default ProfileUser;
