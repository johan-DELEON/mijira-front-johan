import "./Sidebar.css";
import IconTableros from "../icons/IconTableros";
import IconTareas from "../icons/IconTareas";
import IconRoles from "../icons/IconRoles";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  // Función para abrir el sidebar al hacer clic en un ítem
  const openSidebar = () => {
    const sidebar = document.querySelector(".container-sidebar");
    if (sidebar) {
      sidebar.classList.remove("closed");
    }
    
  };

  return (
    <div className="container-sidebar">
      <div className="menu">
        <div className="container-lista">
          <div className="menu--lista">
            {/* Cada botón abre el sidebar al hacer clic */}
            <div className="item" onClick={openSidebar}>
              <Link to=""><IconTableros /></Link>
              <span className="item-text">Tableros</span>
            </div>
            <hr />
            <div className="item" onClick={openSidebar}>
              <Link to=""><IconTareas /></Link>
              <span className="item-text">Backlog</span>
            </div>
            <hr />
            <div className="item" onClick={openSidebar}>
              <Link to=""><IconRoles /></Link>
              <span className="item-text">Roles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
