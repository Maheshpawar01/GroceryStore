import React from "react";
import "./HomeCategories.css";
import img1 from "../../ASSETS/images/i1.png";
import img2 from "../../ASSETS/images/i2.png";
import img3 from "../../ASSETS/images/i3.png";
import img4 from "../../ASSETS/images/i4.png";

const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={img1} alt="Noimg" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p>Shop vegetables now</p>
        </div>
      </div>
      <div className="container">
        <img src={img2} alt="Noimg" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p>Shop vegetables now</p>
        </div>
      </div>
      <div className="container">
        <img src={img3} alt="Noimg" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p>Shop vegetables now</p>
        </div>
      </div>
      <div className="container">
        <img src={img4} alt="Noimg" />
        <div className="content">
          <h1>Vegetables at your doorstep</h1>
          <p>Shop vegetables now</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
