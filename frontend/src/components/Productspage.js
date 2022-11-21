import React from "react";
import ProductLinkCard from "./ProductLinkCard";
import iphone from "../Assets/iphone.jpg";
import headphone from "../Assets/headphone.jpg";
import laptop from "../Assets/laptop.jpg";
import airpods from "../Assets/airpods.jpg";
import Androidphone from "../Assets/androidphone.jpg";
import Bluetooth from "../Assets/bluetooth.jpg";
import keyboard from "../Assets/keyboard.jpg";
import Smartwatch from "../Assets/smartwatch.jpg";
import dslr from "../Assets/dslr.jpg";
import tablet from "../Assets/tablet.jpg";
import ImageSlider from "./imageSlider";
import ImageHolder from "./ImageHolder";
import { SliderData } from "./SliderData";
import ProductHeader from "./ProductHeader";
import "./style.css";

const Productspage = () => {
  return (
<div>
      <ProductHeader />
      <div
        className=" px-2 pb-4 pt-1  text-warning rounded"
        style={{
          // height: "40rem",
          // paddingTop: "10px",
          paddingBottom: "20px",
          backgroundColor: "white",
          fontWeight: "500",
        }}
      >
        <h1
          className="display-4 text-center pb-3"
          style={{
            paddingTop: "40px",
            paddingBottom: "30px",
          }}
        >
          <div className="slides">
            <ImageSlider slides={SliderData} />
            {/* <ImageHolder />   */}
          </div>
        </h1>
      </div>
      <div className="home-page">
      <div className="mt-4">
          <div className="row">
            <ProductLinkCard
              imgsrc={iphone}
              path=""
              title="Apple Accessories"
              para="Starting at 75000 INR only"
              
            />
            <ProductLinkCard
              imgsrc={headphone}
              path=""
              title="Headphones"
              para="Starting at 2500 INR only"
            />
            <ProductLinkCard
              imgsrc={Androidphone}
              path=""
              title="Smart Android Phones"
              para="Starting at 10000 INR only"
            />
            <ProductLinkCard
              imgsrc={laptop}
              path=""
              title="Laptops"
              para="Starting at 25000 INR only"
            />
            <ProductLinkCard
              imgsrc={airpods}
              path=""
              title="Airpods"
              para="Starting at 1500 INR only"
            />
          </div>
          <div className="row">
            <ProductLinkCard
              imgsrc={tablet}
              path=""
              title="Tablets"
              para="Starting at 15000 INR only"
            />
            <ProductLinkCard
              imgsrc={keyboard}
              path=""
              title="Keyboards & Mouses"
              para="Starting at 999 INR only"
            />
            <ProductLinkCard
              imgsrc={Bluetooth}
              path=""
              title="Bluetooth Speakers"
              para="Starting at 799 INR only"
            />
            <ProductLinkCard
              imgsrc={dslr}
              path=""
              title="Camera & DSLRs"
              para="Starting at 30000 INR only"
            />
            <ProductLinkCard
              imgsrc={Smartwatch}
              path=""
              title="Smartwatches"
              para="Starting at 2999 INR only"
            />
          </div>
          <br/><br/><br/>
        </div>
      </div>
      </div>
  );
};

export default Productspage;
