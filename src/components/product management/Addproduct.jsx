import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormData = require("form-data");

const Addproduct = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState("");
  const navigate = useNavigate();

  
  const files = file ? [...file] : [];
  
  const addProduct = (e) => {
    e.preventDefault();
    // console.log(productType);
    const data = new FormData();
    files.forEach((file, i) => {
      data.append("images", file);
    });
    data.append("title", title);
    data.append("price", price);
    data.append("discount", discount);
    data.append("description", description);
    data.append("productType", productType);

    axios({
      headers: { "Content-Type": "multipart/form-data" },
      method: "POST",
      url: "http://localhost:5000/admin/addproduct",
      data: data,
    })
      .then((response) => {
        console.log(response);
        if(response.data.status === 200){
          navigate('/viewproduct')
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("data does not add in product page", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className="wrapper">
        {/* Preloader */}
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Navbar Search */}
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#"
                role="button"
              >
                <i className="fas fa-search" />
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* Messages Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments" />
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="dist/img/user1-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="dist/img/user8-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  {/* Message Start */}
                  <div className="media">
                    <img
                      src="dist/img/user3-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning">
                          <i className="fas fa-star" />
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li>
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="fullscreen"
                href="#"
                role="button"
              >
                <i className="fas fa-expand-arrows-alt" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-controlsidebar-slide="true"
                href="#"
                role="button"
              >
                <i className="fas fa-th-large" />
              </a>
            </li>
          </ul>
        </nav>
        {/* /.navbar */}
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">
              AdminLTE3 Furstore
            </span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Alexander Pierce
                </a>
              </div>
            </div>

            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/*  icons to the links using the .nav-icon class
                  with font-awesome or any other icon font library */}
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <Link to="/dashboard">
                      <p className="element">Dashboard</p>
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                      Forms
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item1">
                      <i className="far fa-circle nav-icon" />
                      <Link to="/general">
                        <p className="element">General Elements</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <li className="nav-item1">
                        <i className="far fa-circle nav-icon" />
                        <Link to="/advanced">
                          <p className="element">Advanced Elements</p>
                        </Link>
                      </li>
                    </li>
                    <li className="nav-item">
                      <li className="nav-item1">
                        <i className="far fa-circle nav-icon" />
                        <Link to="/editors">
                          <p className="element">Editors</p>
                        </Link>
                      </li>
                    </li>
                    <li className="nav-item">
                      <li className="nav-item1">
                        <i className="far fa-circle nav-icon" />
                        <Link to="/validation">
                          <p className="element">Validation</p>
                        </Link>
                      </li>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-table" />
                    <p>
                      Tables
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <li className="nav-item1">
                        <i className="far fa-circle nav-icon" />
                        <Link to="/simple">
                          <p className="element">Simple Tables</p>
                        </Link>
                      </li>
                    </li>
                    <li className="nav-item">
                      <li className="nav-item1">
                        <i className="far fa-circle nav-icon" />
                        <Link to="/dataTables">
                          <p className="element">DataTables</p>
                        </Link>
                      </li>
                    </li>
                    <li className="nav-item">
                      <li className="nav-item1">
                        <i className="far fa-circle nav-icon" />
                        <Link to="/jsGrid">
                          <p className="element">jsGrid</p>
                        </Link>
                      </li>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link d-flex align-items-center">
                    <RiShoppingBag2Fill className="product-icon" />
                    <p className="d-flex align-items-center">
                      Product Management
                      <i className="fas fa-angle-left right" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <li className="nav-item1">
                        <MdOutlineLibraryAdd className="product-icon" />
                        <Link to="/addproduct">
                          <p className="element">Add Product</p>
                        </Link>
                      </li>
                    </li>
                    <li className="nav-item">
                      <li className="nav-item1">
                        <IoEyeSharp className="product-icon" />
                        <Link to="/viewproduct">
                          <p className="element">View Product</p>
                        </Link>
                      </li>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>

        {/* Add product section */}
        <div className="card card-info mycontainer1">
          <div className="card-header">
            <h3 className="card-title">Add Product Form</h3>
          </div>
          {/* /.card-header */}
          {/* form start */}
          <form className="form-horizontal">
            <div className="card-body">
              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Image :
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Add Image"
                    name="file"
                    multiple
                    onChange={(e) => setFile(e.target.files)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Title :
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Add product Name"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Price :
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={price}
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Add product Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Discount :
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Add product Discount"
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Description :
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Add product Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group row d-flex align-items-center">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  ProductType :
                </label>
                <div className="col-sm-10 check-item">
                  <div className="main-items">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck2"
                      name="item"
                      onChange={(e) => {
                        if (e.target.value === "on") {
                          setProductType("hot item");
                        }
                      }}
                    />
                    <span className="check-product-type">Hot Item</span>
                  </div>
                  <div className="main-items">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck2"
                      name="item"
                      onChange={(e) => {
                        if (e.target.value === "on") {
                          setProductType("new arrival");
                        }
                      }}
                    />
                    <span className="check-product-type">New Arrival</span>
                  </div>
                  <div className="main-items">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="exampleCheck2"
                      name="item"
                      onChange={(e) => {
                        if (e.target.value === "on") {
                          setProductType("on sale");
                        }
                      }}
                    />
                    <span className="check-product-type">On Sale</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <button
                type="submit"
                className="btn btn-info"
                onClick={addProduct}
              >
                Add
              </button>
            </div>
            {/* /.card-footer */}
          </form>
        </div>
        {/* Add product section */}

        <footer className="main-footer">
          <strong>
            Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
          </div>
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
      {/* ./wrapper */}
    </div>
  );
};

export default Addproduct;
