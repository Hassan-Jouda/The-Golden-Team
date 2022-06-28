import React from "react";
import "../style/Cardsworkers.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Cardsworkers() {

  const workers = [
    {
      name: "Ahmad Herzallah",
      username: "@car.fixing",
      profileImg:
        "https://t4.ftcdn.net/jpg/0?3/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
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


  return (

  //   <Row xs={4} md={3} className="g-4">
  //   {workers.map((idx) => (
  //     <div  className="card" >
  //     <Col  >
  //     <Link to='WProfile' className="clink" >
  //       <Card >
  //         <Card.Img variant="top" src={idx.backgroundUrl} className="background" />
  //         <Card.Img src={idx.profileImg} />
  //         <Card.Body>
  //           <Card.Title>{idx.name}</Card.Title>
  //           <Card.Title>{idx.username}</Card.Title>
  //           <Card.Text>
  //             {idx.about}
  //           </Card.Text>
  //         </Card.Body>
  //       </Card>
  //       </Link>
  //     </Col>
  //     </div>
  //   ))}
  // </Row>

  <Row xs={3} md={3} className="g-4">
  {workers.map((idx) => (
    <Col>
    <Link to="/WProfile" className='clinks' >
      <Card className="cardd" >
        <Card.Img variant="top" src={idx.backgroundUrl} className="background" />
        <div className="profile">
        <Card.Img variant="top" src={idx.profileImg} className="ppic" />
        <div className="name_user" >
        <Card.Title className="name" >{idx.name}</Card.Title>
        <Card.Title className="user" >{idx.username}</Card.Title>
        </div>
        </div>
        <Card.Body>
        <div className="about" >
        <Card.Text>About the worker:</Card.Text>
        <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
          </div>
        </Card.Body>

        <div className="sta">
        <ReactStars
          {...{
            size: 20,
            value: 3.5,
            edit: false,
            isHalf: true,
          }}
        />{" "}
      </div>

      </Card></Link>
    </Col>
  ))}
</Row>
  );
}
