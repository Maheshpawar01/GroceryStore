import React from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import BannerSlider from "../../COMPONENTS/Banners/BannerSlider";
import HomeCategories from "../../COMPONENTS/Category/HomeCategories";
import Product_Sidebar from "../../COMPONENTS/Product/Product_Sidebar";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default Home;
