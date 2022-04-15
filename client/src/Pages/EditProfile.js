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

export default function EditProfile() {
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
        <h3>Edit profile</h3>
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          alt="app img"
          className="proimg"
        />
      </div>
      <div className="btnimg">
        <Button className="btn1" variant="Dark">
          Delete picture
        </Button>
        <Button variant="light">Change picture</Button>{" "}
      </div>
      <Form className="forpro">
        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>First name</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3 inp" controlId="exampleForm.ControlInput1">
          <Form.Label>sacund name</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
      </Form>
      <Form className="forpro">
        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control type="email" placeholder="Gaza" />
        </Form.Group>
        <Form.Group className="mb-1 age" controlId="exampleForm.ControlInput1">
          <Form.Label>Age</Form.Label>
          <Form.Control type="numper" placeholder="30" />
        </Form.Group>
      </Form>
      <Form className="forpro">
        <Form.Group className="mb-3 name" controlId="exampleForm.ControlInput1">
          <Form.Label>Profession</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-1 inp" controlId="exampleForm.ControlInput1">
          <Form.Label>College Degrees</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
      </Form>
      <Button className="btn1" variant="Dark">
        save
      </Button>{" "}
    </div>
  );
}
