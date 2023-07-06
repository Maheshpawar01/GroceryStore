import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ProductPage.css'
import { useParams } from "react-router-dom";
import img1 from "../../ASSETS/images/i1.png";
import img2 from "../../ASSETS/images/i2.png";
import img3 from "../../ASSETS/images/i3.png";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import Footer1 from "../../COMPONENTS/Footer/Footer1"
import Footer2 from "../../COMPONENTS/Footer/Footer2"


const ProductPage = () => {
  const { prodid } = useParams();
  const [imageset, setImageset] = React.useState(null);
  const [productdata, setProductdata] = React.useState([]);
  const [activeimg, setActiveimg] = React.useState({});
  const [count, setCount] = React.useState (1)
  const [showreview, setShowreview] = React. useState(false)


  const getproductdatabyid = async () => {
  let temp = {
      "Code": 200,
      "Message": "Success",
      "Data": [
          {
              "ProductId": 1,
              "ProductName": "Product 1",
              "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              "ProductImage": [
                  {
                      id: 1,
                      image: img1
                  },
                  {
                      id: 2,
                      image: img2
                  },
                  {
                      id: 3,
                      image: img3
                  }
              ],
              "ProductCode": "P1",
              "ProductCategory": "Category 1",
              "ProductSubCategory": "Sub Category 1",
              "ProductBrand": "Brand 1",
              "ProductColor": "Color 1",
              "ProductSize": "Size 1",
              "ProductWeight": "Weight 1",
              "ProductMaterial": "Material 1",
              "ProductQuantity": 10,
              "ProductUnit": "Unit 1",
              "ProductPrice": 100,
              "SalesPrice": 80,
              "ProductDiscount": 20,
              "ProductDiscountType": "Percentage",
              "ProductTax": 20,
              "ProductTaxType": "Percentage",
              "ProductShippingCharge": 20,
              "ProductShippingChargeType": "Percentage",
              "ProductShippingTime": "1-2 days",
              "ProductShippingTimeType": "Days",
              "ProductShippingLocation": "Location 1",
              "ProductShippingLocationType": "Country",
              "ProductShippingReturnPolicy": "Return Policy 1",
              "ProductShippingReturnPolicyType": "Days",
              "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
              "ProductShippingReturnPolicyDescriptionType": "Days",
              "ProductReviews": [
                  {
                      "ReviewId": 1,
                      "Name": "Mahesh Pawar",
                      "Email": "",
                      "Rating": 5,
                      "Date": "2023-02-01",
                      "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  },
                  {
                      "ReviewId": 2,
                      "Name": "Viraj",
                      "Email": "",
                      "Rating": 1,
                      "Date": "2021-08-01",
                      "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                  },
                  {
                      "ReviewId": 3,
                      "Name": "Harshal Jain",
                      "Email": "",
                      "Rating": 4,
                      "Date": "2022-08-01",
                      "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  }
              ]
          }
      ]
  }

    if (temp.Code == 200) {
      setImageset(temp.Data[0].ProductImage);
      setProductdata(temp.Data[0]);
      setActiveimg(temp.Data[0].ProductImage[0]);
    }
  };

  useEffect(() => {
    getproductdatabyid();
  }, []);
  return (
    <div className="productpage">
      {/* <h1>Product id is - {prodid}</h1>
        <p>
          {JSON.stringify(productdata)}
        </p> */}
      <Navbar />
      <div className="pc1">
        <Link to="/">
          <button className="goback">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Go Back
          </button>
        </Link>

        <div className="c11">
          <div className="imgset">
            {
              
              imageset && imageset?.map((item,index) =>
              {
                    return (
                    <div className="imgsmall" onClick={()=>{
                      setActiveimg(item)
                    }}>
                      <img src={item.image} alt="" className={activeimg.id == item.id ? 'active' : ""}                />
                    </div>
                  )
              
              })
            }
          </div>
          <div className="imgbig">
            <img src={activeimg.image} alt="" />
          </div>
        </div>
        <div className="c12">
          <h1 className="head1">{productdata.ProductName}</h1>
          <div className="c121">
            <p className="price">
              ₹{productdata.SalesPrice * count}
              <span>₹{productdata.ProductPrice * count}</span>
            </p>
            <div className="incrdecr">
              <button
                onClick={()=>{
                  if(count > 1) {
                    setCount(count - 1)
                  }
                }}
              >-</button>
              <p>{count}</p>
              <button onClick={()=>{
                if(count < 10){
                  setCount(count + 1)
                }
              }}>+</button>
            </div>
          </div>

          <div className="btncont">
            <button
            onClick={()=>{
              alert('Added to cart')
            }}
            >
              Add to Cart
            </button>
            <button
              onClick={()=>{
                alert('Buy Now')
              }}
            >
              Buy Now
            </button>
          </div>


       </div>
      </div>
      <div className="pc2">
        {
          showreview ? 
           <div className="tabs">
            <button className="inactive" onClick={()=>{
              setShowreview(false)
            }}>
              Description
            </button>
            <button className="active" onClick={()=>{setShowreview(true)}}>Review</button>
           </div>
           :
           <div className="tabs">
            <button className="active" onClick={()=>{setShowreview(false)}}>Description</button>
            <button className="inactive" onClick={()=>{setShowreview(true)}}> Review</button>
           </div>
        }
        {
          showreview ? 
          <div className="reviewcont">
            <form action="">
              <div className="fromgroup">
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className="fromgroup">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div className="fromgroup">
                <label htmlFor="">Review</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <button>Submit</button>
            </form>

            <div className="allreview">
              <h1 className="head1">Product Reviews</h1>
                {productdata.ProductReviews && 
                  productdata.ProductReviews.map((item,index)=>{
                    return(
                      <div className="review">
                        <div className="reviewhead">
                          <p className="name">{item.Name}</p>
                          <span className="date">{item.Date}</span>
                        </div>
                        <div className="reviewbody">
                          {item.Review}
                        </div>
                      </div>
                    )
                  })
                }
            </div>

          </div>
          :
          <p className="desc">
            {productdata.ProductDescription}
          </p>
                  
        }

      </div>

      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default ProductPage;
