import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import "../../style/Login.css";
export default function Login({ setAuth, current, setCurrent }) {
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState("");
  const setUserData = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="top-bg">
        <img
          alt="swiftHouse"
          src="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9cd4f904d8b6c32558106b52f06d2e78"
        />
      </section>

      <section className="main-sec">
        <Form>
          <h1>Welcome Back!</h1>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p className="p1">Email or Phone Number</p>
            <Form.Control type="text" className="C-input" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p className="p1">Password</p>
            <Form.Control type="text" className="C-input" />
          </Form.Group>

          <a className="buttonofCustomer" type="submit">
            Log In
          </a>
        </Form>
      </section>
    </>
  );
}
