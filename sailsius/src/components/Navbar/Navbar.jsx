import Logo from "./Logo.jsx";
import MiniNav from "./Mininavbar.jsx";
import ThemeDropdown from "./Themedropdown.jsx";
import SocialIcons from "./SocialIcons.jsx";

export default function Navbar() {
    return (
        <nav className="navbar-container">

            {/* LEFT */}
            <div className="nav-left">
                <Logo />
            </div>

            {/* CENTER */}
            <div className="nav-center">
                <MiniNav />
            </div>

            {/* RIGHT */}
            <div className="nav-right">
                <ThemeDropdown />
                <SocialIcons />
            </div>
        </nav>
    );
}