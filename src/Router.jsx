import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import App from "./App";
import NotFound from "./Components/NotFound";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            // { path: "/Notifications", element: <Notifications /> },
            // { path: "/Notifications", element: <Notifications /> },
            // { path: "/Notifications", element: <Notifications /> },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default routes;
