import { Link } from "react-router-dom";
import "./Header.css";
import IconNotificacion from "../icons/IconNotificacion";
import IconPerfil from "../icons/IconPerfil";
import IconMenu from "../icons/IconMenu";
import { useState } from "react";

const Header = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);

  // Alternar el estado del sidebar
  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
    const sidebar = document.querySelector(".container-sidebar");
    if (sidebar) {
      sidebar.classList.toggle("closed");
    }
  };

  return (
    <div className="container-header">
      {/* Botón del menú */}
      <div className="bottom1" onClick={toggleSidebar}>
        <IconMenu />
      </div>
      <div className="logo-header">
        <Link to="/" className="logo-link">
          Esto es un logo
        </Link>
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
