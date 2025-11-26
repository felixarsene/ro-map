import React from "react";
import Header from "../components/Header";
import RomaniaMap from "../components/RomaniaMap";
import "../styles/MorePage.css"; // Reuse the MorePage background and card styles

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="more-page-bg">
        {/* Decorative bubbles */}
        <div className="bubble bubble-yellow" />
        <div className="bubble bubble-blue" />
        <div className="bubble bubble-red" />

        <div className="more-content">
          <section className="more-hero">
            <p className="hero-pill">Explore • Learn • Zoom In</p>
            <h1 className="more-hero-title">
              Discover Romania, region by region{" "}
              <img
                src="/romania-flag.svg"
                className="flag-icon"
                alt="Romania Flag"
              />
            </h1>
            <p className="more-hero-subtitle">
              Hover over a region to learn more. Click to zoom in and explore
              counties!
            </p>
          </section>

          <section
            className="more-card"
            style={{ padding: 0, overflow: "visible" }}
          >
            <RomaniaMap />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;