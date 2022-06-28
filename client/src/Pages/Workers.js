import React from "react";
import Cardsworkers from "../Components/Cardsworkers";
import "../style/Workers.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Filter from "../Components/Filter";
export default function Workers() {

  //make search

  return (
    <div className="workers">
      <Filter />
      <div className="mainWorkers cards container">
      <div className="search" >
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button
            variant="outline-success"
            // onClick={() => window.location.reload()}
          >
            Search
          </Button>
        </Form>
        </div>
        <div className="workerss" >
        <Cardsworkers />
      </div>
      </div>
    </div>
  );
}
