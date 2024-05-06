import { Link } from "react-router-dom";
import { RiShoppingBag2Fill, RiGalleryLine } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { IoEyeSharp, IoCartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import EditProduct from "./Editproduct";

const Viewproduct = () => {
  const [data, setData] = useState([]);
  const [modalShow2, setModalShow2] = useState(false);
  const [id, setId] = useState("");
  const [del, setDel] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getallproduct")
      .then(function (response) {
        // handle success
        console.log(response.data.productData);
        setData(response.data.productData.reverse());
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [modalShow2, del]);

  const deleteuser = (e, deleteid) => {
    window.confirm(`are you sure want to ${deleteid}`);
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Delete...";

    axios
      .delete(`http://localhost:5000/admin/deleteproduct/${deleteid}`)
      .then(function (response) {
        // handle success
        console.log(response);
        thisClicked.innerText = "Delete";
        setDel(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <EditProduct
        show={modalShow2}y
        onHide={() => setModalShow2(false)}
        productId={id}
      />
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
                {/* Add icons to the links using the .nav-icon class
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

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>All Products</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">All Products</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                {data.map((item) => {
                  return (
                    <>
                      {/* left column */}
                      <div className="col-xxl-3 d-flex justify-content-center">
                        <div class="outer-image">
                          <img src={item.image[0]} alt="" />
                          <div class="inner-image">
                            <img src={item.image[1]} alt="" />
                          </div>
                          <div class="products-fonts">
                            <h3>{item.title}</h3>
                            <div className="product-price">
                              <span className="first-span">${item.price}</span>
                              <span className="second-span">
                                {item.discount}% OFF
                              </span>
                            </div>
                            <p>{item.description}</p>
                            <div className="product-btn d-flex justify-content-between align-items-end">
                              <button
                                className="update change-card"
                                onClick={() => {
                                  setModalShow2(true);
                                  setId(item._id);
                                }}
                              >
                                Update
                              </button>

                              <button
                                className="delete change-card"
                                variant="primary"
                                onClick={(e) => deleteuser(e, item._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                          <div class="hovereffect-icons">
                            <div class="lower-icon">
                              <div class="mainthree-icon">
                                <IoCartOutline />
                              </div>
                              <div class="mainthree-icon">
                                <FaRegStar />
                              </div>
                              <div class="mainthree-icon">
                                <RiGalleryLine />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*/.col (left) */}
                      {/* right column */}

                      {/*/.col (right) */}
                    </>
                  );
                })}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}

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

export default Viewproduct;
