import "./Register.css";
import { BiLogIn } from "react-icons/bi";
const Register = () => {
  return (
    <div className="container-register">
      <div className="container-register-header">
        <BiLogIn />
        <h3>Registro</h3>
      </div>

      <form className="container-formulario-register">
        <div className="container-email-text">
          <input type="text" placeholder="Ingrese nombre de usuario..." />
          <input type="email" placeholder="Ingrese su correo..." />
        </div>
        <div className="container-password">
          <input type="password" placeholder="Ingrese su contraseña..." />
          <input type="email" placeholder="Repita su contraseña..." />
        </div>

        <div className="container-checkbox-register">
          <label id="checkbox1-register">
            <input type="checkbox" id="checkbox1-register" />{" "}
            <h5>Soy mayor de 18</h5>
          </label>
          <h5 className="text-h5-01-register">Olvidaste tu contraseña</h5>
        </div>
        <button className="button-register">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
