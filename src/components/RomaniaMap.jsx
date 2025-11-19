import { useState } from "react";
import RegionsSVG from "../assets/Romania_historic_regions1.svg?react";
import CountiesSVG from "../assets/Romania_counties1.svg?react";
import "./../RomaniaMap.css";
import regionInfo from "../data/regions.js";
import Tooltip from "./Tooltip.jsx";
import CountiesMap from "./CountiesMap.jsx";

export default function RomaniaMap() {
    const [hoveredRegion, setHoveredRegion] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setTooltip({
            visible: true,
            x: e.clientX + 10,
            y: e.clientY + 10,
        });
    };

    const handleRegionClick = (regionId) => {
        setHoveredRegion(null);
        setTooltip({ visible: false });
        setSelectedRegion(regionId); // this switches to county view
    };


    return (
        <div style={{ position: "relative" }}>
            {!selectedRegion ? (
                <RegionsSVG
                    className={`romania-map ${hoveredRegion ? "hovering" : ""}`}
                    onClick={(e) => {
                        if (e.target.tagName === "path" && e.target.id) {
                            handleRegionClick(e.target.id);
                        }
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseOver={(e) => {
                        if (e.target.tagName === "path" && e.target.id) {
                            setHoveredRegion(e.target.id);
                        }
                    }}
                    onMouseOut={(e) => {
                        if (e.target.tagName === "path") {
                            setHoveredRegion(null);
                        }
                    }}
                />
            ) : (
                <CountiesMap 
                    region={selectedRegion}
                    onBack={() => setSelectedRegion(null)} />
            )}

            {/* Tooltip */}
            {tooltip.visible && hoveredRegion && (
                <Tooltip x={tooltip.x} y={tooltip.y}>
                    <strong>{regionInfo[hoveredRegion].name}</strong><br />
                    {regionInfo[hoveredRegion].description}
                </Tooltip>

            )}
        </div>
    );
}
