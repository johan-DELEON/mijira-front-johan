/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../../components/header/Header";
import Outlet from "../../components/outlet/Outlet";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import "./FullLayout.css";

const FullLayout = ({ children }: any) => {
  return (
    <div className="fullLayout">
      <Header />
      <SidebarMenu />
      <Outlet>{children}</Outlet>
    </div>
  );
};

export default FullLayout;
