import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/About.css";
import Footer from "../Components/Footer";
import { Form } from "react-bootstrap";

export default function About() {
  return (
    <>
      <section className="top-sec">
        <h1>About SwiftHouse</h1>
        <p>
          Welcome to SwiftHouse, the world's largest professional network with
          810 million <br></br>members in more than 200 countries and
          territories worldwide.
        </p>
      </section>
      <section className="top--sec">
        <h1>Vision</h1>
        <p>
          Create economic opportunity for every member of the global workforce.
        </p>

        <h1>Mission</h1>
        <p>
          The mission of SwiftHouse is simple: connect the world’s professionals
          to make them more productive and successful.
        </p>

        <h1>Who are we?</h1>
        <p>
          SwiftHouse began in co-founder G.T. voice chat in 2002 and was
          officially launched on May 5, 2003. <br></br>
          <br></br> Today, SwiftHouse leads a diversified business with revenues
          from membership subscriptions, advertising sales and recruitment
          solutions under the leadership of Ryan Roslansky. In December 2016,
          Microsoft completed its acquisition of SwiftHouse, bringing together
          the world’s leading professional cloud and the world’s leading
          professional network.
        </p>
      </section>{" "}
      <section className="carousel">
        <Carousel variant="dark" className="carousel1">
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/39aedf5901fa54c15af3977155f44568"
              alt="First slide"
            />

            <h1>
              Stay up to date on<br></br>your industry
            </h1>

            <p>
              From live videos, to stories, to newsletters and more, SwiftHouse
              is full of ways to stay up to date on the latest discussions in
              your industry.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/f24650a2a2861fffa07a150da57b825e"
              alt="Second slide"
            />

            <h1>
              Let the right people know<br></br>you’re open to work
            </h1>

            <p>
              With the Open To Work feature, you can privately tell recruiters
              or publicly share with the SwiftHouse community that you are
              looking for new job opportunities.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60"
              src="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d30b1104db187a8b2c03ce202f5a4329"
              alt="Third slide"
            />

            <h1>
              Conversations today could lead<br></br>to opportunity tomorrow
            </h1>

            <p>
              Sending messages to people you know is a great way to strengthen
              relationships as you take the next step in your career.
            </p>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="A-contact">
        <h1>Contact SwiftHouse</h1>
      </section>
      <section style={{ backgroundColor: "#f6f7f9" }}>
        <div className="Contact">
          <div className="C-form">
            <Form className="send">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Your Name*"
                  className="C-input"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Your Age*"
                  className="C-input"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="E-mail*"
                  className="C-input"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Company"
                  className="C-input"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="C-input-mg"
                  placeholder="Your Message"
                />
              </Form.Group>
            </Form>
          </div>

          <div className="C-names">
            <h1>We're here!</h1>
            <p className="p">
              Our home is always open for a good cup of coffee :)
            </p>

            <div
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "gray",
                margin: 20,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                boxSizing: "border-box",
              }}
            >
              <div className="person">
                <img
                  src="https://vid.alarabiya.net/images/2022/03/03/9009b540-8457-4c0c-a75e-7e70fbdaa7a1/9009b540-8457-4c0c-a75e-7e70fbdaa7a1.jpg?crop=4:3&width=1200"
                  className="p-image"
                  alt=""
                />
                <p className="p-name">Hassan Jouda</p>
              </div>

              <div className="person">
                <img
                  src="https://scontent.fgza6-1.fna.fbcdn.net/v/t39.30808-6/272699231_912621866086769_4238490206738117231_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PrJPyMvH3skAX-AaUlA&_nc_ht=scontent.fgza6-1.fna&oh=00_AT-KxQtxfasydn47uLsT31-OQP4-2ptlKRN4mDhCY22c3w&oe=62995F1B"
                  className="p-image"
                  alt=""
                />
                <p className="p-name">Mohamed AlQesi</p>
              </div>

              <div className="person">
                <img
                  src="https://i1.sndcdn.com/avatars-0teXffNaCbUO5KUr-HHYdEA-t500x500.jpg"
                  className="p-image"
                  alt=""
                />
                <p className="p-name">Dema Switi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
