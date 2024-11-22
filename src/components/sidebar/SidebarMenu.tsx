import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";
import IconMenu from "../icons/IconMenu";
import IconTableros from "../icons/IconTableros";
import IconTareas from "../icons/IconTareas";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const bottomMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container-sidebar ${isOpen ? "" : "closed"}`}>
      <div className="bottom1" onClick={bottomMenu}>
        <IconMenu />
      </div>

      <div className="menu">
        <div className="container-lista">
          <div className="menu--lista">
            <Link to="/" className="item">
              <IconTableros />
              Tableros
            </Link>
            <Link to="/" className="item">
              <IconTareas />
              Tableros
            </Link>
            <Link to="/" className="item">
              <IconTareas />
              Tareas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
