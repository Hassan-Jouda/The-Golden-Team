import React from "react";
import Cardsworkers from "../Components/Cardsworkers";
import "../style/Workers.css";

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
  return (
    <div className="workers">
      <div className="mainFiltersWorkers">
      <p className="titleFilters">Filters:</p>
        <from className="Filters" >
          
          <p>Min Price:</p>
          <input type="number" />
          <p>Max Price:</p>
          <input type="number" />
          <p>Hours of Working:</p>
          <input type="number" />
          <p>Language:</p>
          <input type="text" />
          <p>Experiance:</p>
          <input type="text" />
          <button>Submit</button>
        </from>
      </div>
      <div className="mainWorkers cards container">
        {/* {workers.map((worker) => (
          <Cardsworkers
            name={worker.name}
            username="car.fixing"
            about="hjlvhj"
            backgroundUrl="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A724RBEN2AI6PHCTNILJX2YJKM.jpg&w=1484"
            profileImg="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          />
        ))} */}
        <Cardsworkers />
      </div>
    </div>
  );
}
