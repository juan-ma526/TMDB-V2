import "./ProfileUser.css";
import image1 from "../assets/groot.jpg";
import image2 from "../assets/racoon.jpg";
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
            {/* Agrega las demás imágenes con eventos de selección */}
          </div>
        )}
      </div>
      <div className="container-Favorites-Movies"></div>
    </div>
  );
}

export default ProfileUser;
