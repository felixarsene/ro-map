import React, { useState } from "react";
import "../styles/AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false); // DEFAULT = SIGN UP

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "LOGIN →" : "SIGNUP →", formData);
  };

  return (
    <div className="auth-wrapper">

      {/* HEADER */}
      <header className="auth-header">
        <div className="header-left">RoMap</div>

        <div className="header-right">
          <select className="lang-select">
            <option value="en">EN</option>
            <option value="ro">RO</option>
          </select>

          <button
            className="header-login-btn"
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
        </div>
      </header>

      {/* MAIN GRID */}
      <div className="auth-grid">

        {/* LEFT SIDE: SIGNUP CARD */}
        <div className="auth-card">
          <h2>{isLogin ? "Welcome Back" : "Create Your RoMap Account"}</h2>
          <p className="subtitle">
            {isLogin
              ? "Please log in to continue exploring Romania."
              : "Discover regions, traditions, fun facts & explore Romanian culture!"}
          </p>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button className="main-submit" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* OR */}
          <div className="divider">
            <span>or continue with</span>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="social-buttons">
            <button className="social-btn google">Sign up with Google</button>
            <button className="social-btn microsoft">Sign up with Microsoft</button>
            <button className="social-btn slack">Sign up with Slack</button>
          </div>

          {/* SWITCH */}
          <p className="switch-text">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span
                  className="switch-link"
                  onClick={() => setIsLogin(false)}
                >
                  Create one
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="switch-link"
                  onClick={() => setIsLogin(true)}
                >
                  Log in
                </span>
              </>
            )}
          </p>
        </div>

        {/* RIGHT SIDE: ROMANIAN THEME SHAPES */}
        <div className="auth-visual">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>

          <h3 className="visual-text">
          Explore Romania 
          <img src="/romania-flag.svg" className="flag-icon" alt="Romania Flag" />
          </h3>

          <p className="visual-small">
            Interactive maps, games, quizzes and more!
          </p>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
