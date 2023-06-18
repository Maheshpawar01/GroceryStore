import React from "react";
import CategorySidebar from "./CategorySidebar";
import AllProduct from "./AllProduct";
import "./Product_Sidebar.css";

const Product_Sidebar = () => {
  return (
    <div className="Product-sidebar">
      <CategorySidebar />
      <AllProduct />
    </div>
  );
};

export default Product_Sidebar;
