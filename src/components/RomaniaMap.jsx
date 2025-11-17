import { useState } from "react";
import RegionsSVG from "../assets/Romania_historic_regions.svg?react";
import CountiesSVG from "../assets/Romania_counties.svg?react";
import "./../RomaniaMap.css";

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

    const handleMouseLeave = () => {
        setTooltip({ visible: false });
    };

    const handleRegionClick = (regionId) => {
        setSelectedRegion(regionId);
    };

    return (
        <div style={{ position: "relative" }}>
            {!selectedRegion ? (
                <RegionsSVG
                    className="romania-map"
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
                <CountiesSVG className="county-map" />
            )}

            {/* Tooltip */}
            {tooltip.visible && hoveredRegion && (
                <div
                    style={{
                        position: "fixed",
                        top: tooltip.y,
                        left: tooltip.x,
                        padding: "6px 10px",
                        background: "#222",
                        color: "white",
                        borderRadius: "6px",
                        pointerEvents: "none",
                        fontSize: "12px",
                    }}
                >
                    {hoveredRegion}
                </div>
            )}
        </div>
    );
}
