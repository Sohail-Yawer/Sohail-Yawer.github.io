import { NavLink } from "react-router-dom";

export default function MiniNav() {
    return (
        <div className="mini-nav-container">
            <nav className="mini-nav">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
}
