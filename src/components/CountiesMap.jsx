import { useState } from "react";
import CountiesSVG from "../assets/Romania_counties1.svg?react";

export default function CountiesMap({ region, onBack }) {
    const [hoveredCounty, setHoveredCounty] = useState(null);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
        <div style={{ position: "relative" }}>

            {/* Back button */}
            <button
                style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 50
                }}
                onClick={onBack}
            >
                ← Back
            </button>

            <div className="county-zoom">
            <CountiesSVG
                className="county-map"
                onMouseMove={(e) => {
                    setTooltip({ visible: true, x: e.clientX + 10, y: e.clientY + 10 });
                }}
                onMouseOver={(e) => {
                    if (e.target.tagName === "path" || e.target.tagName === "circle") {
                        if (e.target.id) setHoveredCounty(e.target.id);
                    }
                }}
                onMouseOut={() => setHoveredCounty(null)}
                onClick={(e) => {
                    if (e.target.id) {
                        console.log("Clicked county:", e.target.id);
                    }
                }}
                />
            </div>

            {tooltip.visible && hoveredCounty && (
                <div
                    style={{
                        position: "fixed",
                        top: tooltip.y,
                        left: tooltip.x,
                        background: "#222",
                        color: "white",
                        padding: "6px 9px",
                        borderRadius: "6px",
                        pointerEvents: "none"
                    }}
                >
                    {hoveredCounty}
                </div>
            )}
        </div>
    );
}