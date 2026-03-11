import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">

      <div className="login-card">

        <h1 className="title">QuickJob</h1>
        <p className="subtitle">Login to your account</p>

        <form className="login-form">

          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <button type="submit">Login</button>

        </form>

        <p className="register">
          Don't have an account? <span>Register</span>
          
        </p>

      </div>

    </div>
  );
};

export default Login;