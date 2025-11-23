export default function ThemeDropdown() {

    function handleChange(e) {
        const theme = e.target.value;

        // apply theme
        document.documentElement.setAttribute("data-theme", theme);

        // save theme
        localStorage.setItem("selected-theme", theme);
    }

    return (
        <div className="theme-dropdown">
            <select onChange={handleChange} defaultValue={localStorage.getItem("selected-theme") || "default"}>
                <option value="default">Veluthuru Mode</option>
                <option value="trueAutumn">True Autumn</option>
                <option value="matrixCode">Matrix Code</option>
                <option value="thalassophobia">Thalassophobia</option>
                <option value="rainforest">Rainforest</option>
            </select>
        </div>
    );
}
