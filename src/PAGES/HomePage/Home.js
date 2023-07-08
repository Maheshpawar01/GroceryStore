import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";
import Product_Sidebar from "../../COMPONENTS/Product/Product_Sidebar";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
import img1 from "../../ASSETS/images/i1.png";
import img2 from "../../ASSETS/images/i2.png";
import img3 from "../../ASSETS/images/i3.png";
import img4 from "../../ASSETS/productimg/cabbage.png"
import img5 from "../../ASSETS/productimg/cucumber.png"
import img6 from "../../ASSETS/productimg/kiwi.png"
import img7 from "../../ASSETS/productimg/potato.png"
import img8 from "../../ASSETS/productimg/spinach.png"
import img9 from "../../ASSETS/productimg/tomato.png"
import img10 from "../../ASSETS/images/i4.png"
import ProductsSlider from "../../COMPONENTS/Product/ProductsSlider";

function Home() {
  
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
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <div className="slidercont">
        <ProductsSlider  products={products} categoryname="Related Products"/> 
        
      </div>

      <div className="slidercont">
        <ProductsSlider  products={products} categoryname="Explore More"/> 
        
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default Home;
