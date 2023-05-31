import axios from "axios";
import "./Login.css";
import { BiLogIn } from "react-icons/bi";
import { useEffect, useState } from "react";

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://tmdb-v2-app-backend.onrender.com/api/user", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => setUsuarios(response.data));
  }, []);
  console.log(usuarios, "usuarios");

  return (
    <div className="container-login">
      <div className="container-login-header">
        <BiLogIn />
        <h3>Login</h3>
      </div>

      <form className="container-formulario">
        <input type="email" placeholder="Ingrese su correo..." />
        <input type="password" placeholder="Ingrese su contraseña..." />
        <div className="container-checkbox">
          <label id="checkbox1">
            <input type="checkbox" id="checkbox1" /> <h5>Recuerdame</h5>
          </label>
          <h5 className="text-h5-01">Olvidaste tu contraseña</h5>
        </div>
        <button className="button-login">Login</button>
      </form>
    </div>
  );
};

export default Login;
