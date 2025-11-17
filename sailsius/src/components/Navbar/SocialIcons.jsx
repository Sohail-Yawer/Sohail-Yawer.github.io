import { Link } from "react-router-dom";

export default function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://github.com/Sohail-Yawer" target="_blank">G</a>
            <a href="https://linkedin.com/in/sohail-yawer-shaik" target="_blank">L</a>
            <Link to="/resume">R</Link>
            <a href="https://steamcommunity.com/id/sailsius/" target="_blank">S</a>
        </div>
    );
}
