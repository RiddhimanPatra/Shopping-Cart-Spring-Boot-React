import React from "react";
import { Link, NavLink } from "react-router-dom";
import AdminCard from "./AdminCard";
import avatar from "../Assets/avatar.png";
import orders from "../Assets/orders.png";
import productslogo from "../Assets/productslogo.png";
import "./style.css";
import NewHeader from "./NewHeader";
// import img1 from "./Assets/AD2.jpeg";
// import img2 from "./images/images (17).png";
// import departmentService from "./services/department.service";
// import employeeService from "./services/employee.service";
// import projectService from "./services/project.service";
// import { useState, useEffect } from "react";

function AdminDashboard() {
  // const [empCount, setEmpCount] = useState("");
  // const [deptCount, setDeptCount] = useState("");
  // const [projectCount, setProjectCount] = useState("");

  // const CountRow = () => {
  //   employeeService
  //     .totalCount()
  //     .then((response) => {
  //       setEmpCount(response.data);
  //     })
  //     .catch(() => {
  //       console.log("not find the row, something went wrong");
  //     });

  //   departmentService
  //     .totalCount()
  //     .then((response) => {
  //       setDeptCount(response.data);
  //     })
  //     .catch(() => {
  //       console.log("not find the row, something went wrong");
  //     });

  //   projectService
  //     .totalCount()
  //     .then((response) => {
  //       setProjectCount(response.data);
  //     })
  //     .catch(() => {
  //       console.log("not find the row, something went wrong");
  //     });
  // };

  // useEffect(() => {
  //   CountRow();
  // }, []);

  return (
    <div>
      <NewHeader />

      
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left bg-warning"
        style={{ zIndex: "3", width: "300px" }}
        id="mySidebar"
      >
        <br />
        <br />
        {/* <br />
        <div className="w3-container w3-row">
          <div className="w3-col s4">
            <img
              // src={{img 1}}
              className="w3-circle w3-margin-right"
              style={{ width: "46px" }}
            />
          </div>
        </div> */}

        <div className="ml-4 fw-bold h3">
          <span>Welcome Admin</span>
          <hr />
        </div>
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <div className="w3-bar-block">
          <a
            href="#"
            className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
          >
            <i className="fa fa-remove fa-fw"></i>Close Menu
          </a>

          {/* <a href="adminHomepage" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bullseye fa-fw"></i> Overview
          </a> */}
          {/* <a href="/profile" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bullseye fa-fw"></i> Admin Profile
          </a> */}
          {/* <Link to="/admin/password"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-edit"></i> Change Password
          </Link> */}
          <a href="/admin/profile" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-users fa-fw"></i> My Profile
          </a>

          <a href="admin/allproduct" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-comment"></i> Products
          </a>

          <a href="admin/allorder" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-comment"></i> Orders
          </a>
          <Link to="/admin/login" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-sign-out fa-fw"></i> Log Out
          </Link>
          <br />
          <br />
        </div>
      </nav>

      {/* <!-- Overlay effect when opening sidebar on small screens --> */}

      
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity "
        // onClick={w3_close}
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      ></div>

      {/* <!-- !PAGE CONTENT! --> */}
      <div
        className="w3-main"
        style={{ marginLeft: "300px !important", marginTop: "43px" }}
      />

      {/* <!-- Header --> */}
      <header
        className="w3-container"
        style={{ paddingTop: "22px", marginLeft: "300px" }}
      >
        <h5>
          <b>
            <i className="fa fa-dashboard"></i> &nbsp; My Dashboard
          </b>
        </h5>
      </header>

      <div className="mr-5" style={{ marginLeft: "300px" }}>
        <div className="row">
          {/* <AdminCard
            style={{ fontWeight: "bold" }}
            imgsrc={poco1}
            path="/product/1"
            title="ADMINS"
            para="Price: 14000 INR"
          /> */}
          <AdminCard
            imgsrc={avatar}
            path="/profile"
            title="MY PROFILE"
          />
          <AdminCard
            imgsrc={orders}
            path="/admin/allorder"
            title="ORDERS"
          />
          <AdminCard 
          imgsrc={productslogo} 
          path="/admin/allproduct" 
          title="PRODUCTS" />
        </div>

        <div className="fw-bold" style={{ marginTop: "5rem" }} align="center">
          {" "}
          Copyright Reserved{" "}
        </div>
        {/* <!--Admin div--> */}
        {/* <a href="/admin1">
          <div className="w3-quarter">
            <div className="w3-container w3-teal w3-padding-16">
              <div className="w3-left">
                <i className="fa fa-users w3-xxxlarge"></i>
              </div>
              <div className="w3-right"></div>
              <div className="w3-clear"></div>
              <h4>Admins</h4>
              <h5>4</h5>
            </div>
          </div>
        </a>

        {/* <!--User div--> */}
        {/* <a href="/employeesList">
          <div className="w3-quarter w3-margin-left">
            <div className="w3-container w3-red w3-padding-16">
              <div className="w3-left">
                <i className="fa fa-users w3-xxxlarge"></i>
              </div>
              <div className="w3-right"></div>
              <div className="w3-clear"></div>
              <h4>Users</h4>
              <h5>{empCount}</h5>
            </div>
          </div>
        </a>

        <a href="/departmentList">
          {" "}
          <div className="w3-quarter w3-margin-left">
            <div className="w3-container w3-pink w3-padding-16">
              <div className="w3-left">
                <i className="fa fa-building-o w3-xxxlarge"></i>
              </div>
              <div className="w3-right"></div>
              <div className="w3-clear"></div>
              <h4>Orders</h4>
              <h5>{deptCount}</h5>
            </div>
          </div>
        </a> */}

        {/* <Link to="/admin/addproduct">
          <div className="w3-quarter w3-margin-top">
            <div className="w3-container w3-purple w3-padding-16">
              <div className="w3-left">
                <i className="fa fa-sticky-note w3-xxxlarge"></i>
              </div>
              <div className="w3-right"></div>
              <div className="w3-clear"></div>
              <h4>Products</h4>
              <h5>{projectCount}</h5>
            </div>
          </div>
        </Link> */}

        <div className="w3-panel" id="Admin">
          <div
            className="w3-row-padding w3-margin-top"
            style={{ margin: "0 -16px" }}
          ></div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default AdminDashboard;
