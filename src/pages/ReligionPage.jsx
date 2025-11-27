import React, { useState } from "react";
import Header from "../components/Header";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import CHURCHES from "../data/churches.js";
import "../styles/ReligionPage.css";

const GOOGLE_MAP_LIBRARIES = ["places"];
const MAP_CENTER = { lat: 45.52, lng: -73.58 };

const containerStyle = {
    width: "100%",
    height: "500px",
};

// Hide all POIs and business icons
const mapStyles = [
    {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
    },
];

export default function ReligionPage() {
    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: GOOGLE_MAP_LIBRARIES,
    });

    const [selected, setSelected] = useState(null);

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
                            Explore Romanian Orthodox churches in Montreal. Click a marker for details.
                        </p>
                    </section>

                    <section className="religion-map-card">
                        {loadError && <div>Error loading Google Maps</div>}
                        {!isLoaded && !loadError && (
                            <div className="map-loading">Loading map…</div>
                        )}
                        {isLoaded && (
                            <div className="map-wrapper">
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={MAP_CENTER}
                                    zoom={12}
                                    options={{
                                        streetViewControl: false,
                                        fullscreenControl: false,
                                        styles: mapStyles,
                                    }}
                                >
                                    {CHURCHES.map((church, idx) => (
                                        <Marker
                                            key={idx}
                                            position={church.position}
                                            title={church.name}
                                            onClick={() => setSelected(church)}
                                        />
                                    ))}

                                    {selected && (
                                        <InfoWindow
                                            position={selected.position}
                                            onCloseClick={() => setSelected(null)}
                                        >
                                            <div style={{ color: "#111", fontWeight: 500 }}>
                                                <strong>{selected.name}</strong>
                                                <br />
                                                <span>{selected.address}</span>
                                            </div>
                                        </InfoWindow>
                                    )}
                                </GoogleMap>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </>
    );
}
