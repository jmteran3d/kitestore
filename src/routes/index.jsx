import { createBrowserRouter } from "react-router-dom";
import { Cart, Category, Home, Item } from "../pages";
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
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
