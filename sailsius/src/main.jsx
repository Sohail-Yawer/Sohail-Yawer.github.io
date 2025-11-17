import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import "./index.css";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "projects", element: <Projects /> },
            { path: "skills", element: <Skills /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "resume", element: <Resume /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
