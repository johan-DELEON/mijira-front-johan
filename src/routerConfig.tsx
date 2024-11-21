import Board from "./pages/board/Board";
import Login from "./pages/login/Login";



export const routes = [
  {
    path: "/",
    element: <Login />,
    typeLayout: "blank",
  },
  {
    path: "/register",
    element: <></>,
    typeLayout: "blank",
  },
  {
    path: "/board",
    element: <Board />,
    typeLayout: "full",
  },
];
