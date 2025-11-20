import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/MorePage.css";

const MorePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />

      <div className="more-page-bg">
        {/* decorative bubbles */}
        <div className="bubble bubble-yellow" />
        <div className="bubble bubble-blue" />
        <div className="bubble bubble-red" />

        <div className="more-content">
          {/* Friendly hero */}
          <section className="more-hero">
            <p className="hero-pill">Community • Safe • Free • Friendly</p>
            <h1 className="more-hero-title">
                 
              Welcome to the RoMap Community <span></span><img src="/romania-flag.svg" className="flag-icon" alt="Romania Flag" />
            </h1>
            <p className="more-hero-subtitle">
              Discover warm Romanian communities in Canada and around the world.
              Make friends, join events, and never miss a “hai la un ceai” again.
            </p>
          </section>

          {/* Card section */}
          <section className="more-card">
            <header className="more-card-header">
              <div>
                <h2 className="more-title">Discover Communities <span className="ro-flag">RO</span></h2>
                <p className="more-subtitle">
                  Choose a space that feels like home — online or in your city.
                </p>
              </div>
              <div className="tag-group">
                <span className="tag">Gatineau</span>
                <span className="tag">Ottawa</span>
                <span className="tag">Montreal</span>
              </div>
            </header>

            <div className="community-list">
              {/* Discord – opens modal */}
              <button
                className="community-item community-clickable"
                onClick={() => setShowModal(true)}
              >
                <div className="community-icon-wrap discord-bg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                    alt="Discord"
                    className="community-icon"
                  />
                </div>
                <div className="community-text">
                  <h3>ROYA Discord Server</h3>
                  <p>
                    Chat in Romanian, plan meetups, and join events for
                    Romanians in Gatineau, Ottawa, and Montreal.
                  </p>
                  <span className="community-meta">Always active • Safe • Welcoming</span>
                </div>
                <span className="community-arrow">Join →</span>
              </button>

              {/* Students */}
              <div className="community-item">
                <div className="community-icon-wrap students-bg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135800.png"
                    alt="Students"
                    className="community-icon"
                  />
                </div>
                <div className="community-text">
                  <h3>Romanian Students Community</h3>
                  <p>
                    Find other Romanian students, share notes, ask questions about
                    school, visas, or life in Canada.
                  </p>
                  <span className="community-meta">Coming soon • Instagram & Discord</span>
                </div>
              </div>

              {/* Culture & Events */}
              <div className="community-item">
                <div className="community-icon-wrap culture-bg">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png"
                    alt="Events"
                    className="community-icon"
                  />
                </div>
                <div className="community-text">
                  <h3>Culture & Events</h3>
                  <p>
                    Discover festivals, concerts, film nights and traditional
                    events — from colinde to Mărțișor.
                  </p>
                  <span className="community-meta">Tips • Links • Local suggestions</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Discord modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Join the ROYA Discord</h2> <img src="/romania-flag.svg" className="flag-icon" alt="Romania Flag" />
            <p className="modal-desc">
              A friendly space for Romanians in Gatineau, Ottawa, and Montreal.
              Say “salut”, meet new people, get help, and join local meetups.
            </p>

            <a
              href="https://discord.gg/rRV9suDxXS"
              target="_blank"
              rel="noreferrer"
              className="modal-button"
            >
              Join Discord Server
            </a>

            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MorePage;
