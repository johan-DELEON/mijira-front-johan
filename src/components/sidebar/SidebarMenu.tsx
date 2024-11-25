import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";
import IconTableros from "../icons/IconTableros";
import IconTareas from "../icons/IconTareas";
import IconRoles from "../icons/IconRoles";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const bottomMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container-sidebar ${isOpen ? "" : "closed"}`}>
      {isOpen &&
      <div className="menu">
        <div className="container-lista">
          <div className="menu--lista">
            
            <Link to="/" className="item" onClick={bottomMenu}>
              <IconTableros />
              Tableros
            </Link>
            <hr />
            <Link to="/" className="item" onClick={bottomMenu}>
              <IconTareas />
              Backlog
            </Link>
            <hr />
            <Link to="/" className="item" onClick={bottomMenu}>
              <IconRoles />
              Roles
            </Link>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default SidebarMenu;
