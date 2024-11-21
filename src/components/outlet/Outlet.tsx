/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Outlet.css";
const Outlet = ({ children }: any) => {
  return (
    <div className="mainFullLayout">
      <div className="mainChildren">{children}</div>
    </div>
  );
};

export default Outlet;
