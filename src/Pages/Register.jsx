import { useState } from "react";
import "./Register.css";
import { BiLogIn } from "react-icons/bi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const notify = () =>
    toast.success("🚀 Registro Exitoso", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeteadPassword, setRepeteadPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRepeteadPassword = (e) => {
    setRepeteadPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === repeteadPassword) {
      axios
        .post("https://tmdb-v2-app-backend.onrender.com/api/user/register", {
          name,
          password,
          email,
        })
        .then(() => notify())
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="container-register">
      <div className="container-register-header">
        <BiLogIn />
        <h3>Registro</h3>
      </div>
      <form onSubmit={handleSubmit} className="container-formulario-register">
        <div className="container-email-text">
          <input
            onChange={handleChangeName}
            type="text"
            placeholder="Ingrese nombre de usuario..."
            value={name}
          />
          <input
            onChange={handleChangeEmail}
            type="email"
            placeholder="Ingrese su correo..."
            value={email}
          />
        </div>
        <div className="container-password">
          <input
            onChange={handleChangePassword}
            type="password"
            placeholder="Ingrese su contraseña..."
            value={password}
          />
          <input
            onChange={handleChangeRepeteadPassword}
            type="password"
            placeholder="Repita su contraseña..."
            value={repeteadPassword}
          />
        </div>

        <div className="container-checkbox-register">
          <label id="checkbox1-register">
            <input type="checkbox" id="checkbox1-register" />
            <h5>Soy mayor de 18</h5>
          </label>
          <h5 className="text-h5-01-register">Olvidaste tu contraseña</h5>
        </div>
        <button className="button-register">Registrarse</button>
      </form>
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

export default Register;
