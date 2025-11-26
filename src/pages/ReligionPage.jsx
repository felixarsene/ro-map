import React from "react";
import Header from "../components/Header";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "../styles/ReligionPage.css";
import CHURCHES from "../data/churches.js";

const GOOGLE_MAP_LIBRARIES = ["places"];
const MAP_CENTER = { lat: 45.52, lng: -73.58 }; // Montreal center

const mapStyles = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
];

const ReligionPage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: GOOGLE_MAP_LIBRARIES,
  });

  return (
    <>
      <Header />
      <div className="more-page-bg">
        <div className="bubble bubble-yellow" />
        <div className="bubble bubble-blue" />
        <div className="bubble bubble-red" />

        <div className="more-content">
          <section className="more-hero">
            <p className="hero-pill">Spirituality • Community • Faith</p>
            <h1 className="more-hero-title">
              Romanian Orthodox Churches in Montreal
              <img
                src="/romania-flag.svg"
                className="flag-icon"
                alt="Romania Flag"
              />
            </h1>
            <p className="more-hero-subtitle">
              Explore Romanian Orthodox churches in Montreal. Click a marker for
              details.
            </p>
          </section>

          <section className="more-card religion-map-card">
            {isLoaded ? (
              <GoogleMap
                mapContainerClassName="religion-map-container"
                center={MAP_CENTER}
                zoom={12}
                options={{
                  mapTypeControl: true,
                  streetViewControl: false,
                  fullscreenControl: false,
                  styles: mapStyles, // Hide POI and business icons
                }}
              >
                {CHURCHES.map((church, idx) => (
                  <Marker
                    key={idx}
                    position={church.position}
                    title={church.name}
                  />
                ))}
              </GoogleMap>
            ) : (
              <div className="map-loading">Loading map…</div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default ReligionPage;