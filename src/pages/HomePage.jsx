import React from "react";
import RomaniaMap from "../components/RomaniaMap";

const HomePage = () => {
    return (
        <div style={{ padding: "20px", background: "#fdf6e3" }}>
            <h1>RoMap - Discover Romania, region by region</h1>
            <RomaniaMap />
        </div>
    );
};

export default HomePage;