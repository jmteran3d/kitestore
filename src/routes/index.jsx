import { createBrowserRouter } from "react-router-dom";
import { Category, Home, Item } from "../pages";
import { MainLayout } from "../layout/MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:categoryId",
        element: <Category />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
