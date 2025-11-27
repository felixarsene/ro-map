import { useState } from "react";
import RegionsSVG from "../assets/Romania_historic_regions1.svg?react";
import "../styles/RomaniaMap.css";
import regionInfo from "../data/regions.js";
import Tooltip from "./Tooltip.jsx";
import CountiesMap from "./CountiesMap.jsx";

export default function RomaniaMap() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showCounties, setShowCounties] = useState(false);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const handleRegionClick = (regionId) => {
    setHoveredRegion(null);
    setTooltip({ visible: false });
    setSelectedRegion(regionId);
    setTimeout(() => setShowCounties(true), 400);
  };

  const handleBack = () => {
    setShowCounties(false);
    setTimeout(() => setSelectedRegion(null), 400);
  };

  return (
    <div className="romania-map-container">
      <div className={`map-fade${showCounties ? " map-fade-hidden" : ""}`}>
        <RegionsSVG
          className={`romania-map ${hoveredRegion ? "hovering" : ""}`}
          onClick={(e) => {
            if (e.target.tagName === "path" && e.target.id) {
              handleRegionClick(e.target.id);
            }
          }}
          onMouseMove={(e) => {
            setTooltip({
              visible: true,
              x: e.clientX + 10,
              y: e.clientY + 10,
            });
          }}
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
        {tooltip.visible && hoveredRegion && (
          <Tooltip x={tooltip.x} y={tooltip.y}>
            <strong>{regionInfo[hoveredRegion].name}</strong>
            <br />
            {regionInfo[hoveredRegion].description}
          </Tooltip>
        )}
      </div>
      {selectedRegion && (
        <div className={`map-fade${showCounties ? "" : " map-fade-hidden"}`}>
          <CountiesMap
            region={selectedRegion}
            onBack={handleBack}
          />
        </div>
      )}
    </div>
  );
}
