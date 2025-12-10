import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Components/Home";
import Coverage from "../Components/Coverage";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Components/Login";
import Registar from "../Components/Registar";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        loader: () => fetch("/ServiceCenter.json"),
        element: <Coverage></Coverage>,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registar",
        Component: Registar,
      },
    ],
  },
]);

export default router;
