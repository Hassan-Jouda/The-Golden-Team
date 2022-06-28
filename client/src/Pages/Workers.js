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
  const workers = [
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
    },
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
      profileImg:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      backgroundUrl:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484",
      about:
        "Ahmad is one of the most worst workers here in the website, also you don’t need him in anything! {don’t look at his stars}",
    },
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
      profileImg:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      backgroundUrl:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484",
      about:
        "Ahmad is one of the most worst workers here in the website, also you don’t need him in anything! {don’t look at his stars}",
    },
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
      profileImg:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      backgroundUrl:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484",
      about:
        "Ahmad is one of the most worst workers here in the website, also you don’t need him in anything! {don’t look at his stars}",
    },
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
      profileImg:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      backgroundUrl:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484",
      about:
        "Ahmad is one of the most worst workers here in the website, also you don’t need him in anything! {don’t look at his stars}",
    },
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
      profileImg:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      backgroundUrl:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484",
      about:
        "Ahmad is one of the most worst workers here in the website, also you don’t need him in anything! {don’t look at his stars}",
    },
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
      profileImg:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      backgroundUrl:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484",
      about:
        "Ahmad is one of the most worst workers here in the website, also you don’t need him in anything! {don’t look at his stars}",
    },
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
      profileImg:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      backgroundUrl:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484",
      about:
        "Ahmad is one of the most worst workers here in the website, also you don’t need him in anything! {don’t look at his stars}",
    },
  ];
  //make search

  return (
    <div className="workers">
      <Filter />
      <div className="mainWorkers cards container">
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
        <Cardsworkers />
      </div>
    </div>
  );
}
