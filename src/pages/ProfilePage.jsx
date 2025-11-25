import React from "react";
import Header from "../components/Header";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  return (
    <>
      <Header />

      <div className="profile-page-bg">
        {/* decorative bubbles */}
        <div className="pf-bubble pf-bubble-yellow" />
        <div className="pf-bubble pf-bubble-blue" />
        <div className="pf-bubble pf-bubble-red" />

        <main className="profile-page-content">
          {/* Hero / top card */}
          <section className="profile-hero-card">
            <div className="profile-hero-left">
              <div className="profile-avatar-wrap">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                  alt="Profile avatar"
                  className="profile-avatar"
                />
              </div>
              <div className="profile-hero-text">
                <h1 className="profile-name">Maria-Christine C.</h1>
                <p className="profile-tagline">
                  Romanian learner • Culture explorer • Community friend
                </p>
                <div className="profile-chips">
                  <span className="pf-chip">Gatineau / Montreal</span>
                  <span className="pf-chip pf-chip-yellow">Self-learning journey</span>
                  <span className="pf-chip pf-chip-red">RoMap member</span>
                </div>
              </div>
            </div>

            <div className="profile-hero-right">
              <div className="folklore-strip" />
              <button className="profile-edit-btn">✏️ Edit profile</button>
            </div>
          </section>

          {/* Progress section */}
          <section className="profile-section profile-progress">
            <h2 className="profile-section-title">My learning progress 📊</h2>
            <p className="profile-section-subtitle">
              See how your Romanian journey is growing over time.
            </p>

            <div className="progress-grid">
              <div className="progress-row">
                <div className="progress-label">
                  <span className="progress-icon">📜</span>
                  <span>History knowledge</span>
                </div>
                <div className="progress-bar-shell">
                  <div className="progress-bar-fill fill-blue" style={{ width: "68%" }} />
                </div>
                <span className="progress-percent">68%</span>
              </div>

              <div className="progress-row">
                <div className="progress-label">
                  <span className="progress-icon">🗺️</span>
                  <span>Regions explored</span>
                </div>
                <div className="progress-bar-shell">
                  <div className="progress-bar-fill fill-yellow" style={{ width: "82%" }} />
                </div>
                <span className="progress-percent">82%</span>
              </div>

              <div className="progress-row">
                <div className="progress-label">
                  <span className="progress-icon">🎭</span>
                  <span>Culture & traditions</span>
                </div>
                <div className="progress-bar-shell">
                  <div className="progress-bar-fill fill-red" style={{ width: "61%" }} />
                </div>
                <span className="progress-percent">61%</span>
              </div>

              <div className="progress-row">
                <div className="progress-label">
                  <span className="progress-icon">🍲</span>
                  <span>Food & cooking</span>
                </div>
                <div className="progress-bar-shell">
                  <div className="progress-bar-fill fill-blue" style={{ width: "44%" }} />
                </div>
                <span className="progress-percent">44%</span>
              </div>

              <div className="progress-row">
                <div className="progress-label">
                  <span className="progress-icon">💬</span>
                  <span>Language & slang</span>
                </div>
                <div className="progress-bar-shell">
                  <div className="progress-bar-fill fill-yellow" style={{ width: "73%" }} />
                </div>
                <span className="progress-percent">73%</span>
              </div>
            </div>

            <div className="profile-stats-row">
              <div className="pf-stat-card">
                <span className="pf-stat-label">🔥 Daily streak</span>
                <span className="pf-stat-value">6 days</span>
              </div>
              <div className="pf-stat-card">
                <span className="pf-stat-label">⭐ XP collected</span>
                <span className="pf-stat-value">1420 XP</span>
              </div>
              <div className="pf-stat-card">
                <span className="pf-stat-label">🕒 Last active</span>
                <span className="pf-stat-value">2 hours ago</span>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="profile-section profile-achievements">
            <h2 className="profile-section-title">Achievements 🏆</h2>
            <p className="profile-section-subtitle">
              Cute badges for the milestones you unlock along your Romanian journey.
            </p>

            <div className="achievements-grid">
              <div className="badge-pill badge-blue">Transylvania Explorer</div>
              <div className="badge-pill badge-yellow">Mărțișor Collector</div>
              <div className="badge-pill badge-red">ROYA Community Member</div>
              <div className="badge-pill badge-blue">Quiz Champion</div>
              <div className="badge-pill badge-soft">
                Romanian Food Lover
              </div>
              <div className="badge-pill badge-soft">
                Tradition Storyteller
              </div>
            </div>
          </section>

          {/* Quick actions */}
          <section className="profile-section profile-actions">
            <h2 className="profile-section-title">Quick actions ⚡</h2>

            <div className="actions-grid">
              <button className="pf-action-btn">🔍 Continue learning</button>
              <button className="pf-action-btn">🧭 Explore regions</button>
              <button className="pf-action-btn">❓ Take a quiz</button>
              <button className="pf-action-btn">💬 Open community</button>
              <button className="pf-action-btn">🍲 Discover recipes</button>
              <button className="pf-action-btn">🎵 Romanian music vibes</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProfilePage;
