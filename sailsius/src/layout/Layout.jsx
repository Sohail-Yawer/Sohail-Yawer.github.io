import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {

    // ⭐ Restore saved theme ONCE when layout loads
    useEffect(() => {
        const savedTheme = localStorage.getItem("selected-theme");

        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
