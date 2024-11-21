import { useNavigate } from "react-router-dom";
import "./Login.css";
import User from "../../components/icons/User";
import Lock from "../../components/icons/Lock";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/board");
  };

  return (
    <div className="login-body">
      <div className="content-login">
        <div className="section-login">
          <form action="" method="post">
            <div className="form">
              <h1 className="text-login">Iniciar Sesión</h1>
              <div className="grup">
                <div className="grup-input">
                  <div className="grup-label">
                    <span className="icon">
                      <User />
                    </span>
                    <label className="user" htmlFor="Username">
                      Usuario o Correo
                    </label>
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Usuario o Correo"
                    required
                  />
                </div>
                <div className="grup-input">
                  <div className="grup-label">
                    <span className="icon">
                      <Lock />
                    </span>
                    <label className="pass" htmlFor="password">
                      Contraseña
                    </label>
                  </div>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Contraseña"
                    required
                  />
                </div>
              </div>
              <div className="btn">
                <button className="create">Crear cuenta</button>
                <button className="login" onClick={handleLogin}>
                  Ingresar
                </button>
              </div>
              <div className="link">
                <a href="">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
