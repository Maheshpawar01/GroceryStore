import React from "react";
import ProductCard from "./ProductCard";
import img1 from "../../ASSETS/productimg/apple.png"
import img2 from "../../ASSETS/productimg/banana.png"
import img3 from "../../ASSETS/productimg/brocoli.png"
import img4 from "../../ASSETS/productimg/cabbage.png"
import img5 from "../../ASSETS/productimg/cucumber.png"
import img6 from "../../ASSETS/productimg/kiwi.png"
import img7 from "../../ASSETS/productimg/potato.png"
import img8 from "../../ASSETS/productimg/spinach.png"
import img9 from "../../ASSETS/productimg/tomato.png"
import img10 from "../../ASSETS/images/i4.png"
import "./AllProduct.css";

const AllProduct = () => {
  const products = [
    {
      id: 1,
      productimage: img1,
      productname: "Product 1",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 2,
      productimage: img2,
      productname: "Product 2",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 3,
      productimage: img3,
      productname: "Product 3",
      productprice: 300,
      counttype: "1 per kg",
      discountprecent: 19,
    },
    {
      id: 4,
      productimage: img4,
      productname: "Product 4",
      productprice: 400,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 5,
      productimage: img5,
      productname: "Product 5",
      productprice: 100,
      counttype: "1 each",
      discountprecent: 12,
    },
    {
      id: 6,
      productimage: img6,
      productname: "Product 6",
      productprice: 100,
      counttype: "1 per kg",
      discountprecent: 20,
    },
    {
      id: 7,
      productimage: img7,
      productname: "Product 7",
      productprice: 500,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 8,
      productimage: img8,
      productname: "Product 8",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 9,
      productimage: img9,
      productname: "Product 7",
      productprice: 500,
      counttype: "1 per kg",
      discountprecent: 12,
    },
    {
      id: 10,
      productimage: img10,
      productname: "Product 8",
      productprice: 200,
      counttype: "1 per kg",
      discountprecent: 12,
    },
  ]
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="products">
        {
          products.map((item) => {
          return (
            <ProductCard data={item} key={item.id} />
          )
        })}
      </div>
    </div>
  );
};

export default AllProduct;
