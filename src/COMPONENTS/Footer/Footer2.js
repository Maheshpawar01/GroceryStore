import React from "react";
import payimg from "../../ASSETS/pay.png";
import logo from "../../ASSETS/logo.png";
import social from "../../ASSETS/social.png";
import './Footer2.css'

const Footer2 = () => {
  return (
    <div className="footer">
      <div className="footerin1">
        <div className="f1">
          <img src={logo} alt="logo" className="logo" />
          <p>
            Fit Grocery is a leading online grocery store in the USA. We are
            committed to providing the best quality products at the best prices.
          </p>
          <img src={social} alt="" />
        </div>
        <div className="f2">
          <h3>About Us</h3>
          <p>About Us </p>
          <p>Contact Us</p>
          <p>About Team</p>
          <p>Customer Support</p>
        </div>
        <div className="f2">
          <h3>Our Information</h3>
          <p>Privacy policy</p>
          <p>Terms & condition</p>
          <p>Return policy</p>
          <p>site map</p>
        </div>
        <div className="f2">
          <h3>Community</h3>
          <p>Announcements</p>
          <p>Answer center</p>
          <p>Discussion boards</p>
          <p>Giving works</p>
        </div>
        <div className="f2">
          <h3>Subscribe Now</h3>
          <p>
            Subscribe your email for newsletter and featured news based on your
            interest
          </p>
          <div className="inputcontainer">
            <span className="icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input type="text" placeholder="Enter your email"  />
            <div className="icon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="footerin2">
        <h3>© Copyright 2023 Fit Grocery, Inc. All rights reserved</h3>
        <img src={payimg} alt="" />
      </div>
    </div>
  );
};

export default Footer2;
