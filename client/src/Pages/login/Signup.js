import React from "react";
import { Link } from "react-router-dom";
import "../../style/Signup.css";

export default function signup() {
  return (
    <>
      <section className="customer">
        <h2>SignUp as</h2>
        <h1>CUSTOMER</h1>
        <img
          alt=""
          src="https://cdn.iconscout.com/icon/free/png-256/client-experience-3-1152049.png"
        />
        <br></br>
        <button className="buttonoflogin" type="submit">
          <Link to="/CustomerSignup" className="aa">
            SIGNUP NOW!
          </Link>{" "}
        </button>
      </section>

      <section className="worker">
        <h2>SignUp as</h2>
        <h1>WORKER</h1>
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/607/607394.png"
        />
        <br></br>
        <button className="buttonoflogin" type="submit">
          <Link to="/WorkerSignup" className="aa">
            SIGNUP NOW!
          </Link>
        </button>
      </section>

      <p className="underLine">
        You already have an account? <Link to="/Login">Login</Link>{" "}
      </p>
    </>
  );
}
