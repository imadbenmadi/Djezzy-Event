import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import App from "./App";
import Search from "./Components/Pages/Search";
import NotFound from "./Components/NotFound";
import Item from "./Components/SearchComponents/Item";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "/Search",
                element: <Search />,
            },
            {
                path: "/Company",
                element: <Item />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default routes;
