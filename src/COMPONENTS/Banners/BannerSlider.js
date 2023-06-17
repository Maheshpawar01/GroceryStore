import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      title: "Fresh Vegetables & Fruits at your doorstep",
      description: "we deliver fresh vegetables & fruits at your doorstep",
      button: "https://www.google.com",
    },
    {
      id: 1,
      image:
        "https://www.wallpaperbetter.com/wallpaper/796/852/888/fruits-berries-plate-peaches-cherries-1080P-wallpaper-middle-size.jpg",
      title: "Fresh Vegetables & Fruits at your doorstep",
      description:
        "Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and i couldn't be more delighter",
      button: "https://www.google.com",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bannerslider">
      <Slider className="bannerslider" {...settings}>
        {data.map((item) => {
          return (
            <div className="imagecont" key={item.id}>
              <img src={item.image} alt="noimg" />
              <div className="content">
                <h1>{item.title}</h1>
                <span>{item.description}</span>
                <button>Shop More</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
