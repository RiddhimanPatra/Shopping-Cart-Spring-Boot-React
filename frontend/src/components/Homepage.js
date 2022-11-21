import React from "react";
// import poco1 from "../Assets/poco1.png";
import img2 from "../static/29.jpg";
import ProductLinkCard from "./ProductLinkCard";
import { Link } from "react-router-dom";
// import Header from "./Header";
import NewHeader from "./NewHeader";
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
import img28 from "../static/28.jpg";


const Homepage = () => {
  return (
    <>
      {/* <Header /> */}
      <NewHeader />
      <div
        className="mt-2 px-5 pb-4 pt-1 bg-success text-white rounded"
        style={{
          height: "40rem",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
          fontWeight: "700",
          textAlign: "left",
          fontSize:"1em",
          fontFamily:"inherit"
        }}
      >
        <div className="d-flex">
          <div
            style={{ marginRight: "2rem", marginTop: "6rem", color: "#ffffff" }}
          >
            <h1
              className="display-3  pb-3"
              style={{
                paddingTop: "40px",
                paddingBottom: "30px",
                fontWeight: "bold",
                textAlign: "left",
                color: "#99cc00",
              }}
            >
              Gadgets Store
            </h1>
            Since 1995, Mega Mart is facilitating people of Kolkata to get
            the right product for their very specific usage. Location is
            very well accessible from any point in Kolkata. Faculties are
            polite, well-behaved and stay updated with the latest information.
            Not only various brands and models of smartphones but also related
            accessories and other electronics are also available. Prices are
            good. The store inside is comfy. Online and cash both payment
            options are available in here.
            <br />
            <br />
            <Link to="/products" className="btn btn-warning">
              Shop Now
            </Link>
            <br/>
            {/* <img src={img28} height="200px" width="250px" style={{marginLeft:"35rem"}} /> */}
          </div>
          <div>
            <img src={img2} style={{ marginTop: "5rem" }} />
          </div>
        </div>
      </div>
      <div
        className="home-page"
        // style={{
        //   backgroundColor: "#ededed",
        //   height: "510px",
        // }}
      >
        <p
          className="display-6 text-center text-black my-2"
          style={{ fontWeight: "bold" }}
        >
          Featured Products
        </p>

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

        {/* <div className="mt-4">
          <div className="row">
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/1"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/2"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/3"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/4"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <ProductLinkCard
              imgsrc={poco1}
              path="/product/5"
              title="POCO X3"
              para="Price: 14000 INR"
            />
          </div> */}
        {/*  */}
      </div>
      {/* <div className="slides">
        <ImageSlider slides={SliderData} />
         <ImageHolder />  
      </div> */}

      {/* <div
        className="mt-2 px-5 pb-4 pt-1 bg-primary text-warning rounded"
        style={{
          height: "20rem",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "white",
          fontWeight: "500",
        }}
      >
        <h1
          className="display-3 text-center pb-3"
          style={{
            paddingTop: "40px",
            paddingBottom: "30px",
          }}
        >
          Your Mobi Shop
        </h1>
        Since 1995, Mobility World is facilitating people of Kolkata to get the 
        right mobile phone for theirvery specific usage. Location is very well 
        accessible from any point in Kolkata. Faculties are polite, well-behaved 
        and stay updated with the latest information. Not only various brands and
        models of smartphones but also related accessories and other electronics are 
        also available. Prices are good. The store inside is comfy. Online and cash 
        both payment options are available in here.
      </div>
      <div
        className="home-page"
        // style={{
        //   backgroundColor: "#ededed",
        //   height: "510px",
        // }}
      >
        <p className="display-6 text-center text-primary my-2 ">
          Explore Products
        </p>
        <div className="mt-4">
          <div className="row">
            <LinkCard
              imgsrc={poco1}
              path="/product/1"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/2"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/3"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/4"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/5"
              title="POCO X3"
              para="Price: 14000 INR"
            />
          </div>
          <div className="row">
            <LinkCard
              imgsrc={poco1}
              path="/product/6"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/7"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/8"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/9"
              title="POCO X3"
              para="Price: 14000 INR"
            />
            <LinkCard
              imgsrc={poco1}
              path="/product/10"
              title="POCO X3"
              para="Price: 14000 INR"
            />
          </div>
        </div>
        </div> */}
    </>
  );
};

export default Homepage;
