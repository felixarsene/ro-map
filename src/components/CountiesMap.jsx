import React, { useEffect, useRef, useMemo, useState } from "react";
import countiesSVG from "../assets/Romania_counties1.svg?raw";
import counties from "../data/counties.js";
import "../styles/RomaniaMap.css";

export default function CountiesMap({ region, onBack }) {
  const wrapperRef = useRef(null);
  const [hoveredCounty, setHoveredCounty] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const regionCountyIds = useMemo(
    () =>
      Object.entries(counties)
        .filter(([code, data]) => data.region.toLowerCase() === region.toLowerCase())
        .map(([code]) => "RO" + code),
    [region]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const svg = wrapper.querySelector("svg");
    if (!svg) return;

    // Highlight and interactivity
    svg.querySelectorAll("path").forEach((path) => {
      path.classList.remove("active-county");
      path.onmouseenter = null;
      path.onmouseleave = null;
      path.onmousemove = null;
      path.style.cursor = "default";
    });

    regionCountyIds.forEach((id) => {
      const path = svg.getElementById(id);
      if (path) {
        path.classList.add("active-county");
        path.style.cursor = "pointer";
        path.onmouseenter = (e) => {
          setHoveredCounty(id);
          setTooltip({
            visible: true,
            x: e.clientX,
            y: e.clientY,
          });
        };
        path.onmousemove = (e) => {
          setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }));
        };
        path.onmouseleave = () => {
          setHoveredCounty(null);
          setTooltip({ visible: false, x: 0, y: 0 });
        };
      }
    });

    // --- ZOOM LOGIC ---
    // Find bounding box of all region counties
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    regionCountyIds.forEach((id) => {
      const path = svg.getElementById(id);
      if (path) {
        const bbox = path.getBBox();
        minX = Math.min(minX, bbox.x);
        minY = Math.min(minY, bbox.y);
        maxX = Math.max(maxX, bbox.x + bbox.width);
        maxY = Math.max(maxY, bbox.y + bbox.height);
      }
    });
    if (minX < Infinity && minY < Infinity) {
      // Add some padding
      const pad = 20;
      svg.setAttribute(
        "viewBox",
        `${minX - pad} ${minY - pad} ${maxX - minX + 2 * pad} ${maxY - minY + 2 * pad}`
      );
    }
  }, [regionCountyIds]);

  return (
    <div className="more-card county-card">
      <div className="county-card-header" style={{ position: "relative", zIndex: 2 }}>
        <button className="county-back-btn" onClick={onBack}>
          ← Back to Regions
        </button>
        <h2 className="county-title">
          Counties of {region.charAt(0).toUpperCase() + region.slice(1)}
        </h2>
      </div>
      <div
        className="county-map-wrapper"
        ref={wrapperRef}
        style={{ position: "relative" }}
        // Render SVG markup directly
        dangerouslySetInnerHTML={{ __html: countiesSVG }}
      />
      {tooltip.visible && hoveredCounty && (
        <div
          className="tooltip"
          style={{
            position: "fixed",
            left: tooltip.x + 12,
            top: tooltip.y + 12,
            pointerEvents: "none",
          }}
        >
          <strong>{counties[hoveredCounty.replace("RO", "")]?.name}</strong>
          <br />
          {counties[hoveredCounty.replace("RO", "")]?.description}
        </div>
      )}
    </div>
  );
}