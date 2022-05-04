import React from "react";
import "../../../style/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

export default function CustomerSignup() {
  return (
    <form className="gorm">
      <h3>Sign Up As A Customer</h3>
      <div className="mb-3">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
      <div className="mb-3">
        <label>Mobile Number</label>
        <input type="text" className="form-control" placeholder="Your Number" />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="underLinee">
        You already have an account? <Link to="/Login">Login</Link>{" "}
      </p>{" "}
    </form>
  );
}
