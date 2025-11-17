import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";

export default function App() {
    return (
        <>
            <Navbar />
            <Intro />
            {/* We will add Hero section next */}
            <section id="home"></section>
        </>
    );
}