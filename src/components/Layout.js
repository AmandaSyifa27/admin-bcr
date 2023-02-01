import React from "react";
import Header from "../components/Header.js";
import carsImg from "../assets/CarsImg.png";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-logo">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" fill="#CFD4ED" />
          </svg>
        </div>
        <div className="sidebar-menu">
          <div className="dashboard-menu">
            <Link to="/">
              <img src={dashboardImg} alt="dashboardimg" />
              <p>Dashboard</p>
            </Link>
          </div>
          <div>
            <Link to="/list-cars">
              <img src={carsImg} alt="carsimg" />
              <p>List Cars</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="sidebar2">
        <div className="header-logo">
          <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="34" fill="#CFD4ED" />
          </svg>
        </div>
        <div className="sidebar2-p">
          <div>
            <h5>DASHBOARD</h5>
          </div>
          <div className="sidebar2-name">
            <h5>Dashboard</h5>
          </div>
        </div>
      </div>
      <div className="content1">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
