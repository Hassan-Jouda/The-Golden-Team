import React from "react";
import {
  Button,
  ButtonGroup,
  Form,
  Row,
  Col,
  yup,
  InputGroup,
  formik,
} from "react-bootstrap";
import "../style/Profile.css";
import { Link } from "react-router-dom";

export default function Profile({ current, pro, setPro }) {
  const Name = current.name;
  const Username = "@car.fixing";
  const JobsCompleted = "55%";
  const OnBudget = "55%";
  const OnTime = "99%";
  const RepeatHireRate = "55%";
  const job = current.job;
  const About = current.bio;
  const Phone = current.phone;
  const City = current.location;
  return (
    <div>
      <div className="btnsti">
        <h2 className="sti">setitings</h2>
        <ButtonGroup vertical>
          <Link to="/Profile" className="navn">
            <Button className="btns">Public Profile</Button>
          </Link>
          <Link to="/EditProfile" className="navn">
            <Button className="btns">Edit Profile</Button>
          </Link>
        </ButtonGroup>
      </div>
      <div className="tit">
        <h3> Profile</h3>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt="app img"
          className="proimg"
        />
      </div>

      <Form className="forpro">
        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder={current.name}
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>
      </Form>
      <Form className="forpro">
        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Gaza"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Gaza"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-1 age" controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="13"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
        </Form.Group>
      </Form>
      {pro && (
        <>
          <Form className="forpro">
            <Form.Group
              className="mb-3 name"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Hacker"
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </Form.Group>
            <Form.Group
              className="mb-1 inp"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>skils</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </Form.Group>
          </Form>
        </>
      )}
    </div>
  );
}
