import React from "react";
import img1 from "../../ASSETS/productimg/brocoli.png"
import img2 from "../../ASSETS/productimg/apple.png"
import img4 from "../../ASSETS/images/i4.png"
import img3 from "../../ASSETS/images/i3.png"
import img5 from "../../ASSETS/productimg/spinach.png"
import img6 from "../../ASSETS/productimg/cucumber.png"
import img7 from "../../ASSETS/images/i4.png"

import "./CategorySidebar.css";
const CategorySidebar = () => {
  const data = [
    {
      id: 1,
      categoryimage: img1,
      categoryname: "Vegetables",
    },
    {
      id: 2,
      categoryimage: img2,
      categoryname: "Fruits",
    },
    {
      id: 3,
      categoryimage: img3,
      categoryname: "Organic Vegetables",
    },
    {
      id: 4,
      categoryimage: img4,
      categoryname: "Seafood",
    },
    {
      id: 5,
      categoryimage: img5,
      categoryname: "Leafy Vegetable",
    },
    {
      id: 6,
      categoryimage: img6,
      categoryname: "Salad Vegetables",
    },
    {
      id: 7,
      categoryimage: img7,
      categoryname: "Meat",
    },
    {
      id: 8,
      categoryimage: img3,
      categoryname: "Others",
    },
  ];
  return (
    <div className="categorysidebar">
      {
      data.map((item) => {
        return (
          <div className="category">
            <img src={item.categoryimage} alt="categoryimage" />
            <h3>{item.categoryname}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySidebar;
