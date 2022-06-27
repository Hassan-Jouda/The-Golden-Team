import React from "react";
import { Link } from "react-router-dom";
import Card from "../Components/cardhome";
import Footer from "../Components/Footer";
import "../style/Home.css";

export default function Home({ auth, setAuth }) {
  const crafts = [
    {
      imgUrl:
        "https://surry.edu/uploads/images/_heroImage/GettyImages-1147804793.jpg",
      craft: "Carpentry",
    },
    {
      imgUrl:
        "https://vid.alarabiya.net/images/2019/05/24/07118231-c182-4fb3-b77a-a26a1b772a52/07118231-c182-4fb3-b77a-a26a1b772a52_16x9_1200x676.jpg?width=1138",
      craft: "Blacksmith",
    },
    {
      imgUrl:
        "https://q8-al-asimah.com/wp-content/uploads/2021/02/%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D9%83%D9%88%D9%88%D9%8A%D8%AA.jpg",
      craft: "Electricity",
    },
    {
      imgUrl:
        "https://www.ghsalat.com/wp-content/uploads/2021/08/%D8%AA%D8%B5%D9%84%D9%8A%D8%AD-%D9%86%D8%B4%D8%A7%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%AF%D9%8A-1.jpg",
      craft: "Washing Machine",
    },
    {
      imgUrl:
        "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/refrigerator-repairAR29032021-3-420x230.jpg",
      craft: "Refrigerator",
    },
    {
      imgUrl:
        "https://apollo-ireland.akamaized.net/v1/files/jxdlpqi18yzs1-EG/image;s=644x461;olx-st/_1_.jpg",
      craft: "Laptop",
    },
    {
      imgUrl:
        "https://s3-eu-west-1.amazonaws.com/content.argaamnews.com/06d93161-f6b7-4832-9e7b-963ae2c600f0.jpg",
      craft: "Cars",
    },
    {
      imgUrl:
        "https://phonebooknumber.com/wp-content/uploads/2021/02/%D8%A3%D8%B1%D9%82%D8%A7%D9%85-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%AC%D9%88%D8%A7%D9%84%D8%A7%D8%AA-%D9%81%D9%8A-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.png",
      craft: "Mobile",
    },
    {
      imgUrl: "https://www.tlifziwn.com/wp-content/uploads/2021/11/3.jpg",
      craft: "TV",
    },
  ];
  const Cards = crafts.map((craft) => (
    <Card imgUrl={craft.imgUrl} craft={craft.craft} />
  ));
  return (
    <div>
      <div>
        {" "}
        <section className="homeImg"></section>
      </div>

      <h1 style={{ textAlign: "center", margin: "20px" }}>Fields: </h1>
      <di>
        {auth ? (
          <>
            <div className="Fields">
              <Link to="/Workers">
                <div className="col-md-4 container cards " id="field">
                  {Cards}
                </div>
              </Link>
            </div>
          </>
        ) : (
          <Link to="/Signup">
            <div className="col-md-4 container cards" id="field">
              {Cards}
            </div>
          </Link>
        )}
      </di>

      <Footer />
    </div>
  );
}
