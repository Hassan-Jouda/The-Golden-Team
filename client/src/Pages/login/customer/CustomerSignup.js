import "../../../style/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
export default function CustomerSignup({ setAuth, current, setCurrent }) {
  const [data, setData] = useState({});
  let job = window.localStorage.getItem("job");
  const navigate = useNavigate();

  const setUserData = (e) => {
    setData({
      ...data,
      job: job,
      [e.target.id]: e.target.value,
    });
    console.log(data);
  };
  const CustomerSignup = (e) => {
    console.log(data);
    e.preventDefault();

    axios
      .post("http://localhost:5000/customer/addCustomer", data)

      .then((res) => {
        window.localStorage.setItem("auth", "true");
        setAuth(true);

        console.log(res);
        setCurrent(data);
        console.log(current);
        window.localStorage.setItem("current", JSON.stringify(data));
      })

      .catch((err) => console.log(err.message));

    navigate("/About");
  };
  // Make serach
  return (
    <div>
      <img
        className="imgg"
        src="https://scribie.com/assets/front/illustrations/Welcome-to-scribie-512x391.svg"
      />
      <form className="gorm">
        <h3 className="ffff">Sign Up As A Customer</h3>
        <div className="mb-3">
          <label className="dadaa">full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="full name"
            id="name"
            onChange={setUserData}
          />
        </div>
        <div className="mb-3">
          <label className="dadaa">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Number"
            id="phone"
            onChange={setUserData}
          />
        </div>
        <div className="mb-3">
          <label className="dadaa">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            onChange={setUserData}
          />
        </div>
        <div className="mb-3">
          <label className="dadaa">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
            onChange={setUserData}
          />
          <div className="mb-3">
            <label className="dadaa">Conforem Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button className="buttono" onClick={CustomerSignup}>
              Sign Up
            </button>
          </div>
        </div>
        <p className="underLinee">
          You already have an account? <Link to="/Login">Login</Link>{" "}
        </p>{" "}
      </form>
    </div>
  );
}
