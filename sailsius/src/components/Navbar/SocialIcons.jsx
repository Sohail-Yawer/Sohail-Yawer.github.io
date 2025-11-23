import GithubIcon from "../../icons/GithubIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import ResumeIcon from "../../icons/ResumeIcon";
import SteamIcon from "../../icons/SteamIcon";

import { Link } from "react-router-dom";

export default function SocialIcons() {
    return (
        <div className="social-icons">

            <a href="https://github.com/Sohail-Yawer" target="_blank" rel="noreferrer">
                <GithubIcon />
            </a>

            <a href="https://linkedin.com/in/sohail-yawer-shaik" target="_blank" rel="noreferrer">
                <LinkedinIcon />
            </a>

            <Link to="/resume">
                <ResumeIcon />
            </Link>

            <a href="https://steamcommunity.com/id/sailsius/" target="_blank" rel="noreferrer">
                <SteamIcon />
            </a>

        </div>
    );
}
