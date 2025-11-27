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
        .map(([code]) => code), // <-- FIXED: use code directly
    [region]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const svg = wrapper.querySelector("svg");
    if (!svg) return;

    // Add the county-map class so CSS applies!
    svg.classList.add("county-map");

    // Highlight and interactivity
    svg.querySelectorAll("path, circle").forEach((el) => {
      el.classList.remove("active-county");
      el.onmouseenter = null;
      el.onmouseleave = null;
      el.onmousemove = null;
      el.style.cursor = "default";
    });

    regionCountyIds.forEach((id) => {
      const el = svg.getElementById(id);
      if (el) {
        el.classList.add("active-county");
        el.style.cursor = "pointer";
        el.onmouseenter = (e) => {
          setHoveredCounty(id);
          setTooltip({
            visible: true,
            x: e.clientX,
            y: e.clientY,
          });
        };
        el.onmousemove = (e) => {
          setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }));
        };
        el.onmouseleave = () => {
          setHoveredCounty(null);
          setTooltip({ visible: false, x: 0, y: 0 });
        };
      }
    });

    // --- ZOOM LOGIC ---
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
      const pad = 60;
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
          <strong>{counties[hoveredCounty]?.name}</strong>
          <br />
          {counties[hoveredCounty]?.description}
        </div>
      )}
    </div>
  );
}