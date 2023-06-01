import axios from "axios";
import "./Login.css";
import { BiLogIn } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const notify = () =>
    toast.error("🚀Error en email o contraseña", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://tmdb-v2-app-backend.onrender.com/api/user/login",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => response.data)
      .then((response) => {
        setUser(response.user);
        navigate("/profile");
      })
      .catch((error) => notify());
  };

  return (
    <div className="container-login">
      <div className="container-login-header">
        <BiLogIn />
        <h3>Login</h3>
      </div>

      <form onSubmit={handleSubmit} className="container-formulario">
        <input
          onChange={handleChangeEmail}
          type="email"
          placeholder="Ingrese su correo..."
          value={email}
        />
        <input
          onChange={handleChangePassword}
          type="password"
          placeholder="Ingrese su contraseña..."
          value={password}
        />
        <div className="container-checkbox">
          <label id="checkbox1">
            <input type="checkbox" id="checkbox1" /> <h5>Recuerdame</h5>
          </label>
          <h5 className="text-h5-01">Olvidaste tu contraseña</h5>
        </div>
        <button className="button-login">Login</button>
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

export default Login;
