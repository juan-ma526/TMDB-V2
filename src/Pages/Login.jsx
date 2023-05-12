import "./Login.css";
import { BiLogIn } from "react-icons/bi";

const Login = () => {
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
