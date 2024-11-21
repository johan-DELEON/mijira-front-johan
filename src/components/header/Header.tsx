import { Link } from "react-router-dom";
import "./Header.css";
import IconNotificacion from "../icons/IconNotificacion";
import IconPerfil from "../icons/IconPerfil";

const Header = () => {
  return (
    <div className="container-header">
      <div className="logo-header">
        <Link to="/" className="logo-link">Esto es un logo</Link>
      </div>
      <div className="iconos">
        <div className="icon">
          <Link to="/">
            <IconNotificacion />
          </Link>
        </div>
        <div className="icon">
          <Link to="/">
            <IconPerfil />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
