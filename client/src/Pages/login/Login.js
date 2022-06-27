import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import "../../style/Login.css";
export default function Login({ setAuth, pro, setPro, current, setCurrent }) {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const setUserData = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        email: data.email,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.data.password);
        if (res.data.data.password === data.password) {
          window.localStorage.setItem("auth", "true");
          window.localStorage.setItem("pro", true);

          console.log(`ps again: ${res.data.data.password}`);

          setAuth(true);

          setCurrent({
            name: res.data.data.name,
            email: res.data.data.email,
            job: res.data.data.job,
            college_degree: res.data.data.college_degree,
            location: res.data.data.location,
            phone: res.data.data.phone,
            profession: res.data.data.profession,
          });
          console.log(current);
          console.log("logged in");
          window.localStorage.setItem(
            "current",
            JSON.stringify({
              name: res.data.data.name,
              email: res.data.data.email,
              job: res.data.data.job,
              college_degree: res.data.data.college_degree,
              location: res.data.data.location,
              phone: res.data.data.phone,
              profession: res.data.data.profession,
            })
          );
          navigate("/");
        } else {
          setError("Wrong Password or Not Found");
        }
      })
      .catch((err) => console.log(err.message));
  };
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
            <p className="p1">Email</p>
            <Form.Control
              type="text"
              className="C-input"
              id="email"
              onChange={setUserData}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p className="p1">Password</p>
            <Form.Control
              type="text"
              className="C-input"
              id="password"
              onChange={setUserData}
            />
          </Form.Group>

          <a
            className="buttonofCustomer"
            type="submit"
            onClick={(e) => logIn(e)}
          >
            Log In
          </a>
        </Form>
      </section>
    </>
  );
}
