import React from "react";
import { Link } from "react-router-dom";

const Simple = () => {
  return (
    <div>
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
            <span className="brand-text font-weight-light">AdminLTE 3</span>
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
                    <li className="nav-item1">
                      <i className="far fa-circle nav-icon" />
                      <Link to="/simple">
                        <p className="element">Simple Tables</p>
                      </Link>
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
                  <h1>Simple Tables</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Simple Tables</li>
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
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Bordered Table</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th style={{ width: 10 }}>#</th>
                            <th>Task</th>
                            <th>Progress</th>
                            <th style={{ width: 40 }}>Label</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.</td>
                            <td>Update software</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar progress-bar-danger"
                                  style={{ width: "55%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-danger">55%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2.</td>
                            <td>Clean database</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "70%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-warning">70%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>3.</td>
                            <td>Cron job running</td>
                            <td>
                              <div className="progress progress-xs progress-striped active">
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "30%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-primary">30%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4.</td>
                            <td>Fix and squish bugs</td>
                            <td>
                              <div className="progress progress-xs progress-striped active">
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "90%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-success">90%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer clearfix">
                      <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            «
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            »
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /.card */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Condensed Full Width Table</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body p-0">
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th style={{ width: 10 }}>#</th>
                            <th>Task</th>
                            <th>Progress</th>
                            <th style={{ width: 40 }}>Label</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.</td>
                            <td>Update software</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar progress-bar-danger"
                                  style={{ width: "55%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-danger">55%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2.</td>
                            <td>Clean database</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "70%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-warning">70%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>3.</td>
                            <td>Cron job running</td>
                            <td>
                              <div className="progress progress-xs progress-striped active">
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "30%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-primary">30%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4.</td>
                            <td>Fix and squish bugs</td>
                            <td>
                              <div className="progress progress-xs progress-striped active">
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "90%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-success">90%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Simple Full Width Table</h3>
                      <div className="card-tools">
                        <ul className="pagination pagination-sm float-right">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              «
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              »
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body p-0">
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ width: 10 }}>#</th>
                            <th>Task</th>
                            <th>Progress</th>
                            <th style={{ width: 40 }}>Label</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.</td>
                            <td>Update software</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar progress-bar-danger"
                                  style={{ width: "55%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-danger">55%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2.</td>
                            <td>Clean database</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "70%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-warning">70%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>3.</td>
                            <td>Cron job running</td>
                            <td>
                              <div className="progress progress-xs progress-striped active">
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "30%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-primary">30%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4.</td>
                            <td>Fix and squish bugs</td>
                            <td>
                              <div className="progress progress-xs progress-striped active">
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "90%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-success">90%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Striped Full Width Table</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body p-0">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th style={{ width: 10 }}>#</th>
                            <th>Task</th>
                            <th>Progress</th>
                            <th style={{ width: 40 }}>Label</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.</td>
                            <td>Update software</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar progress-bar-danger"
                                  style={{ width: "55%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-danger">55%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2.</td>
                            <td>Clean database</td>
                            <td>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar bg-warning"
                                  style={{ width: "70%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-warning">70%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>3.</td>
                            <td>Cron job running</td>
                            <td>
                              <div className="progress progress-xs progress-striped active">
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "30%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-primary">30%</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4.</td>
                            <td>Fix and squish bugs</td>
                            <td>
                              <div className="progress progress-xs progress-striped active">
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: "90%" }}
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-success">90%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Responsive Hover Table</h3>
                      <div className="card-tools">
                        <div
                          className="input-group input-group-sm"
                          style={{ width: 150 }}
                        >
                          <input
                            type="text"
                            name="table_search"
                            className="form-control float-right"
                            placeholder="Search"
                          />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-default">
                              <i className="fas fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover text-nowrap">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Reason</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-success">Approved</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>219</td>
                            <td>Alexander Pierce</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-warning">Pending</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>657</td>
                            <td>Bob Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-primary">Approved</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>175</td>
                            <td>Mike Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-danger">Denied</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Fixed Header Table</h3>
                      <div className="card-tools">
                        <div
                          className="input-group input-group-sm"
                          style={{ width: 150 }}
                        >
                          <input
                            type="text"
                            name="table_search"
                            className="form-control float-right"
                            placeholder="Search"
                          />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-default">
                              <i className="fas fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div
                      className="card-body table-responsive p-0"
                      style={{ height: 300 }}
                    >
                      <table className="table table-head-fixed text-nowrap">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Reason</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-success">Approved</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>219</td>
                            <td>Alexander Pierce</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-warning">Pending</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>657</td>
                            <td>Bob Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-primary">Approved</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>175</td>
                            <td>Mike Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-danger">Denied</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>134</td>
                            <td>Jim Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-success">Approved</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>494</td>
                            <td>Victoria Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-warning">Pending</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>832</td>
                            <td>Michael Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-primary">Approved</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr>
                            <td>982</td>
                            <td>Rocky Doe</td>
                            <td>11-7-2014</td>
                            <td>
                              <span className="tag tag-danger">Denied</span>
                            </td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Expandable Table</h3>
                    </div>
                    {/* ./card-header */}
                    <div className="card-body">
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Reason</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="false"
                          >
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td>Approved</td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td colSpan={5}>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="true"
                          >
                            <td>219</td>
                            <td>Alexander Pierce</td>
                            <td>11-7-2014</td>
                            <td>Pending</td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td colSpan={5}>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="true"
                          >
                            <td>657</td>
                            <td>Alexander Pierce</td>
                            <td>11-7-2014</td>
                            <td>Approved</td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td colSpan={5}>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="false"
                          >
                            <td>175</td>
                            <td>Mike Doe</td>
                            <td>11-7-2014</td>
                            <td>Denied</td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td colSpan={5}>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="false"
                          >
                            <td>134</td>
                            <td>Jim Doe</td>
                            <td>11-7-2014</td>
                            <td>Approved</td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td colSpan={5}>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="false"
                          >
                            <td>494</td>
                            <td>Victoria Doe</td>
                            <td>11-7-2014</td>
                            <td>Pending</td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td colSpan={5}>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="false"
                          >
                            <td>832</td>
                            <td>Michael Doe</td>
                            <td>11-7-2014</td>
                            <td>Approved</td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td colSpan={5}>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="false"
                          >
                            <td>982</td>
                            <td>Rocky Doe</td>
                            <td>11-7-2014</td>
                            <td>Denied</td>
                            <td>
                              Bacon ipsum dolor sit amet salami venison chicken
                              flank fatback doner.
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td colSpan={5}>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Expandable Table Tree</h3>
                    </div>
                    {/* ./card-header */}
                    <div className="card-body p-0">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td className="border-0">183</td>
                          </tr>
                          <tr
                            data-widget="expandable-table"
                            aria-expanded="true"
                          >
                            <td>
                              <i className="expandable-table-caret fas fa-caret-right fa-fw" />
                              219
                            </td>
                          </tr>
                          <tr className="expandable-body">
                            <td>
                              <div className="p-0">
                                <table className="table table-hover">
                                  <tbody>
                                    <tr
                                      data-widget="expandable-table"
                                      aria-expanded="false"
                                    >
                                      <td>
                                        <i className="expandable-table-caret fas fa-caret-right fa-fw" />
                                        219-1
                                      </td>
                                    </tr>
                                    <tr className="expandable-body">
                                      <td>
                                        <div className="p-0">
                                          <table className="table table-hover">
                                            <tbody>
                                              <tr>
                                                <td>219-1-1</td>
                                              </tr>
                                              <tr>
                                                <td>219-1-2</td>
                                              </tr>
                                              <tr>
                                                <td>219-1-3</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr
                                      data-widget="expandable-table"
                                      aria-expanded="false"
                                    >
                                      <td>
                                        <button
                                          type="button"
                                          className="btn btn-primary p-0"
                                        >
                                          <i className="expandable-table-caret fas fa-caret-right fa-fw" />
                                        </button>
                                        219-2
                                      </td>
                                    </tr>
                                    <tr className="expandable-body">
                                      <td>
                                        <div className="p-0">
                                          <table className="table table-hover">
                                            <tbody>
                                              <tr>
                                                <td>219-2-1</td>
                                              </tr>
                                              <tr>
                                                <td>219-2-2</td>
                                              </tr>
                                              <tr>
                                                <td>219-2-3</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>219-3</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>657</td>
                          </tr>
                          <tr>
                            <td>175</td>
                          </tr>
                          <tr>
                            <td>134</td>
                          </tr>
                          <tr>
                            <td>494</td>
                          </tr>
                          <tr>
                            <td>832</td>
                          </tr>
                          <tr>
                            <td>982</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
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

export default Simple;
